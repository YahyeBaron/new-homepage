'use client';

import { useEffect, useRef } from 'react';
import { pageHtml } from './pageHtml';

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Execute scripts sequentially in DOM order
    const scripts = Array.from(containerRef.current.querySelectorAll('script'));
    
    let promise = Promise.resolve();
    scripts.forEach((oldScript) => {
      promise = promise.then(() => {
        return new Promise((resolve) => {
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
          });
          
          if (oldScript.src) {
            newScript.onload = () => resolve();
            newScript.onerror = () => resolve();
          } else {
            newScript.textContent = oldScript.textContent;
            setTimeout(resolve, 10);
          }
          
          oldScript.parentNode.replaceChild(newScript, oldScript);
          if (!oldScript.src) {
            resolve();
          }
        });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: pageHtml }}
      suppressHydrationWarning
    />
  );
}
