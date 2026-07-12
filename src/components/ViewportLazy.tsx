import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ViewportLazyProps {
  children: ReactNode;
  rootMargin?: string;
  fallback?: ReactNode;
}

export const ViewportLazy: React.FC<ViewportLazyProps> = ({ 
  children, 
  rootMargin = '200px',
  fallback = <div className="min-h-[100px]" />
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    
    // If IntersectionObserver is not supported, just render the children immediately
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once it's visible, we don't need to observe anymore
            if (currentRef) observer.unobserve(currentRef);
          }
        });
      },
      {
        rootMargin,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [rootMargin]);

  return (
    <div ref={domRef}>
      {isVisible ? children : fallback}
    </div>
  );
};
