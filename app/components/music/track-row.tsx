import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { RecentlyPlayedTrackData } from '@/lib/spotify';
import { formatRelativeTime } from '@/lib/spotify';

interface TrackRowProps {
  track: RecentlyPlayedTrackData;
  index: number;
  className?: string;
}

const TrackRow: React.FC<TrackRowProps> = ({ track, index, className }) => {
  return (
    <li
      className={twMerge(
        'flex items-center gap-4 py-3 border-b border-brown/10 last:border-b-0',
        className
      )}
    >
      <span className="text-brown w-6 text-right tabular-nums">
        {index + 1}
      </span>

      <a
        href={track.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden"
      >
        <Image
          src={track.imageUrl}
          alt={`${track.name} by ${track.artistName}`}
          fill
          className="object-cover"
          sizes="64px"
        />
      </a>

      <div className="flex-1 min-w-0">
        <a
          href={track.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <p className="duration-250 ease-in-out font-orelega text-brown text-xl transition-colors truncate group-hover:text-orange">{track.name}</p>
          <p className="text-brown/70 truncate">{track.artistName}</p>
        </a>
      </div>

      <time
        dateTime={track.playedAt}
        className="text-brown/50 flex-shrink-0"
      >
        {formatRelativeTime(track.playedAt)}
      </time>
    </li>
  );
};

export default TrackRow;
