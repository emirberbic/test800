"use client";

import React, { useRef, useEffect, useState, memo } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

// Optimized implementation that throttles updates and uses requestAnimationFrame
export const SparklesCore = memo(
  ({
    id,
    className,
    background = "#000",
    minSize = 0.4,
    maxSize = 1.2,
    speed = 1,
    particleColor = "#FFF",
    particleDensity = 100,
  }: SparklesProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number | null>(null);
    const lastUpdateTimeRef = useRef<number>(0);
    const isVisibleRef = useRef<boolean>(true);
    const canvasSizeRef = useRef({ width: 0, height: 0 });
    
    // Check for device capabilities
    useEffect(() => {
      // Check if device is low-end based on deviceMemory API
      if (navigator && 'deviceMemory' in navigator) {
        // @ts-ignore - Property 'deviceMemory' does not exist on type 'Navigator'
        setIsLowPerformanceDevice(navigator.deviceMemory < 4);
      }
      
      // Also consider battery status if available
      if (navigator && 'getBattery' in navigator) {
        // @ts-ignore - Property 'getBattery' does not exist on type 'Navigator'
        navigator.getBattery().then((battery) => {
          if (battery.level < 0.15) { // Battery less than 15%
            setIsLowPerformanceDevice(true);
          }
        });
      }
    }, []);
    
    // Adjust particle density based on performance
    const adjustedDensity = isLowPerformanceDevice 
      ? Math.floor(particleDensity / 2.5) 
      : particleDensity;
    
    // Intersection observer to pause animation when not visible
    useEffect(() => {
      if (typeof window === 'undefined') return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisibleRef.current = entry.isIntersecting;
            
            if (entry.isIntersecting && !animationRef.current) {
              animationRef.current = requestAnimationFrame(animate);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (canvasRef.current) {
        observer.observe(canvasRef.current);
      }
      
      return () => {
        observer.disconnect();
      };
    }, []);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const context = canvas.getContext("2d", { alpha: true });
      contextRef.current = context;
      
      const initCanvas = () => {
        if (!canvas || !context) return;
        
        const devicePixelRatio = window.devicePixelRatio || 1;
        
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Store the size for later use
        canvasSizeRef.current = { width, height };
        
        // Set canvas size accounting for device pixel ratio
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        
        // Scale context to match
        context.scale(devicePixelRatio, devicePixelRatio);
        
        // Calculate particles count based on area
        const area = width * height;
        const baseCount = Math.min(500, adjustedDensity);
        const particleCount = Math.floor(baseCount * (area / (1920 * 1080)));
        
        // Only create new particles if needed
        if (particlesRef.current.length === 0) {
          particlesRef.current = Array.from({ length: particleCount }, () => 
            new Particle(
              Math.random() * width,
              Math.random() * height,
              minSize + Math.random() * (maxSize - minSize),
              particleColor
            )
          );
        } else {
          // Ensure existing particles are within bounds
          particlesRef.current.forEach(particle => {
            if (particle.x > width) particle.x = Math.random() * width;
            if (particle.y > height) particle.y = Math.random() * height;
          });
          
          // Adjust particle count if needed
          if (particlesRef.current.length < particleCount) {
            const additionalParticles = Array.from(
              { length: particleCount - particlesRef.current.length },
              () => new Particle(
                Math.random() * width,
                Math.random() * height,
                minSize + Math.random() * (maxSize - minSize),
                particleColor
              )
            );
            particlesRef.current = [...particlesRef.current, ...additionalParticles];
          } else if (particlesRef.current.length > particleCount) {
            particlesRef.current = particlesRef.current.slice(0, particleCount);
          }
        }
      };
      
      // Initialize canvas
      initCanvas();
      
      // Setup resize handler
      const handleResize = () => {
        initCanvas();
      };
      
      window.addEventListener("resize", handleResize);
      
      // Start animation
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        window.removeEventListener("resize", handleResize);
      };
    }, [background, minSize, maxSize, particleColor, adjustedDensity]);
    
    // Animation function with throttling for better performance
    const animate = (timestamp: number) => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Throttle updates for low-performance devices
      const minFrameTime = isLowPerformanceDevice ? 50 : 16; // ~20fps for low-perf, 60fps for high-perf
      const elapsed = timestamp - lastUpdateTimeRef.current;
      
      if (elapsed < minFrameTime) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastUpdateTimeRef.current = timestamp;
      
      const context = contextRef.current;
      const canvas = canvasRef.current;
      
      if (!context || !canvas) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      const { width, height } = canvasSizeRef.current;
      
      // Clear canvas
      context.clearRect(0, 0, width, height);
      
      // Update and draw particles
      const adjustedSpeed = speed * (elapsed / 16); // Scale speed by elapsed time
      
      particlesRef.current.forEach((particle) => {
        particle.update(width, height, adjustedSpeed);
        particle.draw(context);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    return (
      <canvas
        ref={canvasRef}
        id={id}
        className={cn("w-full h-full", className)}
        style={{
          background,
        }}
      />
    );
  }
);

SparklesCore.displayName = "SparklesCore";

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  
  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = 0.15 + Math.random() * 0.1;
  }
  
  update(width: number, height: number, speedFactor: number = 1) {
    this.y += this.speed * speedFactor;
    
    if (this.y > height) {
      this.y = 0;
      this.x = Math.random() * width;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}