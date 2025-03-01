import { useCallback, useEffect, useRef, useState } from 'react';

interface IUseIntersectionObserverProps extends IntersectionObserverInit {}

interface IUseIntersectionObserverResponse {
  ref: (node?: Element | null) => void;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export function useIntersectionObserver({
  threshold = 0.2,
  rootMargin = '0px 0px 0px 0px'
}: IUseIntersectionObserverProps = {}): IUseIntersectionObserverResponse {
  const rootRef = useRef<Element | null>(null);
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setView(entries[0].isIntersecting);
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    );
    observer.observe(rootRef.current);
    return () => {
      observer.unobserve(rootRef.current);
    };
  }, [rootRef]);

  const ref = useCallback((node) => {
    rootRef.current = node;
  }, []);

  return { ref, inView: view };
}

export default useIntersectionObserver;
