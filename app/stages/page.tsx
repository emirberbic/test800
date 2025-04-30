"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Users, Clock } from "lucide-react";

// Festival stages data based on the flyer
const stages = [
  {
    id: "heptagon",
    name: "HEPTAGON",
    description: "Haupttanzfläche mit unglaublichen Lichtshows und kraftvoller Psytrance-Musik.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&auto=format&fit=crop&q=60",
    secondaryImages: [
      "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1642178225043-f299072af862?w=800&auto=format&fit=crop&q=60",
    ],
    capacity: "7.000",
    genre: "Psy-Trance, Progressive",
    hours: "18:00 - 08:00",
    features: [
      "State-of-the-Art Soundsystem",
      "Hypnotisierende Visuals und Mapping",
      "Umfassendes Dancefloor-Design",
      "Ausgewogene Akustik",
      "Durchgehende Performance"
    ],
    artists: [
      "7ELEVEN", 
      "ADHD", 
      "ALPHATRANCE",
      "BOOM SHANKAR",
      "QUEROX"
    ]
  },
  {
    id: "octagon",
    name: "OCTAGON",
    description: "Der zweite Area mit dunkleren, tieferen Sounds und einer intensiven, mystischen Atmosphäre.",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&auto=format&fit=crop&q=60",
    secondaryImages: [
      "https://images.unsplash.com/photo-1516651029879-bcd95e4f0498?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1571265616266-c99522cabf36?w=800&auto=format&fit=crop&q=60",
    ],
    capacity: "5.000",
    genre: "Dark Psy, Forest, Hi-Tech",
    hours: "20:00 - 10:00",
    features: [
      "Immersives Klangumfeld",
      "Mystische Bühnengestaltung",
      "Fortschrittliche Beleuchtungstechnik",
      "Grosse Tanzfläche",
      "Seitliche Chill-Bereiche"
    ],
    artists: [
      "ACE VENTURA", 
      "AIOASKA", 
      "AUDIOFISTERS",
      "CHAOTIX",
      "LIQUID UNIVERSE"
    ]
  },
  {
    id: "chilled",
    name: "CHILLED SMOKERS AREA",
    description: "Eine entspannte Zone mit Ambient und Downtempo-Musik, gedämpfter Beleuchtung und gemütlichen Sitzgelegenheiten. Nur für Besucher ab 18 Jahren zugänglich.",
    image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?w=1200&auto=format&fit=crop&q=60", 
    secondaryImages: [
      "https://images.unsplash.com/photo-1623476408624-721c9185d569?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=800&auto=format&fit=crop&q=60",
    ],
    capacity: "2.000",
    genre: "Ambient, Chill-Out, Downtempo",
    hours: "Durchgehend",
    features: [
      "Bequeme Liegebereiche",
      "Entspannende Visuals und Projektionen",
      "Sanfte Klanglandschaften",
      "Schattige Rückzugsorte",
      "Sanctuary für Festivalbesucher",
      "Nur für Besucher ab 18 Jahren"
    ],
    artists: [
      "ALDO M", 
      "NEOBEO", 
      "LIESE",
      "SPACFREAK",
      "SUDUAYA"
    ]
  },
];

export default function StagesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Use useCallback to create stable function references
  const openLightbox = useCallback((image: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default action
    e.stopPropagation(); // Stop event bubbling
    setSelectedImage(image);
  }, []);
  
  const closeLightbox = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault(); // Prevent default action
      e.stopPropagation(); // Stop event bubbling
    }
    setSelectedImage(null);
  }, []);
  
  // Handle clicks on the lightbox background to close it
  const handleLightboxBackgroundClick = useCallback((e: React.MouseEvent) => {
    // Only close if clicking directly on the background, not on the image
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  }, [closeLightbox]);
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          FESTIVAL-AREAS
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Entdecke unsere einzigartigen Areas, jede mit ihrer eigenen Atmosphäre, Klangidentität und visuellem Erlebnis.
        </p>
        
        <Tabs defaultValue="heptagon">
          <TabsList className="bg-muted/50 w-full justify-start mb-8">
            {stages.map((stage) => (
              <TabsTrigger 
                key={stage.id} 
                value={stage.id}
                className="font-rajdhani"
              >
                {stage.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {stages.map((stage) => (
            <TabsContent key={stage.id} value={stage.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div 
                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer mb-4"
                    onClick={(e) => openLightbox(stage.image, e)}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.name}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized={true}
                    />
                    
                    {/* Age restriction badge for Chilled Smokers Area */}
                    {stage.id === "chilled" && (
                      <div className="absolute top-4 right-4 bg-chart-1 text-white px-3 py-1 rounded-full font-bold text-sm">
                        18+
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stage.secondaryImages.map((img, index) => (
                      <div 
                        key={index}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                        onClick={(e) => openLightbox(img, e)}
                      >
                        <Image
                          src={img}
                          alt={`${stage.name} Detail ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          unoptimized={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="font-rajdhani text-3xl font-bold mb-4">
                    {stage.name}
                    {stage.id === "chilled" && (
                      <span className="text-chart-1 text-xl ml-2">(ab 18 Jahren)</span>
                    )}
                  </h2>
                  <p className="text-lg mb-6">{stage.description}</p>
                  
                  {/* Removed capacity, genre, times grid for all areas */}
                  
                  {/* Removed Floor-Features section for all areas */}
                  
                  <div>
                    <h3 className="font-rajdhani text-xl font-bold mb-3">Featured Künstler</h3>
                    <div className="flex flex-wrap gap-2">
                      {stage.artists.map((artist, index) => (
                        <span 
                          key={index}
                          className="bg-secondary px-3 py-1 rounded-full text-sm"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={handleLightboxBackgroundClick}
        >
          <div className="relative max-w-4xl max-h-[80vh]">
            <button 
              className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm p-2 rounded-full z-10"
              onClick={(e) => closeLightbox(e)}
              aria-label="Schließen"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Area-Ansicht"
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto object-contain"
              unoptimized={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}