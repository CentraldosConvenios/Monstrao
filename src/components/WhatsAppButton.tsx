'use client';

import { useCallback } from 'react';

export default function WhatsAppButton() {
  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    // Redireciona manualmente
    window.open('https://wa.me/5511942453595', '_blank');
  }, []);

  return (
    <button
      onClick={handleClick}
      className="border border-black text-black text-[14px] font-bold px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
    >
      FALE CONOSCO
    </button>
  );
}
