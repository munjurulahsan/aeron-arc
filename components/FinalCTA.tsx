"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

type Props = {
  onAddToCart?: () => void;
};

export function FinalCTA({ onAddToCart }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative flex min-h-[695px] items-center justify-center overflow-hidden bg-[#050505] text-[#F4F3EF]"
    >
      {/* Background Image from Figma (node 1:427) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={media.finalCtaBg}
          alt=""
          className="h-full w-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.35)_0%,rgba(5,5,5,0.85)_75%,#050505_100%)]" />
      </div>

      {/* Content Container (841px in Figma) */}
      <div
        className={`relative z-10 mx-auto flex w-full max-w-[841px] flex-col items-center px-[clamp(20px,3.65vw,56px)] py-[clamp(80px,7.24vw,111px)] text-center transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <h2 className="font-sans text-[clamp(48px,7vw,108px)] font-[900] leading-[0.92] tracking-[0.037em] text-[#F4F3EF]">
          Hear what&apos;s next.
        </h2>

        <p className="mt-7 max-w-[400px] font-sans text-[14px] leading-[1.7] text-[#B9BCC0]">
          A new generation of wireless audio, built around how the world sounds to you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onAddToCart}
            data-cursor="ORDER"
            data-magnetic
            className="rounded-full bg-[#F4F3EF] px-[30px] py-4 font-mono text-[11px] font-[600] leading-none tracking-[0.16em] text-[#080808] transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            BUY AERON ARC — $249
          </button>

          <a
            href="#technology"
            data-cursor="LEARN"
            data-magnetic
            className="rounded-full border border-[#F4F3EF]/35 bg-transparent px-[30px] py-4 font-mono text-[11px] font-[400] leading-none tracking-[0.16em] text-[#F4F3EF] transition-colors duration-300 hover:border-[#F4F3EF] hover:bg-white/[0.04]"
          >
            EXPLORE TECHNOLOGY
          </a>
        </div>
      </div>
    </section>
  );
}
