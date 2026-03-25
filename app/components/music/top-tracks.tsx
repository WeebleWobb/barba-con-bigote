import React from 'react';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/typography/header';
import { Skeleton } from '@/components/ui/skeleton';
import TrackCard from './track-card';
import type { TrackCardData } from '@/lib/spotify';

interface TopTracksProps {
  tracks?: TrackCardData[];
  isLoading?: boolean;
  count?: number;
  className?: string;
}

function SkeletonCard() {
  return (
    <div className="w-full bg-tan border-[3px] border-brown/20 rounded-2xl overflow-hidden">
      <Skeleton className="aspect-square rounded-none" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

const TopTracks: React.FC<TopTracksProps> = ({
  tracks,
  isLoading = false,
  count = 6,
  className,
}) => {
  return (
    <section className={twMerge('', className)}>
      <Header level={2}>Top Tracks</Header>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        role="region"
        aria-label={isLoading ? 'Loading top tracks' : 'Top Tracks'}
      >
        {isLoading
          ? Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)
          : tracks?.map((track) => <TrackCard key={track.id} track={track} />)}
      </div>
    </section>
  );
};

export default TopTracks;
