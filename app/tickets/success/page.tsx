"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated order confirmation
    if (sessionId) {
      setTimeout(() => {
        setOrderDetails({
          id: sessionId.substring(0, 8),
          status: 'paid',
          date: new Date().toLocaleDateString(),
        });
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen">
        <div className="container px-4 max-w-2xl mx-auto text-center">
          <h1 className="font-rajdhani text-3xl md:text-4xl font-bold mb-6">
            Bestellung wird verarbeitet...
          </h1>
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-12 bg-chart-1/20 rounded-full mb-4"></div>
            <div className="h-4 bg-muted w-3/4 rounded mb-2"></div>
            <div className="h-4 bg-muted w-1/2 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!sessionId || !orderDetails) {
    return (
      <div className="pt-24 pb-20 min-h-screen">
        <div className="container px-4 max-w-2xl mx-auto text-center">
          <h1 className="font-rajdhani text-3xl md:text-4xl font-bold mb-6">
            Ungültige Bestellung
          </h1>
          <p className="text-muted-foreground mb-8">
            Es wurde keine gültige Bestellung gefunden. Bitte versuchen Sie es erneut.
          </p>
          <Button asChild>
            <Link href="/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zu Tickets
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container px-4 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-chart-1 mx-auto mb-4" />
          <h1 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4">
            Bestellung erfolgreich!
          </h1>
          <p className="text-muted-foreground">
            Vielen Dank für Ihren Kauf. Ihre Bestellung wurde erfolgreich verarbeitet.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="font-rajdhani text-xl font-bold mb-4">Bestelldetails</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Bestellnummer:</span>
              <span className="font-medium">{orderDetails.id}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium text-green-500">Bezahlt</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Datum:</span>
              <span className="font-medium">{orderDetails.date}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-chart-1/10 border border-chart-1/30 rounded-lg p-6 mb-8">
          <h2 className="font-rajdhani text-xl font-bold mb-4">Was passiert als Nächstes?</h2>
          <p className="mb-4">
            Sie erhalten in Kürze eine Bestätigungs-E-Mail mit Ihren Ticketdetails. 
            Bitte bewahren Sie diese E-Mail für Ihre Unterlagen auf.
          </p>
          <p>
            Ihre Tickets werden vor dem Festival an die von Ihnen angegebene E-Mail-Adresse gesendet.
          </p>
        </div>
        
        <div className="text-center">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}