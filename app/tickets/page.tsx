"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Info } from "lucide-react";

// Ticket types with Stripe product IDs
const ticketTypes = [
  {
    id: "standard",
    name: "3-TAGE STANDARD",
    price: "CHF 220",
    description: "Voller Festivalzugang für alle drei Tage",
    color: "chart-1",
    features: [
      "Zugang zu allen Bühnen",
      "Festival-App-Zugang",
      "Zugang zum Food Court",
      "Kostenlose Wassernachfüllstationen",
      "Zugang zu Standard-Einrichtungen"
    ],
    exclusive: [] as string[],
    stripeProductId: "standard", // Maps to the ID in stripe-config.ts
    externalLink: "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg"
  },
  {
    id: "saturday",
    name: "TAGES-TICKET SAMSTAG",
    price: "CHF 120",
    description: "Zugang zum Festival nur für Samstag",
    color: "chart-2",
    features: [
      "Zugang zu allen Bühnen",
      "Festival-App-Zugang",
      "Zugang zum Food Court",
      "Kostenlose Wassernachfüllstationen",
      "Zugang zu Standard-Einrichtungen"
    ],
    exclusive: [] as string[],
    stripeProductId: "saturday", // Maps to the ID in stripe-config.ts
    externalLink: "https://buy.stripe.com/test_8wMbJ72TP9vs1PyaEE"
  },
  {
    id: "sunday",
    name: "TAGES-TICKET SONNTAG",
    price: "CHF 60",
    description: "Zugang zum Festival nur für Sonntag",
    color: "chart-4",
    features: [
      "Zugang zu allen Bühnen",
      "Festival-App-Zugang",
      "Zugang zum Food Court",
      "Kostenlose Wassernachfüllstationen",
      "Zugang zu Standard-Einrichtungen"
    ],
    exclusive: [] as string[],
    stripeProductId: "sunday", // Maps to the ID in stripe-config.ts
    externalLink: "https://buy.stripe.com/test_8wMbJ72TP9vs1PyaEE"
  },
  {
    id: "evening",
    name: "ABENDKASSE",
    price: "CHF 250",
    description: "Vor-Ort-Ticketkauf (alle Tage, wenn verfügbar)",
    color: "chart-5",
    features: [
      "Zugang zu allen Bühnen",
      "Festival-App-Zugang",
      "Zugang zum Food Court",
      "Kostenlose Wassernachfüllstationen",
      "Zugang zu Standard-Einrichtungen"
    ],
    exclusive: [] as string[],
    stripeProductId: "evening", // Maps to the ID in stripe-config.ts
    externalLink: "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg"
  }
];

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState("standard");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Calculate total price
  const baseTicket = ticketTypes.find(ticket => ticket.id === selectedTicket);
  const totalPrice = parseInt(baseTicket?.price?.replace("CHF ", "") || "0");
  
  // Handle checkout
  const handleCheckout = async () => {
    const selectedTicketData = ticketTypes.find(ticket => ticket.id === selectedTicket);
    
    // If the selected ticket has an external link, redirect to it
    if (selectedTicketData && selectedTicketData.externalLink) {
      window.location.href = selectedTicketData.externalLink;
      return;
    }
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          FESTIVAL-TICKETS
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Wähle deinen Tickettyp und optionale Zusatzleistungen, um dein Festivalerlebnis individuell zu gestalten.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ticketTypes.map((ticket) => (
            <div 
              key={ticket.id}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                selectedTicket === ticket.id
                  ? `border-${ticket.color} ring-2 ring-${ticket.color} ring-opacity-50`
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className={`bg-${ticket.color}/10 p-6`}>
                <h3 className={`font-rajdhani text-2xl font-bold mb-2 text-${ticket.color}`}>
                  {ticket.name}
                </h3>
                <p className="text-3xl font-bold mb-2">{ticket.price}</p>
                <p className="text-muted-foreground">{ticket.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="font-rajdhani text-lg font-bold mb-4">Features</h4>
                <ul className="space-y-3 mb-6">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check 
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          ticket.exclusive.includes(feature) ? `text-${ticket.color}` : "text-muted-foreground"
                        }`} 
                      />
                      <span 
                        className={ticket.exclusive.includes(feature) ? `font-medium` : "text-muted-foreground"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-${ticket.color} hover:bg-${ticket.color}/80`}
                  onClick={() => setSelectedTicket(ticket.id)}
                >
                  {selectedTicket === ticket.id ? "AUSGEWÄHLT" : "AUSWÄHLEN"}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-card border border-border p-6 rounded-lg">
          <h2 className="font-rajdhani text-2xl font-bold mb-6">Deine Auswahl</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <div>
                <h4 className="font-rajdhani font-bold">
                  {ticketTypes.find(t => t.id === selectedTicket)?.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {ticketTypes.find(t => t.id === selectedTicket)?.description}
                </p>
              </div>
              <p className="font-bold">
                {ticketTypes.find(t => t.id === selectedTicket)?.price}
              </p>
            </div>
            
            <div className="flex justify-between items-center pt-2">
              <h3 className="font-rajdhani text-lg font-bold">GESAMT</h3>
              <p className="text-2xl font-bold">CHF {totalPrice}</p>
            </div>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-destructive/10 border border-destructive rounded-md flex items-start gap-2">
              <Info className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}
          
          <Button 
            className="w-full bg-chart-1 hover:bg-chart-1/80 font-rajdhani text-lg py-6"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird bearbeitet...
              </>
            ) : (
              "ZUR KASSE GEHEN"
            )}
          </Button>
          
          <div className="mt-4 text-sm text-muted-foreground text-center">
            <p>Mit dem Fortfahren stimmst du unseren AGB und Datenschutzrichtlinien zu.</p>
            <p className="mt-2">Alle Verkäufe sind endgültig. Keine Rückerstattungen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}