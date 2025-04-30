import { useState, useEffect, useRef, useCallback } from 'react';
import { throttle } from 'lodash-es';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const frozen = useRef(false);

  // Throttle the visibility state update
  const updateVisibility = useCallback(
    throttle((visible: boolean) => {
      // If already visible and freeze is enabled, don't update
      if (frozen.current && freezeOnceVisible) return;
      
      setIsVisible(visible);
      
      // If element becomes visible and freeze is enabled, set frozen to true
      if (visible && freezeOnceVisible) {
        frozen.current = true;
      }
    }, 100),
    [freezeOnceVisible]
  );

  useEffect(() => {
    if (!ref) return;
    
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      updateVisibility(entry.isIntersecting);
    };
    
    observerRef.current = new IntersectionObserver(callback, {
      threshold,
      root,
      rootMargin,
    });
    
    observerRef.current.observe(ref);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [ref, threshold, root, rootMargin, updateVisibility]);

  return { ref: setRef, isVisible };
}