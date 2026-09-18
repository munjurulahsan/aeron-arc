"use client";

import { useEffect, useRef } from "react";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY || window.pageYOffset;
      const docH = document.documentElement.scrollHeight - vh;
      const progress = Math.min(Math.max(y / Math.max(1, docH), 0), 1);
      if (barRef.current) {
        barRef.current.style.width = `${progress * 100}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-progress-track
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] bg-white/10"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        data-progress-bar
        className="h-full w-0 bg-[#D8FF3E] transition-[width] duration-75 ease-out"
      />
    </div>
  );
}
