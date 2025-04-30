"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Ticket, Info, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InfoSection() {
  const infoTabs = [
    {
      id: "location",
      label: "ORT",
      icon: <MapPin className="h-5 w-5" />,
      content: (
        <div>
          <h3 className="font-rajdhani text-xl font-bold mb-4">Festivalgelände</h3>
          <p className="mb-4">
            Nations of Legends findet im atemberaubenden Alpental von Filisur statt, umgeben von malerischen Berggipfeln
            und einer unglaublichen natürlichen Kulisse.
          </p>
          <p className="text-muted-foreground">
            Adresse: Frevgias 6, 7477 Filisur
          </p>
        </div>
      ),
    },
    {
      id: "dates",
      label: "TERMINE",
      icon: <Calendar className="h-5 w-5" />,
      content: (
        <div>
          <h3 className="font-rajdhani text-xl font-bold mb-4">Festivalplan</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-chart-1 pl-4">
              <h4 className="font-rajdhani font-bold">Donnerstag, 10. Juli 2025</h4>
              <p className="text-muted-foreground">Einlass: 16:00 Uhr</p>
              <p className="text-muted-foreground">Musikende: 06:00 Uhr</p>
            </div>
            <div className="border-l-2 border-chart-2 pl-4">
              <h4 className="font-rajdhani font-bold">Freitag, 11. Juli 2025</h4>
              <p className="text-muted-foreground">Einlass: 14:00 Uhr</p>
              <p className="text-muted-foreground">Musikende: 08:00 Uhr</p>
            </div>
            <div className="border-l-2 border-chart-4 pl-4">
              <h4 className="font-rajdhani font-bold">Samstag, 12. Juli 2025</h4>
              <p className="text-muted-foreground">Einlass: 14:00 Uhr</p>
              <p className="text-muted-foreground">Musikende: 08:00 Uhr</p>
            </div>
            <div className="border-l-2 border-chart-5 pl-4">
              <h4 className="font-rajdhani font-bold">Sonntag, 13. Juli 2025</h4>
              <p className="text-muted-foreground">Einlass: 14:00 Uhr</p>
              <p className="text-muted-foreground">Festivalende: 02:00 Uhr</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tickets",
      label: "TICKETS",
      icon: <Ticket className="h-5 w-5" />,
      content: (
        <div>
          <h3 className="font-rajdhani text-xl font-bold mb-4">Ticket-Optionen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border p-4 rounded-lg">
              <h4 className="font-rajdhani font-bold text-chart-1">4-TAGE-TICKET</h4>
              <p className="text-xl font-bold my-2">CHF 220</p>
              <p className="text-muted-foreground text-sm mb-4">
                Voller Festivalzugang für alle vier Tage
              </p>
              <Button 
                className="w-full bg-chart-1 hover:bg-chart-1/80"
                onClick={() => window.open("https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg", "_blank")}
              >
                JETZT KAUFEN
              </Button>
            </div>
            <div className="border border-border p-4 rounded-lg">
              <h4 className="font-rajdhani font-bold text-chart-2">TAGES-TICKET FREITAG</h4>
              <p className="text-xl font-bold my-2">CHF 120</p>
              <p className="text-muted-foreground text-sm mb-4">
                Zugang zum Festival nur für Freitag
              </p>
              <Button 
                className="w-full bg-chart-2 hover:bg-chart-2/80"
                onClick={() => window.open("https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg", "_blank")}
              >
                JETZT KAUFEN
              </Button>
            </div>
            <div className="border border-border p-4 rounded-lg">
              <h4 className="font-rajdhani font-bold text-chart-4">TAGES-TICKET SAMSTAG</h4>
              <p className="text-xl font-bold my-2">CHF 120</p>
              <p className="text-muted-foreground text-sm mb-4">
                Zugang zum Festival nur für Samstag
              </p>
              <Button 
                className="w-full bg-chart-4 hover:bg-chart-4/80"
                onClick={() => window.open("https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg", "_blank")}
              >
                JETZT KAUFEN
              </Button>
            </div>
            <div className="border border-border p-4 rounded-lg">
              <h4 className="font-rajdhani font-bold text-chart-5">TAGES-TICKET SONNTAG</h4>
              <p className="text-xl font-bold my-2">CHF 60</p>
              <p className="text-muted-foreground text-sm mb-4">
                Zugang zum Festival nur für Sonntag
              </p>
              <Button 
                className="w-full bg-chart-5 hover:bg-chart-5/80"
                onClick={() => window.open("https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg", "_blank")}
              >
                JETZT KAUFEN
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "faq",
      label: "FAQ",
      icon: <Info className="h-5 w-5" />,
      content: (
        <div>
          <h3 className="font-rajdhani text-xl font-bold mb-4">Häufig gestellte Fragen</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-rajdhani font-bold">Welche Altersbeschränkung gibt es?</h4>
              <p className="text-muted-foreground">Ab 18 Jahren mit gültigem Ausweis erforderlich.</p>
            </div>
            <div>
              <h4 className="font-rajdhani font-bold">Darf ich eigene Speisen und Getränke mitbringen?</h4>
              <p className="text-muted-foreground">Keine Speisen oder Getränke von außerhalb erlaubt. Leere Wasserflaschen sind gestattet.</p>
            </div>
            <div>
              <h4 className="font-rajdhani font-bold">Ist Camping verfügbar?</h4>
              <p className="text-muted-foreground">Ja, eigenes Camping ist möglich. Das Festival bietet jedoch keine Zelte zur Vermietung an. Bitte bringen Sie Ihre eigene Campingausrüstung mit.</p>
            </div>
            <div>
              <h4 className="font-rajdhani font-bold">Welche Gegenstände sind verboten?</h4>
              <p className="text-muted-foreground">Waffen, Drogen, Glas, Drohnen, professionelle Kameras.</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="mt-4"
            asChild
          >
            <Link href="/info">ALLE FAQs ANSEHEN</Link>
          </Button>
        </div>
      ),
    },
    {
      id: "transport",
      label: "ANREISE",
      icon: <Bus className="h-5 w-5" />,
      content: (
        <div>
          <h3 className="font-rajdhani text-xl font-bold mb-4">Anreise</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-rajdhani font-bold">Öffentliche Verkehrsmittel</h4>
              <p className="text-muted-foreground">
                Spezielle 24/7-Buslinien vom Bahnhof Filisur. Zeigen Sie Ihr Festival-Ticket für eine kostenlose Fahrt.
              </p>
            </div>
            <div>
              <h4 className="font-rajdhani font-bold">Parken</h4>
              <p className="text-muted-foreground">
                Parkplätze sind Gratis. Keine Vorreservierung erforderlich.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-12 text-center">
          FESTIVAL-INFORMATIONEN
        </h2>
        
        <Tabs defaultValue="location" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full mb-8 h-auto bg-muted/50">
            {infoTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-background flex flex-col items-center gap-1 py-3 font-rajdhani"
              >
                {tab.icon}
                <span className="hidden md:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {infoTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}