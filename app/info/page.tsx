"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Tent, 
  Bus, 
  Clock, 
  Utensils, 
  ShieldAlert, 
  Wallet,
  Info
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

// Organized FAQ items by category
const faqCategories = [
  {
    category: "🎟️ Tickets & Zutritt",
    items: [
      {
        question: "Wo bekomme ich mein Festivalbändel?",
        answer: "Das Festivalbändel wird am Eingang gegen Vorlage des Tickets und eines Ausweises ausgegeben."
      },
      {
        question: "Kann ich mein Ticket an jemand anderen übertragen?",
        answer: "Eine Ticketübertragung ist nur bei E-Tickets möglich."
      },
      {
        question: "Ab welchem Alter ist der Besuch des Festivals erlaubt?",
        answer: "Besucher unter 16 Jahren dürfen das Festival nur in Begleitung eines Erwachsenen besuchen. Ab 18 Jahren ist der Zutritt uneingeschränkt möglich."
      },
      {
        question: "Wie ist die Regelung zum Alkoholkonsum für Jugendliche?",
        answer: "Unter 18-Jährige dürfen keine Spirituosen konsumieren. Wir kontrollieren dies durch Ausweiskontrollen und spezielle Armbänder."
      }
    ]
  },
  {
    category: "💳 Bezahlung & Sicherheit",
    items: [
      {
        question: "Wie kann ich auf dem Festival bezahlen?",
        answer: "Alle Käufe auf dem Festivalgelände erfolgen bargeldlos per EC- oder Kreditkarte. Twint wird ebenfalls akzeptiert."
      },
      {
        question: "Gibt es Schliessfächer für Wertsachen?",
        answer: "Es sind einige Schließfächer vorhanden. Es wird empfohlen, kein Bargeld mitzuführen, da nur Kartenzahlung bzw. Twint akzeptiert wird."
      },
      {
        question: "Was soll ich bei einem Diebstahl tun?",
        answer: "Diebstähle sind sehr unüblich. Falls es dennoch zu einem kommt, kann die Polizei online via Suisse ePolice kontaktiert werden. Zudem gibt es eine Anlaufstelle am Info-Point."
      }
    ]
  },
  {
    category: "🐾 Gelände & Ausstattung",
    items: [
      {
        question: "Darf ich mein Haustier mitbringen?",
        answer: "Aus hygienischen Gründen sind Haustiere auf dem Festivalgelände nicht erlaubt. Auf dem Zeltplatz ist es jedoch erlaubt."
      },
      {
        question: "Sind Glasflaschen erlaubt?",
        answer: "Glasflaschen sind aus Sicherheitsgründen auf dem gesamten Festivalgelände verboten."
      },
      {
        question: "Wo finde ich Trinkwasser?",
        answer: "Trinkwasserstellen sind gut sichtbar gekennzeichnet und über das gesamte Gelände verteilt."
      },
      {
        question: "Gibt es Gehörschutz vor Ort?",
        answer: "Gratis Gehörschutzpfropfen sind am Info-Point erhältlich."
      },
      {
        question: "Sind Drohnen auf dem Festival erlaubt?",
        answer: "Drohnen sind auf dem gesamten Festivalgelände verboten."
      },
      {
        question: "Wo ist das Fundbüro?",
        answer: "Das Fundbüro befindet sich am Haupteingang des Festivals."
      },
      {
        question: "Wo finde ich Info-Points?",
        answer: "Info-Points befinden sich beim Haupteingang und bei der Bändelkontrolle."
      },
      {
        question: "Gibt es Taxis vor Ort?",
        answer: "Der Taxistandort befindet sich am Haupteingang."
      }
    ]
  },
  {
    category: "🍽️ Verpflegung & Gesundheit",
    items: [
      {
        question: "Darf ich eigenes Essen mitbringen?",
        answer: "Es gibt keine Beschränkungen für mitgebrachtes Essen, aber es sind zahlreiche Food-Stände mit vielfältiger Auswahl vor Ort."
      },
      {
        question: "Gibt es Maßnahmen zur Alkoholprävention?",
        answer: "Es wird empfohlen, ausreichend alkoholfreie Getränke zu trinken und genug zu essen. Es gibt spezielle Entspannungszonen ('Chill-Zone') zur Erholung."
      },
      {
        question: "An wen kann ich mich bei Fragen zu Drogen wenden?",
        answer: "Es gibt eine Anlaufstelle auf dem Gelände für Fragen zu Alkohol und Drogen."
      }
    ]
  },
  {
    category: "🔌 Technik & Aufladen",
    items: [
      {
        question: "Wo kann ich mein Handy aufladen?",
        answer: "Es gibt mehrere We-Charge Automaten, an denen man eine Powerbank ausleihen kann."
      }
    ]
  }
];

