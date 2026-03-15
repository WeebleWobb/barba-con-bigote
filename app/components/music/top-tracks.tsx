import React from 'react';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/typography/header';
import TrackCard from './track-card';
import type { TrackCardData } from '@/lib/spotify';

interface TopTracksProps {
  tracks: TrackCardData[];
  className?: string;
}

const TopTracks: React.FC<TopTracksProps> = ({ tracks, className }) => {
  return (
    <section className={twMerge('', className)}>
      <Header level={2}>Top Tracks</Header>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        role="region"
        aria-label="Top Tracks"
      >
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  );
};

export default TopTracks;
