'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Clear any hash in URL and scroll to top on page load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}