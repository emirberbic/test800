"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Lineup data for Heptagon & Octagon (alphabetically sorted)
const mainFloorArtists = [
  {
    id: 41,
    name: "ADHDJ",
    image: "https://iili.io/3WIgZSn.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "05:00 - 07:00"
  },
  {
    id: 40,
    name: "AIOASKA",
    image: "https://iili.io/3WI451S.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "21:00 - 23:00"
  },
  {
    id: 13,
    name: "AKUSTIK",
    image: "https://iili.io/3Wx1Skb.md.jpg",
    stage: "Heptagon Floor",
    day: "Freitag",
    time: "23:00 - 01:00"
  },
  {
    id: 5,
    name: "ALPHATRANCE",
    image: "https://iili.io/3WoINMx.md.jpg",
    stage: "Heptagon Floor",
    day: "Samstag",
    time: "00:00 - 02:00"
  },
  {
    id: 31,
    name: "AUDIOFISTERS",
    image: "https://iili.io/3WI6vS9.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "04:00 - 06:00"
  },
  {
    id: 48,
    name: "BEN TEN",
    image: "https://iili.io/3WIP45X.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "20:00 - 22:00"
  },
  {
    id: 9,
    name: "BOOM SHANKAR",
    image: "https://iili.io/3Wo68ge.md.jpg",
    stage: "Heptagon Floor",
    day: "Sonntag",
    time: "02:00 - 04:00"
  },
  {
    id: 39,
    name: "CHAOTIX",
    image: "https://iili.io/3WIs5Zb.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "04:00 - 06:00"
  },
  {
    id: 16,
    name: "CLOUD7",
    image: "https://iili.io/3WxW1Og.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "22:00 - 00:00"
  },
  {
    id: 25,
    name: "CORNFLAKES3D",
    image: "https://iili.io/3Wz2WZB.md.jpg",
    stage: "Heptagon Floor",
    day: "Freitag",
    time: "21:00 - 23:00"
  },
  {
    id: 36,
    name: "DARBOURKA",
    image: "https://iili.io/3WILS0Q.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "03:00 - 05:00"
  },
  {
    id: 38,
    name: "DERLOTH",
    image: "https://iili.io/3WIQC22.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "22:00 - 00:00"
  },
  {
    id: 30,
    name: "DISTRICT ZERO",
    image: "https://iili.io/3WIQvTX.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "22:00 - 00:00"
  },
  {
    id: 22,
    name: "DJBIM",
    image: "https://iili.io/3WxbBZg.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "00:00 - 02:00"
  },
  {
    id: 49,
    name: "DREAM",
    image: "https://iili.io/3WIZaMG.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "18:00 - 20:00"
  },
  {
    id: 17,
    name: "ECTIMA",
    image: "https://iili.io/3WxvJON.md.jpg",
    stage: "Heptagon Floor",
    day: "Freitag",
    time: "00:00 - 02:00"
  },
  {
    id: 33,
    name: "EINSIEDLER",
    image: "https://iili.io/3WItfJ2.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "00:00 - 02:00"
  },
  {
    id: 10,
    name: "FACE DESIGN",
    image: "https://iili.io/3WoyvEJ.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "01:00 - 03:00"
  },
  {
    id: 35,
    name: "FEUERHAKE",
    image: "https://iili.io/3WID2hF.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "02:00 - 04:00"
  },
  {
    id: 20,
    name: "INNER SPHERE",
    image: "https://iili.io/3WxPZWQ.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "23:00 - 01:00"
  },
  {
    id: 37,
    name: "JACKATEK",
    image: "https://iili.io/3WIDiaR.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "23:00 - 01:00"
  },
  {
    id: 24,
    name: "JILAX",
    image: "https://iili.io/3WzdP7j.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "03:00 - 05:00"
  },
  {
    id: 46,
    name: "JOYRIDER",
    image: "https://iili.io/3WIbZUx.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "20:00 - 22:00"
  },
  {
    id: 34,
    name: "KAYCE CANE",
    image: "https://iili.io/3WIm0X9.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "04:00 - 06:00"
  },
  {
    id: 28,
    name: "KOBOLD",
    image: "https://iili.io/3Wz0VCN.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "23:00 - 01:00"
  },
  {
    id: 23,
    name: "LEADS",
    image: "https://iili.io/3WzJ0Pe.md.jpg",
    stage: "Heptagon Floor",
    day: "Samstag",
    time: "02:00 - 04:00"
  },
  {
    id: 8,
    name: "LIQUID UNIVERSE",
    image: "https://iili.io/3WoNY7I.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "01:00 - 03:00"
  },
  {
    id: 15,
    name: "LOVEGUN",
    image: "https://iili.io/3WxW1Og.md.jpg",
    stage: "Heptagon Floor",
    day: "Freitag",
    time: "01:00 - 03:00"
  },
  {
    id: 14,
    name: "LSDIRTY",
    image: "https://iili.io/3WxM8YX.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "02:00 - 04:00"
  },
  {
    id: 21,
    name: "NECMI",
    image: "https://iili.io/3WxsYZv.md.jpg",
    stage: "Heptagon Floor",
    day: "Freitag",
    time: "22:00 - 00:00"
  },
  {
    id: 7,
    name: "NOVI MASCHILTON",
    image: "https://iili.io/3WnOPqv.md.jpg",
    stage: "Heptagon Floor",
    day: "Samstag",
    time: "22:00 - 00:00"
  },
  {
    id: 43,
    name: "PAVA",
    image: "https://iili.io/3WImy74.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "05:00 - 07:00"
  },
  {
    id: 45,
    name: "PATTRONIX",
    image: "https://iili.io/3WIpiaj.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "21:00 - 23:00"
  },
  {
    id: 29,
    name: "PGM",
    image: "https://iili.io/3WzEdfS.md.jpg",
    stage: "Heptagon Floor",
    day: "Sonntag",
    time: "21:00 - 23:00"
  },
  {
    id: 27,
    name: "PROGSMILEZ",
    image: "https://iili.io/3Wzl4kJ.md.jpg",
    stage: "Heptagon Floor",
    day: "Samstag",
    time: "03:00 - 05:00"
  },
  {
    id: 19,
    name: "QUEROX",
    image: "https://iili.io/3Wx4uzQ.md.jpg",
    stage: "Heptagon Floor",
    day: "Sonntag",
    time: "00:00 - 02:00"
  },
  {
    id: 47,
    name: "SACRED",
    image: "https://iili.io/3WIyISf.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "19:00 - 21:00"
  },
  {
    id: 32,
    name: "SERENITY FLUX",
    image: "https://iili.io/3WT9xWP.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "01:00 - 03:00"
  },
  {
    id: 12,
    name: "SI-MOON",
    image: "https://iili.io/3WxuUVs.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "00:00 - 02:00"
  },
  {
    id: 1,
    name: "7ELEVEN",
    image: "https://iili.io/3WnsDFt.md.jpg",
    stage: "Heptagon Floor",
    day: "Samstag",
    time: "23:00 - 01:00"
  },
  {
    id: 50,
    name: "SPYRO",
    image: "https://iili.io/3WTJJcu.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "19:00 - 21:00"
  },
  {
    id: 44,
    name: "TAMAHUKA",
    image: "https://iili.io/3WTJvUu.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "20:00 - 22:00"
  },
  {
    id: 18,
    name: "TRITON",
    image: "https://iili.io/3WxS8iX.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "03:00 - 05:00"
  },
  {
    id: 42,
    name: "TWENTY4HOUR",
    image: "https://iili.io/3WT3Zg9.md.jpg",
    stage: "Octagon Floor",
    day: "Sonntag",
    time: "05:00 - 07:00"
  },
  {
    id: 26,
    name: "YETI",
    image: "https://iili.io/3WzFOmv.md.jpg",
    stage: "Octagon Floor",
    day: "Freitag",
    time: "21:00 - 23:00"
  },
  {
    id: 11,
    name: "ZYCE vs FLEGMA",
    image: "https://iili.io/3WxxV3B.md.jpg",
    stage: "Heptagon Floor",
    day: "Sonntag",
    time: "03:00 - 05:00"
  },
  {
    id: 2,
    name: "ACE VENTURA",
    image: "https://iili.io/3WonLkg.md.jpg",
    stage: "Octagon Floor",
    day: "Samstag",
    time: "02:00 - 04:00"
  }
];

