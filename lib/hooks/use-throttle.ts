import { useEffect, useRef, useState, useCallback } from 'react';
import { throttle } from 'lodash-es';

export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback);
  
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  return useCallback(
    throttle((...args: Parameters<T>) => {
      callbackRef.current(...args);
    }, delay),
    [delay]
  );
}