"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Home, Clock, Send, Check } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          KONTAKT
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Haben Sie Fragen zum Nations of Legends Festival? Wir sind hier, um zu helfen. Füllen Sie das Formular aus oder kontaktieren Sie uns direkt.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            {isSubmitted ? (
              <div className="festive-border p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-chart-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-chart-1" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nachricht gesendet!</h3>
                <p className="text-muted-foreground">
                  Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-muted-foreground">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-muted-foreground">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-muted-foreground">Betreff</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="tickets">Ticket-Anfrage</option>
                    <option value="lineup">Line-Up Fragen</option>
                    <option value="camping">Camping & Unterkunft</option>
                    <option value="press">Presse & Medien</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-muted-foreground">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-chart-1 hover:bg-chart-1/80 text-white"
                  >
                    {isSubmitting ? (
                      <>Wird gesendet...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Nachricht senden
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="festive-border p-8 rounded-lg">
              <h2 className="font-rajdhani text-2xl font-bold mb-6 neon-text">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-chart-1/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-Mail</h3>
                    <p className="text-muted-foreground mb-1">Allgemeine Anfragen:</p>
                    <a href="mailto:dns.energy@outlook.com" className="text-chart-2 hover:underline">dns.energy@outlook.com</a>
                    
                    <p className="text-muted-foreground mt-3 mb-1">Ticketing:</p>
                    <a href="mailto:dns.energy@outlook.com" className="text-chart-2 hover:underline">dns.energy@outlook.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-chart-4/20 p-3 rounded-full">
                    <Home className="h-6 w-6 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">DNS Energy</p>
                    <p className="text-muted-foreground">Stoerehuus 370</p>
                    <p className="text-muted-foreground">9215 Schönenberg</p>
                    <p className="text-muted-foreground">Schweiz</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-chart-5/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-chart-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Bürozeiten</h3>
                    <p className="text-muted-foreground">Montag - Freitag: 10:00 - 18:00 Uhr</p>
                    <p className="text-muted-foreground">Wochenende: Geschlossen</p>
                    <p className="mt-2 text-sm italic">Bitte beachten Sie, dass unsere Antwortzeit in der Vorbereitungsphase des Festivals (Mai-Juli) etwas länger sein kann.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}