// Camping information
const campingInfo = [
  {
    question: "Wo kann ich zelten?",
    answer: "Zelten auf dem Festivalgelände ist nicht gestattet. Es gibt ein eigenes Campingareal für alle Festivalbesucher."
  },
  {
    question: "Wann öffnen die Campingplätze?",
    answer: "Die Campingplätze öffnen am Mittwoch ab 12:00 Uhr und bleiben bis Sonntag 12:00 Uhr durchgehend geöffnet."
  },
  {
    question: "Darf ich grillen oder Feuer machen?",
    answer: "Grillieren und Feuerstellen sind aus Sicherheitsgründen nicht gestattet."
  },
  {
    question: "Kostet Camping extra?",
    answer: "Das Campieren ist im Festivalticket inbegriffen, es fallen keine zusätzlichen Kosten an."
  },
  {
    question: "Gibt es Duschmöglichkeiten?",
    answer: "Es gibt eine zentrale Duschstation für alle Camper."
  },
  {
    question: "Wie funktioniert die Platzzuweisung?",
    answer: "Sicherheitskräfte sind im Einsatz und weisen die Zeltplätze zu."
  },
  {
    question: "Sind Partyzelte oder Pavillons erlaubt?",
    answer: "Partyzelte und Pavillons sind bis zu einer maximalen Größe von 3×3 Metern erlaubt."
  },
  {
    question: "Sind Wohnmobile erlaubt?",
    answer: "Wohnmobile sind erlaubt, solange Platz vorhanden ist. Bitte Kontakt via Formular für weitere Abklärung aufnehmen."
  }
];

