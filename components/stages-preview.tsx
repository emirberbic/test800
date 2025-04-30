"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";

// Sample stages data
const stages = [
  {
    id: 1,
    name: "HEPTAGON",
    description: "Das Herzstück des Festivals mit unseren Top-Headlinern und spektakulären Lichtshows.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60",
    color: "chart-1",
  },
  {
    id: 2,
    name: "CHILLED SMOKERS AREA",
    description: "Rohe und authentische Techno-Beats in einer industriellen Umgebung für wahre Musikliebhaber.",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&auto=format&fit=crop&q=60",
    color: "chart-2",
  }
];

export default function StagesPreview() {
  const [activeStage, setActiveStage] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });
  
  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            ENTDECKE UNSERE AREAS
          </h2>
          <Button 
            variant="outline" 
            className="font-rajdhani border-chart-2 text-chart-2 hover:bg-chart-2/10"
            asChild
          >
            <Link href="/stages">ALLE AREAS ANSEHEN</Link>
          </Button>
        </div>
        
        {isVisible && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg gpu-accelerated">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    index === activeStage ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                  <OptimizedImage
                    src={stage.image}
                    alt={stage.name}
                    width={800}
                    height={600}
                    className="w-full h-full"
                    fadeIn={true}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 
                      className={`font-rajdhani text-3xl font-bold mb-2 text-${stages[activeStage].color}`}
                    >
                      {stage.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  className={cn(
                    "text-left p-6 rounded-lg transition-all duration-300",
                    index === activeStage
                      ? `bg-${stage.color}/10 border border-${stage.color}`
                      : "bg-card border border-border hover:border-muted-foreground"
                  )}
                  onClick={() => setActiveStage(index)}
                >
                  <h3 
                    className={cn(
                      "font-rajdhani text-xl font-bold mb-2",
                      index === activeStage && `text-${stage.color}`
                    )}
                  >
                    {stage.name}
                  </h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}