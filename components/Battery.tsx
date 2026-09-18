"use client";

import { useEffect, useRef } from "react";

export function Battery() {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max((vh * 0.85 - r.top) / (vh * 0.5), 0), 1);
      bar.style.width = `${(8 + p * 92).toFixed(1)}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      data-theme="light"
      className="relative bg-[#F4F3EF] px-gutter py-[clamp(90px,14vh,180px)] text-[#080808]"
    >
      <div ref={containerRef} className="mx-auto max-w-[1560px]">
        <span className="font-mono text-[11px] tracking-[0.24em] text-[#080808]/60 uppercase">
          07 POWER
        </span>
        <h2 className="mt-4 font-sans text-[clamp(36px,5.6vw,84px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
          Power that stays <br />
          <span className="font-serif font-light italic text-[#080808]/70">with you.</span>
        </h2>
        <p className="mt-6 max-w-[48ch] font-mono text-sm leading-relaxed text-[#080808]/70">
          Designed for long days, late nights, and everything between.
        </p>

        <div className="mt-14 overflow-hidden rounded-2xl border border-black/10 bg-black/5 p-8">
          <div className="flex justify-between font-mono text-xs font-bold tracking-widest text-[#080808]">
            <span>BATTERY CELL ACTIVE</span>
            <span>32H TOTAL PLAYBACK</span>
          </div>

          <div className="mt-6 h-4 w-full overflow-hidden rounded-full bg-black/10">
            <div
              ref={barRef}
              data-battery-bar
              className="h-full w-[8%] rounded-full bg-[#080808] transition-[width] duration-300"
            />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/10 pt-6 font-mono text-xs">
            <div>
              <span className="text-black/50">SINGLE CHARGE</span>
              <p className="mt-1 text-base font-bold">8 HOURS</p>
            </div>
            <div>
              <span className="text-black/50">WITH POD</span>
              <p className="mt-1 text-base font-bold">32 HOURS</p>
            </div>
            <div>
              <span className="text-black/50">FAST CHARGE</span>
              <p className="mt-1 text-base font-bold">15 MIN = 3H</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
