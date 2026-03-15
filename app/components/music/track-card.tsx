import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { TrackCardData } from '@/lib/spotify';

interface TrackCardProps {
  track: TrackCardData;
  className?: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ track, className }) => {
  return (
    <a
      href={track.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        'block w-full bg-tan border-[3px] border-brown rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02]',
        className
      )}
    >
      <div className="relative aspect-square">
        <Image
          src={track.imageUrl}
          alt={`Album artwork for ${track.name} by ${track.artistName}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
        />
      </div>
      <div className="p-3">
        <p className="font-orelega text-brown text-lg truncate">{track.name}</p>
        <p className="text-brown/70 truncate">{track.artistName}</p>
      </div>
    </a>
  );
};

export default TrackCard;
