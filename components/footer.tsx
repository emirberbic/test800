import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 festive-border mt-10 mx-4 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">NATIONS OF LEGENDS</h3>
            <p className="text-muted-foreground mb-4">
              MODERN MOUNTAIN FAIRYTALE - Erlebt 4 Tage voller Geborgenheit auf 3 Floors. 
              Ein Festival der Verbindung mit Musik, Kunst und Natur.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/nationsoflegends/reels/?locale=Crest%2BExchanges%E2%9C%85We%2Bwill%2Balso%2Bdeliver%2Btechnical%2Bsupport%2Bfor%2BNeuroGrid%2C%2B.vkat&hl=zh-hk" className="text-muted-foreground hover:text-chart-1 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com/nationsoflegends" className="text-muted-foreground hover:text-chart-1 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.youtube.com/@nationsofLegends" className="text-muted-foreground hover:text-chart-1 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">SCHNELLZUGRIFF</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lineup" className="text-muted-foreground hover:text-chart-2 transition-colors">
                  Line-Up
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-muted-foreground hover:text-chart-2 transition-colors">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-muted-foreground hover:text-chart-2 transition-colors">
                  Festival-Info
                </Link>
              </li>
              <li>
                <Link href="/stages" className="text-muted-foreground hover:text-chart-2 transition-colors">
                  Floors & Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-chart-2 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">KONTAKT</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>E-Mail: dns.energy@outlook.com</li>
              <li>10.07 - 13.07.2025</li>
              <li>Filisur, Schweiz</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-chart-1/30 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Nations of Legends Festival. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-chart-2 transition-colors">
              Datenschutz
            </Link>
            <Link href="/terms" className="hover:text-chart-2 transition-colors">
              AGB
            </Link>
            <Link href="/cookies" className="hover:text-chart-2 transition-colors">
              Cookie-Richtlinie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}