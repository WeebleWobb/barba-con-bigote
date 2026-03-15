import React from 'react';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/typography/header';
import TrackRow from './track-row';
import type { RecentlyPlayedTrackData } from '@/lib/spotify';

interface RecentlyPlayedProps {
  tracks: RecentlyPlayedTrackData[];
  className?: string;
}

const RecentlyPlayed: React.FC<RecentlyPlayedProps> = ({ tracks, className }) => {
  return (
    <section className={twMerge('', className)}>
      <Header level={2}>Recently Played</Header>
      <ol className="bg-tan border-[3px] border-brown rounded-2xl p-4">
        {tracks.map((track, index) => (
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
