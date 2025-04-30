"use client";

import { memo, useMemo, useRef, useCallback } from 'react';
import { FixedSizeGrid } from 'react-window';
import { cn } from '@/lib/utils';
import { useWindowSize } from '@/lib/hooks/use-window-size';

interface VirtualizedArtistGridProps {
  artists: string[];
  color?: string;
  className?: string;
}

const VirtualizedArtistGrid = ({ artists, color = "chart-1", className = "" }: VirtualizedArtistGridProps) => {
  const { width } = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Determine number of columns based on viewport width
  const columnCount = useMemo(() => {
    if (width >= 1024) return 5; // lg
    if (width >= 768) return 4;  // md
    return 3;                    // default/mobile
  }, [width]);
  
  // Calculate rows needed
  const rowCount = useMemo(() => {
    return Math.ceil(artists.length / columnCount);
  }, [artists.length, columnCount]);
  
  // Calculate cell sizes
  const columnWidth = useMemo(() => {
    const containerWidth = width > 1200 ? 1140 : width - 40; // Approximate container width with padding
    return Math.floor(containerWidth / columnCount);
  }, [width, columnCount]);
  
  // Cell renderer function
  const Cell = useCallback(({ columnIndex, rowIndex, style }: { columnIndex: number, rowIndex: number, style: React.CSSProperties }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= artists.length) return null;
    
    const name = artists[index];
    const isLast = index === artists.length - 1;
    
    return (
      <div style={style} className="flex items-center justify-center artist-item">
        <span className={`artist-name whitespace-nowrap ${color === "chart-2" ? "text-chart-2" : ""}`}>
          {name}
        </span>
        {!isLast && (
          <span className="artist-separator mx-1">♦</span>
        )}
      </div>
    );
  }, [artists, columnCount, color]);
  
  // Use a fixed height for each row to improve performance
  const rowHeight = 50;
  
  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <FixedSizeGrid
        className="styled-scrollbar"
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={Math.min(rowCount * rowHeight, 600)} // Cap the height
        rowCount={rowCount}
        rowHeight={rowHeight}
        width={width > 1200 ? 1140 : width - 40}
        itemData={artists}
      >
        {Cell}
      </FixedSizeGrid>
    </div>
  );
};

export default memo(VirtualizedArtistGrid);