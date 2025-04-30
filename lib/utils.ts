import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
  };
}

// Helper to check if device is low-end based on device memory
export function isLowEndDevice(): boolean {
  if (typeof navigator !== 'undefined') {
    // Check for device memory
    if ('deviceMemory' in navigator) {
      // @ts-ignore - deviceMemory is not in the TypeScript navigator type
      return navigator.deviceMemory < 4;
    }
    
    // Check for connection type
    if ('connection' in navigator) {
      // @ts-ignore - connection is not in TypeScript navigator type
      const connection = navigator.connection;
      if (connection && ((connection as any).saveData || 
         (connection as any).effectiveType === 'slow-2g' || 
         (connection as any).effectiveType === '2g')) {
        return true;
      }
    }
    
    // Check based on user agent for older devices
    const userAgent = navigator.userAgent;
    if (/Android.*Mobile|iPhone|iPad/.test(userAgent)) {
      // Simple heuristic - check if device is more than ~5 years old
      if (/Android [1-7]\./.test(userAgent) || 
          /iPhone OS ([1-9]|1[0-2])_/.test(userAgent) ||
          /iPad; CPU OS ([1-9]|1[0-2])_/.test(userAgent)) {
        return true;
      }
    }
  }
  return false;
}

// Simplified animation settings (no actual animations)
export function getAnimationSettings() {
  return {
    particleDensity: 0,
    minSize: 0,
    maxSize: 0,
    speed: 0
  };
}

// Defer non-critical operations
export function deferOperation(callback: () => void, timeout = 200) {
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      // @ts-ignore - requestIdleCallback not in TypeScript Window type
      window.requestIdleCallback(() => callback());
    } else {
      setTimeout(callback, timeout);
    }
  }
}

// Create a throttled scroll handler that uses passive event listener
export function createThrottledScrollHandler(
  callback: (event: Event) => void,
  delay = 100
) {
  let lastCall = 0;
  return function(event: Event) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback(event);
    }
  };
}

// Helper to disable animations for users who prefer reduced motion
export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Optimize image loading by preloading only critical images
export function preloadCriticalImages(images: string[]) {
  if (typeof window === 'undefined') return;
  
  deferOperation(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
}