export default function InfoPage() {
  const infoTabs = [
    {
      id: "faq",
      icon: <Info className="h-5 w-5" />,
      label: "FAQ",
      content: (
        <div>
          <h2 className="font-rajdhani text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
          
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-chart-1">{category.category}</h3>
              <Accordion type="single" collapsible className="w-full mb-6">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${catIndex}-${itemIndex}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "camping",
      icon: <Tent className="h-5 w-5" />,
      label: "CAMPING",
      content: (
        <div>
          <h2 className="font-rajdhani text-3xl font-bold mb-6">Camping-Informationen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
            <div className="border border-border p-6 rounded-lg">
              <h3 className="font-rajdhani text-xl font-bold mb-4">Campingplatz</h3>
              <p className="text-muted-foreground mb-4">
                Unser Campingbereich bietet ausreichend Platz für alle Festival-Besucher. Bitte beachten Sie, dass Sie Ihre eigene Camping-Ausrüstung mitbringen müssen, da das Festival keine Zelte oder Unterkünfte zur Vermietung anbietet.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  24/7 Sicherheit und Personal
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Saubere Duscheinrichtungen
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Toilettenblöcke
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Essenstände
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Ladestationen
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg mb-8">
            <h3 className="font-rajdhani text-xl font-bold mb-4">Wichtige Camping-Informationen</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Check-in-Zeiten</p>
                  <p className="text-muted-foreground text-sm">Camping öffnet am Mittwoch um 12:00 Uhr und schliesst am Sonntag um 12:00 Uhr</p>
                </div>
              </li>
              <li className="flex gap-3">
                <ShieldAlert className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Sicherheitsregeln</p>
                  <p className="text-muted-foreground text-sm">Keine offenen Feuer oder Grillieren erlaubt. Partyzelte und Pavillons nur bis zu einer maximalen Größe von 3×3 Metern.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <h3 className="font-rajdhani text-xl font-bold mb-4">Camping FAQs</h3>
          <Accordion type="single" collapsible className="w-full">
            {campingInfo.map((item, index) => (
              <AccordionItem key={index} value={`camping-item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )
    },
    {
      id: "transportation",
      icon: <Bus className="h-5 w-5" />,
      label: "TRANSPORT",
      content: (
        <div>
          <h2 className="font-rajdhani text-3xl font-bold mb-6">Anreise zum Festival</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-border p-6 rounded-lg">
              <h3 className="font-rajdhani text-xl font-bold mb-4">Öffentliche Verkehrsmittel</h3>
              <p className="text-muted-foreground mb-4">
                Das Festival ist während der gesamten Veranstaltung mit speziellen öffentlichen Verkehrsmitteln erreichbar.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="bg-chart-1/20 p-2 rounded-full">
                    <Bus className="h-5 w-5 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Spezielle 24/7-Buslinien vom Bahnhof Filisur. Zeigen Sie Ihr Festivalticket für eine kostenlose Fahrt.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="border border-border p-6 rounded-lg">
              <h3 className="font-rajdhani text-xl font-bold mb-4">Anreise & Parken</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie mit dem Auto anreisen möchten, beachten Sie bitte die begrenzten Parkmöglichkeiten.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="bg-chart-2/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-2">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M9 8h6" />
                      <path d="M15 8v8" />
                      <path d="M9 12h3" />
                      <path d="M9 8v8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Begrenzte Parkplätze verfügbar. Vorreservierung unbedingt erforderlich (CHF 25 pro Tag).</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-rajdhani text-xl font-bold mb-4">Festival-Adresse</h3>
            <p className="mb-4">Frevgias 6, 7477 Filisur, Schweiz</p>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <div className="relative w-full h-full bg-gradient-to-b from-blue-900 to-blue-700">
                {/* Map-like background with custom styling */}
                <div className="absolute inset-0 bg-opacity-20 bg-blue-500 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center">
                  <div className="bg-chart-1 w-10 h-10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-900/20"></div>
                
                {/* Roads and Map Features */}
                <div className="absolute top-1/3 left-0 right-0 h-1 bg-white/40"></div>
                <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-white/30"></div>
                <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-white/40"></div>
                <div className="absolute left-3/4 top-0 bottom-0 w-0.5 bg-white/30"></div>
                
                {/* Mountain shapes in background */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full opacity-20">
                    <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg text-center">
                  <p>Filisur</p>
                  <p className="text-sm text-white/70">Festivalgelände</p>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-center">
              <a 
                href="https://www.google.com/maps/place/Frevgias+6,+7477+Filisur/@46.6648243,9.6938083,16.87z/data=!4m6!3m5!1s0x478499e9afdb03fb:0x36143b95dbb69e91!8m2!3d46.6647964!4d9.6938785!16s%2Fg%2F11kj3h8hy8?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-chart-1 hover:underline"
              >
                Auf Google Maps anzeigen
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "food",
      icon: <Utensils className="h-5 w-5" />,
      label: "ESSEN & TRINKEN",
      content: (
        <div>
          <h2 className="font-rajdhani text-3xl font-bold mb-6">Essen & Getränke</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-border p-6 rounded-lg">
              <div className="bg-chart-1/20 p-3 rounded-full w-fit mb-4">
                <Utensils className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="font-rajdhani text-xl font-bold mb-2">Essensangebot</h3>
              <p className="text-muted-foreground mb-4">
                Verschiedene Essensstände mit internationaler Küche, vegetarischen, veganen und glutenfreien Optionen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Street Food Village
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Vegane Ecke
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Lokale Spezialitäten
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-1 rounded-full"></span>
                  Nachtsnacks
                </li>
              </ul>
            </div>
            
            <div className="border border-border p-6 rounded-lg">
              <div className="bg-chart-2/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-2">
                  <path d="M8 22h8" />
                  <path d="M7 10h10" />
                  <path d="M12 10v12" />
                  <path d="M17 6V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2l-3 4h16l-3-4Z" />
                </svg>
              </div>
              <h3 className="font-rajdhani text-xl font-bold mb-2">Getränkeoptionen</h3>
              <p className="text-muted-foreground mb-4">
                Mehrere Bars auf dem gesamten Festivalgelände, die eine Vielzahl von Getränken anbieten.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-2 rounded-full"></span>
                  Craft Beer Stationen
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-2 rounded-full"></span>
                  Cocktail Bars
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-2 rounded-full"></span>
                  Alkoholfreie Optionen
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-chart-2 rounded-full"></span>
                  Energy Drink Sponsoren
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-rajdhani text-xl font-bold mb-4">Besondere Ernährungsbedürfnisse</h3>
            <p className="mb-4">
              Wir bemühen uns, alle Ernährungsbedürfnisse zu berücksichtigen. Jeder Essensstand wird Allergeninformationen deutlich anzeigen. 
              Bei speziellen Ernährungsbedenken besuchen Sie bitte den Info-Point für Hilfe bei der Auswahl geeigneter Lebensmitteloptionen.
            </p>
            <p className="text-muted-foreground text-sm">
              Hinweis: Kostenlose Wasserstationen sind auf dem gesamten Festivalgelände verfügbar. Das Mitbringen einer leeren wiederverwendbaren Flasche wird empfohlen.
            </p>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          FESTIVAL-INFORMATIONEN
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Alles, was du über das Nations of Legends Festival wissen musst - von Camping und Transport bis hin zu Essen, Getränken und mehr.
        </p>
        
        <Tabs defaultValue="faq">
          <TabsList className="bg-muted/50 w-full justify-start mb-8 overflow-x-auto flex-nowrap">
            {infoTabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="font-rajdhani flex items-center gap-2 whitespace-nowrap"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {infoTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}