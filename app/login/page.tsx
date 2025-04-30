"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Simple validation
      if (!email.includes('@') || password.length < 6) {
        throw new Error("Ungültige E-Mail oder Passwort zu kurz (min. 6 Zeichen)");
      }
      
      // In a real application, this would validate with a backend
      // For this demo, we'll just store the email in localStorage
      localStorage.setItem('userEmail', email);
      
      // Redirect to tickets page after successful login
      router.push("/tickets");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSignUp = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simple validation
      if (!email.includes('@') || password.length < 6) {
        throw new Error("Ungültige E-Mail oder Passwort zu kurz (min. 6 Zeichen)");
      }
      
      // In a real application, this would register with a backend
      // For this demo, we'll store the email in localStorage and show a success message
      localStorage.setItem('userEmail', email);
      
      // Show success message
      setError("Registrierung erfolgreich! Sie sind jetzt angemeldet.");
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/tickets");
      }, 2000);
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 max-w-md mx-auto">
        <h1 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6 text-center">
          ANMELDEN
        </h1>
        <p className="text-muted-foreground mb-8 text-center">
          Melden Sie sich an, um Tickets zu kaufen oder Ihre Bestellungen anzuzeigen.
        </p>
        
        <div className="festive-border p-8 rounded-lg mb-4">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre@email.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {error && (
              <div className={`${error.includes("erfolgreich") ? "bg-green-500/10 text-green-500" : "bg-destructive/10 text-destructive"} p-3 rounded-md text-sm`}>
                {error}
              </div>
            )}
            
            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full bg-chart-1 hover:bg-chart-1/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Wird verarbeitet...
                  </>
                ) : (
                  "Anmelden"
                )}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleSignUp}
                disabled={isLoading}
              >
                Registrieren
              </Button>
            </div>
          </form>
        </div>
        
        <p className="text-sm text-center text-muted-foreground">
          Durch die Anmeldung stimmen Sie unseren <a href="/terms" className="text-chart-2 hover:underline">AGB</a> und <a href="/privacy" className="text-chart-2 hover:underline">Datenschutzrichtlinien</a> zu.
        </p>
      </div>
    </div>
  );
}