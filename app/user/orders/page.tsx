"use client";

import { useState, useEffect } from "react";
import { getUserOrders } from "@/lib/stripe";
import { Calendar, Clock, CreditCard, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Mock orders data
        const userOrders = await getUserOrders();
        setOrders(userOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Check if user is logged in
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      // Redirect to login if not logged in
      window.location.href = "/login";
    } else {
      fetchOrders();
    }
  }, []);
  
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: currency || 'CHF',
    }).format(amount / 100);
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
          MEINE BESTELLUNGEN
        </h1>
        <p className="text-muted-foreground mb-10">
          Hier finden Sie eine Übersicht all Ihrer Festival-Bestellungen.
        </p>
        
        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-chart-1 border-r-transparent"></div>
            <p className="mt-4">Bestellungen werden geladen...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="festive-border p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Keine Bestellungen gefunden</h2>
            <p className="text-muted-foreground mb-6">
              Sie haben noch keine Tickets gekauft. Besuchen Sie unsere Ticketseite, um Tickets für das Festival zu erwerben.
            </p>
            <Button asChild className="bg-chart-1 hover:bg-chart-1/80">
              <Link href="/tickets">Tickets kaufen</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <div className="bg-card p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h2 className="font-bold text-xl">{order.product_name}</h2>
                    <div className="px-3 py-1 bg-chart-1/20 text-chart-1 rounded-full text-sm font-medium">
                      {order.order_status === 'completed' ? 'Bestätigt' : order.order_status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Bestelldatum: {new Date(order.order_date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Betrag: {formatCurrency(order.amount_total, order.currency)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Status: {order.payment_status === 'paid' ? 'Bezahlt' : order.payment_status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/20 p-4 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Bestell-ID: {order.order_id}
                  </div>
                  
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/tickets" className="flex items-center gap-1">
                      <span>Weitere Tickets kaufen</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}