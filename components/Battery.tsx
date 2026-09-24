"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Battery() {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isVisible, elementRef: contentRef } = useSectionTransition("battery");

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max((vh * 0.85 - r.top) / (vh * 0.5), 0), 1);
      bar.style.width = `${(10 + p * 90).toFixed(1)}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="battery"
      data-theme="light"
      className="relative scroll-mt-20 md:scroll-mt-24 bg-[#F4F3EF] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 text-[#080808]"
    >
      <div
        ref={(el) => {
          if (containerRef) (containerRef as any).current = el;
          if (contentRef) (contentRef as any).current = el;
        }}
        className={`mx-auto max-w-[1424px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3.5">
              <span className="rounded bg-[#080808] px-1.5 py-0.5 font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
                07
              </span>
              <div className="h-px w-[54px] bg-[#080808]/20" />
              <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#5B5B58]">
                POWER
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 font-sans text-[clamp(44px,5.6vw,86px)] font-[800] leading-[1.05] tracking-[-0.06em] text-[#080808]">
              Power that stays with you.
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-[380px] font-sans text-[14px] leading-[1.7] text-[#4A4A47]">
              Designed for long days, late nights and everything between.
            </p>

            {/* Stat Cards */}
            <div className="mt-10 grid grid-cols-1 border border-[#080808]/15 bg-[#F4F3EF] sm:grid-cols-3 sm:divide-x divide-y sm:divide-y-0 divide-[#080808]/15">
              <div className="p-6">
                <div className="font-sans text-[clamp(36px,3.5vw,54.4px)] font-[800] leading-none tracking-[-0.04em] text-[#080808]">
                  32H
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                  TOTAL LISTENING
                </div>
              </div>

              <div className="p-6">
                <div className="font-sans text-[clamp(36px,3.5vw,54.4px)] font-[800] leading-none tracking-[-0.04em] text-[#080808]">
                  8H
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                  SINGLE CHARGE
                </div>
              </div>

              <div className="p-6">
                <div className="font-sans text-[clamp(36px,3.5vw,54.4px)] font-[800] leading-none tracking-[-0.04em] text-[#080808]">
                  15 MIN
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                  = 3H PLAYBACK
                </div>
              </div>
            </div>

            {/* Battery Tracker Bar */}
            <div className="mt-8">
              <div className="h-[3px] w-full overflow-hidden bg-[#080808]/12">
                <div
                  ref={barRef}
                  data-battery-bar
                  className="h-full bg-[#080808] transition-[width] duration-300"
                  style={{ width: "15%" }}
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                <span>00H</span>
                <span>16H</span>
                <span>32H</span>
              </div>
            </div>
          </div>

          {/* Right Column: Charging Pod Image from Figma */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
            <div className="relative aspect-[492/590] w-full max-w-[492px]">
              <img
                src={media.chargingPod}
                alt="AERON ARC charging pod, open"
                className="h-full w-full object-contain filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
