"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

type HeroProps = {
  onAddToCart?: () => void;
};

export function Hero({ onAddToCart }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      data-theme="dark"
      className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden bg-[#080808] px-gutter pb-6 sm:pb-8 md:pb-12 pt-[clamp(80px,12vh,140px)] text-[#F4F3EF]"
    >
      {/* Background Cloudinary Video */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover filter brightness-[0.78] contrast-[1.08]"
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>

        {/* Figma Radial Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 52%, rgba(8,8,8,0) 0%, rgba(8,8,8,0.72) 70%, #080808 100%)",
          }}
        />

        {/* Subtle Top & Bottom Linear Shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
      </div>

      {/* Main Headline Group (Unified with controlled, tighter spacing) */}
      <div
        className={`relative z-10 my-auto flex w-full flex-col select-none py-2 md:py-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.97]"
        }`}
      >
        {/* Line 1: SOUND, (Left-aligned) */}
        <div data-hero-type="left" className="w-full">
          <h1 className="m-0 font-sans text-[clamp(2.4rem,8.8vw,10.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em] text-[#F4F3EF]">
            SOUND,
          </h1>
        </div>

        {/* Line 2: REIMAGINED. (Close spacing to Line 1 + offset horizontally to x=527px) */}
        <div
          data-hero-type="right"
          className="mt-2 sm:mt-[clamp(8px,2.5vw,36px)] md:ml-[clamp(40px,28vw,470px)]"
        >
          <h2 className="m-0 font-sans text-[clamp(2.4rem,8.8vw,10.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em] text-[#F4F3EF]">
            REIMAGINED.
          </h2>
        </div>
      </div>

      {/* Bottom Row: Meta, CTAs & Scroll Indicator */}
      <div
        className={`relative z-10 mt-auto flex w-full flex-wrap items-end justify-between gap-5 sm:gap-7 pt-4 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.97]"
        }`}
      >
        {/* Left Column */}
        <div className="flex max-w-[420px] flex-col gap-[22px]">
          {/* Status Row */}
          <div className="flex items-center gap-[10px] font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#B9BCC0] uppercase">
            <span className="h-[6px] w-[6px] rounded-full bg-[#D8FF3E] animate-aeron-pulse shadow-[0_0_8px_rgba(216,255,62,0.8)]" />
            <span>SPATIAL AUDIO</span>
            <span className="h-[1px] w-[26px] bg-[#B9BCC0]/40" />
            <span className="text-[#F4F3EF]">ACTIVE</span>
          </div>

          {/* Description Paragraph */}
          <p className="m-0 max-w-[330px] font-sans text-[14px] leading-[1.65] text-[#B9BCC0]">
            Precision-engineered spatial audio. Designed to disappear into your world.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("aeron:navigate", { detail: { targetId: "product" } }));
                const target = document.querySelector("#product");
                if (target) {
                  if (typeof window !== "undefined" && (window as any).__lenis) {
                    (window as any).__lenis.scrollTo(target, { offset: -80, duration: 1.1 });
                  } else {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              data-cursor="EXPLORE"
              data-magnetic
              className="inline-flex items-center justify-center rounded-full bg-[#F4F3EF] px-[26px] py-[15px] font-mono text-[11px] font-medium tracking-[0.16em] text-[#080808] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              EXPLORE AERON ARC
            </a>
            <button
              type="button"
              onClick={onAddToCart}
              data-cursor="OPEN"
              data-magnetic
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#F4F3EF]/35 bg-transparent px-[26px] py-[15px] font-mono text-[11px] font-normal tracking-[0.16em] text-[#F4F3EF] transition-all duration-200 hover:border-[#F4F3EF] hover:bg-[#F4F3EF]/10 active:scale-[0.98]"
            >
              BUY NOW — $249
            </button>
          </div>
        </div>

        {/* Right Column: Scroll Indicator */}
        <div className="flex flex-col items-end gap-[10px] text-right font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/60 uppercase">
          <span>ARC / GEN 01</span>
          <span>SCROLL TO BEGIN</span>
          <span className="h-[46px] w-[1px] bg-gradient-to-b from-[#F4F3EF]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
