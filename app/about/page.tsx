"use client";

import Image from "next/image";
import { Check, Heart, Zap, Leaf, Globe, Award } from "lucide-react";

// Festival values
const values = [
  {
    icon: <Heart className="h-8 w-8 text-chart-1" />,
    title: "Gemeinschaft",
    description: "Wir schaffen einen Raum für Verbindung, Akzeptanz und gemeinsames Erleben."
  },
  {
    icon: <Zap className="h-8 w-8 text-chart-2" />,
    title: "Kreativität",
    description: "Kunst, Musik und Innovation stehen im Zentrum unseres Festivals."
  },
  {
    icon: <Leaf className="h-8 w-8 text-chart-4" />,
    title: "Nachhaltigkeit",
    description: "Wir verpflichten uns zu umweltfreundlichen Praktiken und respektvollem Umgang mit der Natur."
  },
  {
    icon: <Globe className="h-8 w-8 text-chart-3" />,
    title: "Kultureller Austausch",
    description: "Wir vereinen verschiedene Kulturen und musikalische Traditionen aus der ganzen Welt."
  },
  {
    icon: <Award className="h-8 w-8 text-chart-5" />,
    title: "Qualität",
    description: "Wir streben nach Exzellenz in allen Aspekten der Festival-Erfahrung."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
            ÜBER NATIONS OF LEGENDS
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nations of Legends ist mehr als nur ein Festival – es ist eine Reise in eine Welt voller Musik, Kunst und Gemeinschaft.
          </p>
        </div>
        
        {/* Festival Story */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-20">
          <div>
            <h2 className="font-rajdhani text-3xl font-bold mb-6 text-chart-1">
              Unsere Geschichte
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nations of Legends wurde 2020 mit einer klaren Vision gegründet: ein Festival zu erschaffen, das die Grenzen zwischen verschiedenen elektronischen Musikrichtungen überwindet und dabei eine tiefe Verbindung zur Natur und zur Gemeinschaft herstellt.
              </p>
              <p>
                Von bescheidenen Anfängen mit nur einer Bühne und 500 Besuchern ist Nations of Legends zu einem der angesehensten Festivals in der psychedelischen Szene herangewachsen. 
              </p>
              <p>
                Was uns von anderen Festivals unterscheidet, ist unser Fokus auf die Schaffung einer immersiven Erfahrung, die alle Sinne anspricht. Jede Edition des Festivals hat ein einzigartiges Thema, das sich in den Bühnendesigns, Kunstinstallationen und performativen Elementen widerspiegelt.
              </p>
              <p>
                Heute begrüssen wir Tausende von Besuchern aus der ganzen Welt, die unser gemeinsames Ethos von Geborgenheit, Kreativität und Respekt teilen.
              </p>
            </div>
          </div>
        </div>
        
        {/* Festival Values */}
        <div className="mb-20">
          <h2 className="font-rajdhani text-3xl font-bold mb-10 text-center">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="border border-border p-6 rounded-lg">
                <div className="bg-background/50 p-3 rounded-full w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="font-rajdhani text-xl font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Festival Facts */}
        <div className="festive-border p-8 rounded-lg">
          <h2 className="font-rajdhani text-3xl font-bold mb-8 text-center">
            Festival Fakten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-chart-1 mb-2">3</div>
              <p className="text-muted-foreground">Tage voller Musik</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-2 mb-2">3</div>
              <p className="text-muted-foreground">Einzigartige Floors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-4 mb-2">50+</div>
              <p className="text-muted-foreground">Internationale Künstler</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}