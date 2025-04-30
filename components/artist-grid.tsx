"use client";

import { memo } from 'react';
import { cn } from '@/lib/utils';

interface ArtistGridProps {
  artists: string[];
  color?: string;
  className?: string;
}

const ArtistGrid = ({ artists, color = "chart-1", className = "" }: ArtistGridProps) => {
  return (
    <div className={cn("grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 justify-items-center text-center", className)}>
      {artists.map((name, index) => (
        <div key={index} className="flex items-center artist-item">
          <span className={`artist-name whitespace-nowrap ${color === "chart-2" ? "text-chart-2" : ""}`}>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(ArtistGrid);