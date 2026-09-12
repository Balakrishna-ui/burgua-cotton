'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // If IntersectionObserver is not supported, immediately reveal everything
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px 40px 0px',
      }
    );

    const elements = document.querySelectorAll(
      '[data-reveal]:not(.is-revealed), [data-reveal-group]:not(.is-revealed)'
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
