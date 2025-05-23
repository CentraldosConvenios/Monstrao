"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

type Brand = {
  id: string;
  name: string;
};

export default function BrandNav({ brands }: { brands: Brand[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    function mouseDown(e: MouseEvent) {
      isDown = true;
      slider?.classList.add("cursor-grabbing");
      startX = e.pageX - slider!.offsetLeft;
      scrollLeft = slider!.scrollLeft;
    }

    function mouseLeave() {
      isDown = false;
      slider?.classList.remove("cursor-grabbing");
    }

    function mouseUp() {
      isDown = false;
      slider?.classList.remove("cursor-grabbing");
    }

    function mouseMove(e: MouseEvent) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider!.offsetLeft;
      const walk = (x - startX) * 2;
      slider!.scrollLeft = scrollLeft - walk;
    }

    function touchStart(e: TouchEvent) {
      isDown = true;
      startX = e.touches[0].pageX - slider!.offsetLeft;
      scrollLeft = slider!.scrollLeft;
    }

    function touchEnd() {
      isDown = false;
    }

    function touchMove(e: TouchEvent) {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider!.offsetLeft;
      const walk = (x - startX) * 2;
      slider!.scrollLeft = scrollLeft - walk;
    }

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchend", touchEnd);
    slider.addEventListener("touchmove", touchMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);

      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchend", touchEnd);
      slider.removeEventListener("touchmove", touchMove);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="bg-[#FAFAFA] w-full overflow-x-auto flex items-center select-none"
      style={{
        height: "40px",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
    >
    <div className="w-full flex justify-center">
      <nav
        className="flex gap-[26px] whitespace-nowrap px-[8px]"
        style={{
          width: "max-content",
        }}
      >
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brand/${brand.id}`}
            className="text-[16px] font-bold font-['Helvetica Neue'] text-black hover:underline transition"
          >
            {brand.name}
          </Link>
        ))}
      </nav>
    </div>
      {/* Oculta visualmente a scrollbar no Webkit (Chrome, Safari, etc.) */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}








