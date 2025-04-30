"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/countdown";
import Link from "next/link";
import Image from "next/image";
import { useThrottle } from "@/lib/hooks/use-throttle";
import { useWindowSize } from "@/lib/hooks/use-window-size";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const festivalDate = new Date("2025-07-10T00:00:00");
  const { width } = useWindowSize();
  
  useEffect(() => {
    setIsLoaded(true);
    setIsMobile(width < 768);
  }, [width]);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://player.vimeo.com/video/1079188281?background=1&autoplay=1&loop=1&muted=1"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="NOL_2025332"
          ></iframe>
        </div>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60 z-[1]"></div>
      </div>
      
      <div className="container px-4 pt-20 pb-12 flex flex-col items-center text-center z-10 relative">
        <div 
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-4 tracking-tight">
            <span className="block relative">NATIONS OF</span>
            <span className="relative inline-block text-chart-1 text-6xl md:text-8xl lg:text-[10rem]">
              LEGENDS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-2xl mx-auto">
            FILISUR | 10.07 - 13.07.2025
          </p>
          
          <div className="mb-10">
            <Countdown targetDate={festivalDate} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg bg-chart-1 hover:bg-chart-1/80 text-white border-none"
              onClick={() => window.open("https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg", "_blank")}
            >
              TICKETS KAUFEN
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-chart-2 text-chart-2 hover:bg-chart-2/10"
              asChild
            >
              <Link href="/lineup">LINE-UP ENTDECKEN</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full text-center pb-12 relative z-10">
        <p className="text-2xl italic">WE ALL SEARCHING <span className="text-chart-2">GEBORGENHEIT</span></p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}