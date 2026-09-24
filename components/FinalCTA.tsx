"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

type Props = {
  onAddToCart?: () => void;
};

export function FinalCTA({ onAddToCart }: Props) {
  const { isVisible, sectionRef } = useSectionTransition("cta");

  return (
    <section
      id="cta"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 flex min-h-[440px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[695px] items-center justify-center overflow-hidden bg-[#050505] text-[#F4F3EF]"
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
        ref={sectionRef}
        className={`relative z-10 mx-auto flex w-full max-w-[841px] flex-col items-center px-gutter py-14 sm:py-20 lg:py-28 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <h2 className="font-sans text-[clamp(34px,6.5vw,108px)] font-[900] leading-[0.95] tracking-tight sm:tracking-[0.037em] text-[#F4F3EF]">
          Hear what&apos;s next.
        </h2>

        <p className="mt-4 sm:mt-6 max-w-[400px] font-sans text-[13px] sm:text-[14px] leading-[1.65] text-[#B9BCC0]">
          A new generation of wireless audio, built around how the world sounds to you.
        </p>

        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onAddToCart}
            data-cursor="ORDER"
            data-magnetic
            className="w-full sm:w-auto rounded-full bg-[#F4F3EF] px-[30px] py-4 font-mono text-[11px] font-[600] leading-none tracking-[0.16em] text-[#080808] transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            BUY AERON ARC — $249
          </button>

          <a
            href="#technology"
            data-cursor="LEARN"
            data-magnetic
            className="w-full sm:w-auto rounded-full border border-[#F4F3EF]/35 bg-transparent px-[30px] py-4 font-mono text-[11px] font-[400] leading-none tracking-[0.16em] text-[#F4F3EF] transition-colors duration-300 hover:border-[#F4F3EF] hover:bg-white/[0.04]"
          >
            EXPLORE TECHNOLOGY
          </a>
        </div>
      </div>
    </section>
  );
}
