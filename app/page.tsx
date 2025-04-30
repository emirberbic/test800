import Link from "next/link";

import HeroSection from "@/components/hero-section";
import LineupPreview from "@/components/lineup-preview";
import InfoSection from "@/components/info-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-background">
        <LineupPreview />
        <InfoSection />
      </div>
    </>
  );
}