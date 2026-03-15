import { unstable_cache } from 'next/cache';
import { getAccessToken } from './auth';
import {
  TopTracksResponse,
  RecentlyPlayedResponse,
  TrackCardData,
  RecentlyPlayedTrackData,
  SpotifyTrack,
} from './types';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

async function fetchSpotify<T>(endpoint: string): Promise<T> {
  const token = await getAccessToken();

  const response = await fetch(`${SPOTIFY_API_BASE}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Spotify API error: ${response.status} - ${error}`);
  }

  return response.json();
}

function transformTrack(track: SpotifyTrack): TrackCardData {
  return {
    id: track.id,
    name: track.name,
    artistName: track.artists.map((a) => a.name).join(', '),
    albumName: track.album.name,
    imageUrl: track.album.images[0]?.url ?? '',
    spotifyUrl: track.external_urls.spotify,
  };
}

// Fetch top tracks with caching (5 min TTL)
export const getTopTracks = unstable_cache(
  async (limit: number = 10): Promise<TrackCardData[]> => {
    const data = await fetchSpotify<TopTracksResponse>(
      `/me/top/tracks?limit=${limit}&time_range=medium_term`
    );

    return data.items.map(transformTrack);
  },
  ['spotify-top-tracks'],
  { revalidate: 300 }
);

// Fetch recently played with caching (5 min TTL)
export const getRecentlyPlayed = unstable_cache(
  async (limit: number = 10): Promise<RecentlyPlayedTrackData[]> => {
    const data = await fetchSpotify<RecentlyPlayedResponse>(
      `/me/player/recently-played?limit=${limit}`
    );

    return data.items.map((item) => ({
      ...transformTrack(item.track),
      playedAt: item.played_at,
    }));
  },
  ['spotify-recently-played'],
  { revalidate: 300 }
);

// Format relative time (e.g., "2 min ago")
export function formatRelativeTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);

  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHr < 24) return `${diffHr} hr ago`;
  return `${Math.floor(diffHr / 24)} days ago`;
}
