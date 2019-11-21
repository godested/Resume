import { useState, useEffect } from 'react';

export function useScrollY() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function subscribe() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', subscribe);

    return () => window.removeEventListener('scroll', subscribe);
  }, []);

  return scrollPosition;
}
