"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useWindowSize } from "@/lib/hooks/use-window-size";
import VirtualizedArtistGrid from "@/components/virtualized-artist-grid";

// Heptagon and Octagon Artists data
const heptagonOctagonArtists = [
  "7ELEVEN", "ACE VENTURA", "ADHOI", "AIOASKA", "AKUSTIK", "ALPHATRANCE", 
  "AUDIOFISTERS", "BOOM SHANKAR", "BEN TEN", "BIM", "CHAOTIX", "CLOUD7", 
  "CORNFLAKES 3D", "DARBOUKA", "DER'10TH", "DISTRICT ZERO", "DREAM", "ECTIMA", 
  "EINSIEDLER", "FACE DESIGN", "FEUERHAKE", "HEISENBERE", "JOYRIDER", "INNER SPHERE", 
  "JACKOMO", "JACKATEK", "JILAX", "KAYCE CANE", "KOBOLD", "LEADS", "LIQUID UNIVERSE", 
  "LOVEGUN", "LSDIRTY", "NECMI", "NOVI MASCHILTON", "PAVA", "PGM", "PATTRONIX", 
  "PROGSMILEZ", "PROFILER", "QUEROX", "SACRED SECRET", "NEMEL", "SERENITY FLUX", 
  "SPYRO", "SI-MOON", "SNEFFINSKY", "TAMAHUKA", "TWENTY4HOUR", "TRITON", "YETI", 
  "ZYCE vs FLEGMA"
];

// Chilled Smokers Area Artists
const chilledArtists = [
  "ALDO M", "ALEXDEE", "NEOBEO", "LIESE", "SPACFREAK", "SUDUAYA"
];

export default function LineupPreview() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });
  
  const { width } = useWindowSize();
  const frameRef = useRef<HTMLDivElement>(null);
  
  // Optimized rendering based on visibility
  const shouldRender = isVisible;
  
  return (
    <section ref={ref} className="py-20 content-container">
      <div className="container px-4">
        <div ref={frameRef} className="ornate-frame p-8 mb-10 rounded-lg gpu-accelerated">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4 md:mb-0 neon-text">
              CELEBRATING
            </h2>
            <p className="text-xl text-chart-2">4 DAYS OF GEBORGENHEIT ON 3 AREAS</p>
          </div>
          
          {shouldRender && (
            <div className="mb-8">
              <VirtualizedArtistGrid 
                artists={heptagonOctagonArtists} 
                color="chart-1" 
              />
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              className="font-rajdhani border-chart-1 text-chart-1 hover:bg-chart-1/10"
              asChild
            >
              <Link href="/lineup">VOLLSTÄNDIGES LINE-UP</Link>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-chart-2">
            CHILLED SMOKERS AREA
          </h2>
        </div>
        
        {shouldRender && (
          <div className="grid grid-cols-1 gap-4 text-center mb-8">
            <VirtualizedArtistGrid 
              artists={chilledArtists} 
              color="chart-2" 
            />
          </div>
        )}
      </div>
    </section>
  );
}