// Chilled Smokers Area Artists (alphabetically sorted)
const chilledArtists = [
  {
    id: 104,
    name: "ALDO M",
    image: "https://iili.io/3WTBrMv.md.jpg",
    stage: "Chilled Smokers Ground",
    day: "Freitag",
    time: "20:00 - 22:00"
  },
  {
    id: 105,
    name: "ALEXDEE",
    image: "https://iili.io/3WTnu14.md.jpg",
    stage: "Chilled Smokers Ground",
    day: "Samstag",
    time: "21:00 - 23:00"
  },
  {
    id: 101,
    name: "LIESE",
    image: "https://iili.io/3WToXMG.md.jpg",
    stage: "Chilled Smokers Ground",
    day: "Alle Tage",
    time: "15:00 - 17:00"
  },
  {
    id: 106,
    name: "NEOBEO",
    image: "https://iili.io/3WTu2Bn.md.jpg",
    stage: "Chilled Smokers Ground",
    day: "Freitag",
    time: "18:00 - 20:00"
  },
  {
    id: 102,
    name: "SPACFREAK",
    image: "https://iili.io/3WTAyiX.md.jpg",
    stage: "Chilled Smokers Ground",
    day: "Samstag",
    time: "18:00 - 20:00"
  },
  {
    id: 103,
    name: "SUDUAYA",
    image: "https://iili.io/3WT7fM7.md.jpg",
    stage: "Chilled Smokers Ground",
    day: "Sonntag",
    time: "16:00 - 18:00"
  }
];

