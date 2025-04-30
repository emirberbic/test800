"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-2 festive-border mx-4 mt-2 rounded-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-2 relative overflow-hidden rounded-full">
              <Image 
                src="/assets/467500785_122188906466190149_3533787961546298319_n.jpg"
                alt="Nations of Legends Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider group">
              <span className="text-primary">NATIONS</span>
              <span className="text-muted-foreground">OF</span>
              <span className="text-chart-1 relative">
                LEGENDS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chart-1 group-hover:w-full transition-all duration-300"></span>
              </span>
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/lineup" className="nav-link text-lg">
            Line-Up
          </Link>
          <Link href="/stages" className="nav-link text-lg">
            Floors
          </Link>
          <Link href="/info" className="nav-link text-lg">
            Geborgenheit
          </Link>
          <Link href="/tickets" className="nav-link text-lg">
            Tickets
          </Link>
          <Link href="/sponsors" className="nav-link text-lg">
            Sponsoren
          </Link>
          <Link href="/blog" className="nav-link text-lg">
            Blog
          </Link>
          <Link href="/about" className="nav-link text-lg">
            Über uns
          </Link>
          <Link href="/contact" className="nav-link text-lg">
            Kontakt
          </Link>
          
          <div className="flex items-center ml-2">
            <a href="https://www.facebook.com/profile.php?id=61553973522657" className="text-chart-2 hover:text-primary transition-colors mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/nationsoflegends/reels/?locale=Crest%2BExchanges%E2%9C%85We%2Bwill%2Balso%2Bdeliver%2Btechnical%2Bsupport%2Bfor%2BNeuroGrid%2C%2B.vkat&hl=zh-hk" className="text-chart-2 hover:text-primary transition-colors mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@nationsofLegends" className="text-chart-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="/lineup"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Line-Up
          </Link>
          <Link
            href="/stages"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Floors
          </Link>
          <Link
            href="/info"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Geborgenheit
          </Link>
          <Link
            href="/tickets"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Tickets
          </Link>
          <Link
            href="/sponsors"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Sponsoren
          </Link>
          <Link
            href="/blog"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Über uns
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-bold neon-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
          
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/profile.php?id=61553973522657" className="text-chart-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/nationsoflegends/reels/?locale=Crest%2BExchanges%E2%9C%85We%2Bwill%2Balso%2Bdeliver%2Btechnical%2Bsupport%2Bfor%2BNeuroGrid%2C%2B.vkat&hl=zh-hk" className="text-chart-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@nationsofLegends" className="text-chart-2 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}