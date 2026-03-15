import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens, getAuthorizationUrl } from '@/lib/spotify';

// GET /api/spotify/callback
// Handles the OAuth callback from Spotify
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  // If no code and no error, redirect to Spotify auth
  if (!code && !error) {
    const authUrl = getAuthorizationUrl();
    return NextResponse.redirect(authUrl);
  }

  // Handle error from Spotify
  if (error) {
    return NextResponse.json(
      { error: `Spotify authorization failed: ${error}` },
      { status: 400 }
    );
  }

  // At this point, code is guaranteed to be a string (not null)
  if (!code) {
    return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 });
  }

  try {
    // Exchange the code for tokens
    const tokens = await exchangeCodeForTokens(code);

    // Display the refresh token for the user to save
    // In production, you'd store this securely
    return NextResponse.json({
      message: 'Authorization successful!',
      instructions: 'Copy the refresh_token below and add it to your environment variables as SPOTIFY_REFRESH_TOKEN',
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token,
      expires_in: tokens.expires_in,
      scope: tokens.scope,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