// Areas definition for navigation - only two options as requested
const areas = [
  { id: "main", name: "HEPTAGON & OCTAGON", color: "chart-1" },
  { id: "chilled", name: "CHILLED SMOKERS", color: "chart-5" }
];

export default function LineupPage() {
  const [activeArea, setActiveArea] = useState("main");
  const [isNavSticky, setIsNavSticky] = useState(false);
  
  // Handle scrolling for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 180;
      setIsNavSticky(scrollPosition > threshold);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Get the artists to display based on the active area
  const artists = activeArea === "main" ? mainFloorArtists : chilledArtists;
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          FESTIVAL LINE-UP
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-6">
          Entdecke unser unglaubliches Line-up mit Künstlern aus der psychedelischen Szene.
        </p>
        
        {/* Area Navigation - Sticky on scroll */}
        <div className={`${isNavSticky ? "fixed top-0 left-0 right-0 z-40 py-3 backdrop-blur-md bg-background/80 shadow-md transition-all duration-300" : "relative mb-8 py-1"}`}>
          <div className={`container ${isNavSticky ? "px-4" : "px-0"}`}>
            <div className="flex flex-nowrap overflow-x-auto styled-scrollbar gap-2 justify-start md:justify-center">
              {areas.map((area) => (
                <Button
                  key={area.id}
                  onClick={() => setActiveArea(area.id)}
                  className={`whitespace-nowrap px-5 font-rajdhani transition-all duration-300 ${
                    activeArea === area.id 
                      ? `bg-${area.color} hover:bg-${area.color}/90 text-white shadow-md`
                      : "bg-card hover:bg-muted/50 text-muted-foreground border border-border"
                  }`}
                  size={isNavSticky ? "sm" : "default"}
                >
                  {area.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Area specific header with light animation */}
        <motion.div
          key={activeArea}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`mb-8 pb-2 border-b border-${
            areas.find(a => a.id === activeArea)?.color || "border"
          }`}
        >
          <h2 className={`font-rajdhani text-3xl font-bold text-${
            areas.find(a => a.id === activeArea)?.color || "chart-1"
          }`}>
            {areas.find(a => a.id === activeArea)?.name || "FESTIVAL LINE-UP"}
          </h2>
        </motion.div>
        
        {/* Artist Grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeArea}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {artists.map((artist) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

interface ArtistCardProps {
  artist: any;
}

function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
        <Image 
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent/5 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-0 group-hover:translate-y-1 transition-transform duration-300">
          <h3 className="font-rajdhani text-2xl font-bold text-white text-center">
            {artist.name}
          </h3>
          <p className="text-center text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {artist.stage.replace(" Floor", "").replace(" Ground", "")}
          </p>
        </div>
      </div>
    </div>
  );
}