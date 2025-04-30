"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const sponsors = [
  {
    id: "main",
    title: "Hauptsponsoren",
    description: "Unsere wichtigsten Partner, die dieses Festival möglich machen.",
    sponsors: [
      {
        name: "2015electronics AG",
        logo: "https://iili.io/3VeSnK7.md.jpg",
        description: "Führender Technologieanbieter und langjähriger Unterstützer der Festivalszene.",
        url: "https://www.2015electronics.ch/"
      },
      {
        name: "Meyer Sound",
        logo: "https://iili.io/3WCcJ6J.md.jpg",
        description: "Premium-Soundsystem-Hersteller für die besten Klanglandschaften.",
        url: "https://www.meyersound.com/"
      }
    ]
  }
];

export default function SponsorsPage() {
  // Track image loading state for each sponsor
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Handle image error
  const handleImageError = (sponsorName: string) => {
    console.error(`Failed to load image for sponsor: ${sponsorName}`);
    setImageErrors(prev => ({
      ...prev,
      [sponsorName]: true
    }));
  };

  // Get image source with fallback
  const getImageSrc = (sponsor: any) => {
    if (imageErrors[sponsor.name]) {
      // Fallback to a placeholder if the original image fails
      return `https://placehold.co/400x200/0A2540/FFFFFF?text=${encodeURIComponent(sponsor.name)}`;
    }
    return sponsor.logo;
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          UNSERE SPONSOREN
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Nations of Legends wird durch die großzügige Unterstützung unserer Sponsoren ermöglicht. Wir sind dankbar für ihre Mitwirkung an diesem einzigartigen Erlebnis.
        </p>
        
        {sponsors.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="font-rajdhani text-3xl font-bold mb-4 text-chart-1">
              {category.title}
            </h2>
            <p className="text-muted-foreground mb-8">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.sponsors.map((sponsor) => (
                <div key={sponsor.name} className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-chart-1 hover:shadow-md group">
                  <div className="aspect-[2/1] relative bg-white flex items-center justify-center p-6">
                    <Image 
                      src={getImageSrc(sponsor)}
                      alt={sponsor.name}
                      width={400}
                      height={120}
                      className="object-contain max-h-[80px] w-auto transition-all duration-500 group-hover:scale-105"
                      unoptimized
                      onError={() => handleImageError(sponsor.name)}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                    <p className="text-muted-foreground mb-4">{sponsor.description}</p>
                    <a 
                      href={sponsor.url} 
                      className="text-chart-2 hover:text-chart-1 transition-colors text-sm font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Mehr erfahren →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="festive-border p-8 rounded-lg mt-16">
          <h2 className="font-rajdhani text-3xl font-bold mb-4 text-center">
            Werden Sie Sponsor
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sind Sie interessiert daran, Nations of Legends zu unterstützen und Teil eines einzigartigen Festival-Erlebnisses zu werden? Kontaktieren Sie uns für weitere Informationen zu Sponsoring-Möglichkeiten.
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-chart-2 hover:bg-chart-2/80 text-white flex items-center gap-2"
              onClick={() => window.location.href = "mailto:sponsoring@nationsoflegends.com"}
            >
              <Mail className="h-5 w-5" />
              Sponsoring-Anfrage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}