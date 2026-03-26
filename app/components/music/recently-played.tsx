import React from 'react';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/typography/header';
import { Skeleton } from '@/components/ui/skeleton';
import TrackRow from './track-row';
import type { RecentlyPlayedTrackData } from '@/lib/spotify';

interface RecentlyPlayedProps {
  tracks?: RecentlyPlayedTrackData[];
  isLoading?: boolean;
  count?: number;
  className?: string;
}

function SkeletonRow() {
  return (
    <li className="flex items-center gap-4 py-3 border-b border-brown/10 last:border-b-0">
      <Skeleton className="w-6 h-5" />
      <Skeleton className="w-16 h-16 rounded-lg shrink-0" />
      <div className="flex-1 min-w-0 space-y-2">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
      <Skeleton className="w-16 h-4 shrink-0" />
    </li>
  );
}

const RecentlyPlayed: React.FC<RecentlyPlayedProps> = ({
  tracks,
  isLoading = false,
  count = 10,
  className,
}) => {
  const borderClass = isLoading ? 'border-brown/20' : 'border-brown';

  return (
    <section className={twMerge('', className)}>
      <Header level={2}>Recently Played</Header>
      <ol className={twMerge('bg-tan border-[3px] rounded-2xl p-4', borderClass)}>
        {isLoading
          ? Array.from({ length: count }).map((_, i) => <SkeletonRow key={i} />)
          : tracks?.map((track, index) => (
              <TrackRow
                key={`${track.id}-${track.playedAt}`}
                track={track}
                index={index}
              />
            ))}
      </ol>
    </section>
  );
};

export default RecentlyPlayed;
