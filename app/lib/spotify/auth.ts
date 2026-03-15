import { SpotifyTokenResponse } from './types';

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

// In-memory token cache for server-side
let cachedToken: string | null = null;
let tokenExpiry: number = 0;

function getCredentials() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify credentials in environment variables');
  }

  return { clientId, clientSecret, refreshToken };
}

export async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (with 60s buffer)
  if (cachedToken && Date.now() < tokenExpiry - 60000) {
    return cachedToken;
  }

  const { clientId, clientSecret, refreshToken } = getCredentials();

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to refresh Spotify token: ${error}`);
  }

  const data: SpotifyTokenResponse = await response.json();

  // Cache the token
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + data.expires_in * 1000;

  return data.access_token;
}

// Generate authorization URL for initial setup
export function getAuthorizationUrl(): string {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    throw new Error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI');
  }

  const scopes = ['user-top-read', 'user-read-recently-played'];

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: scopes.join(' '),
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
}

// Exchange authorization code for tokens (used in callback route)
export async function exchangeCodeForTokens(code: string): Promise<SpotifyTokenResponse> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to exchange code: ${error}`);
  }

  return response.json();
}
