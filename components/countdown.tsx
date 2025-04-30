"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

export default function Countdown({ targetDate, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  const timeUnits = [
    { label: "TAGE", value: timeLeft.days },
    { label: "STUNDEN", value: timeLeft.hours },
    { label: "MINUTEN", value: timeLeft.minutes },
    { label: "SEKUNDEN", value: timeLeft.seconds },
  ];
  
  return (
    <div className={cn("flex flex-wrap justify-center gap-4 md:gap-6", className)}>
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center p-3 md:p-4 bg-background/50 backdrop-blur-sm border border-border transition-all duration-200"
        >
          <span className="font-rajdhani text-3xl md:text-5xl font-bold">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm font-medium text-muted-foreground mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}