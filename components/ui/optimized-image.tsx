"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fadeIn?: boolean;
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fadeIn = false,
  fallbackSrc,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(fadeIn);
  const [error, setError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setLoading(fadeIn);
    setError(false);
  }, [src, fadeIn]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  // Use fallback source if provided and there's an error
  const imageSrc = error && fallbackSrc ? fallbackSrc : src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={cn(
        className,
        loading && 'opacity-0',
        !loading && 'opacity-100',
        'transition-opacity duration-500'
      )}
      onLoadingComplete={handleLoad}
      onError={handleError}
      {...props}
    />
  );
}