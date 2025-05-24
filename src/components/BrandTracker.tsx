// components/BrandTracker.tsx
'use client';

import { useEffect } from 'react';

export default function BrandTracker({ brandName }: { brandName: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: brandName,
        content_type: 'brand',
      });
    }
  }, [brandName]);

  return null; // Não renderiza nada
}
