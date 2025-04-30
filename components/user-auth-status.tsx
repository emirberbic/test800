"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function UserAuthStatus() {
  // Since we're removing Supabase, we'll use localStorage for a simple auth simulation
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if user info exists in localStorage
    const savedEmail = localStorage.getItem('userEmail');
    
    if (savedEmail) {
      setIsAuthenticated(true);
      setEmail(savedEmail);
    } else {
      setIsAuthenticated(false);
    }
    
    setIsLoading(false);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setEmail(null);
    
    // Redirect to home page if needed
    window.location.href = '/';
  };
  
  if (isLoading) {
    return <div className="animate-pulse bg-muted h-8 w-24 rounded"></div>;
  }
  
  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {email}
        </span>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
  
  return (
    <Link href="/login">
      <Button variant="ghost" size="sm">
        Login
      </Button>
    </Link>
  );
}