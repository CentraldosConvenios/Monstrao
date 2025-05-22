'use client';

import { useEffect, useRef } from 'react';

const Circle = () => (
  <span className="w-1 h-1 rounded-full bg-[#929292] mx-2 inline-block" />
);

export default function TopHeader() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animation: number;

    if (container) {
      const scroll = () => {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        animation = requestAnimationFrame(scroll);
      };

      animation = requestAnimationFrame(scroll);
    }

    return () => cancelAnimationFrame(animation);
  }, []);

  const repeatedItems = Array.from({ length: 20 }, (_, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span>Somente no Atacado</span>
      <Circle />
      <span>Para todo o Brasil</span>
      <Circle />
    </span>
  ));

  return (
    <div className="bg-[#FAFAFA] h-10 overflow-hidden w-full relative top-0 left-0 z-50">
      <div
        ref={scrollRef}
        className="whitespace-nowrap flex items-center h-full text-[#929292] text-[12px] font-medium font-['Helvetica Neue'] animate-scroll overflow-hidden"
      >
        {repeatedItems}
      </div>
    </div>
  );
}

