"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const FEATURES = [
  {
    num: "01",
    title: "ARCHITECTURAL\nFORM",
    desc: "A single continuous surface, shaped to vanish against the ear.",
  },
  {
    num: "02",
    title: "PRECISION\nACOUSTICS",
    desc: "A sealed titanium chamber tuned across the full audible band.",
  },
  {
    num: "03",
    title: "ADAPTIVE\nFIT",
    desc: "Four silicone densities. Pressure that never announces itself.",
  },
  {
    num: "04",
    title: "SPATIAL\nENGINE",
    desc: "Head-tracked rendering at 96 kHz, recalculated 1,000× a second.",
  },
];

export function Product() {
  const { isVisible, sectionRef } = useSectionTransition("product");

  return (
    <section
      id="product"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#0C0C0C] px-gutter py-12 sm:py-16 md:py-20 lg:py-28 text-[#F4F3EF]"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1424px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        {/* Eyebrow Meta: 02 —— PRODUCT */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-[14px]">
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
            02
          </span>
          <span className="h-[1px] w-[54px] bg-[#D8FF3E]/50" />
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
            PRODUCT
          </span>
        </div>

        {/* Section Headline & Description */}
        <div className="w-full">
          <h2 className="m-0 font-sans text-[clamp(2.4rem,7vw,8rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-[#F4F3EF]">
            NOT JUST
            <br />
            SOUND.
          </h2>
          <p className="mt-4 sm:mt-5 max-w-[430px] font-sans text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#B9BCC0]">
            AERON ARC is engineered around the way you actually experience sound — not around a spec sheet.
          </p>
        </div>

        {/* Middle Video Container (Using existing Section 2 video) */}
        <div className="relative my-6 sm:my-8 md:my-12 aspect-[16/10] sm:aspect-[16/9] w-full max-h-[672px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#151515]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src={media.section2Video} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-mono text-[9px] sm:text-[10.5px] tracking-[0.2em] text-[#D8FF3E]">
            FIG 02.1 — ACTIVE TRANSDUCER
          </div>
        </div>

        {/* 4-Feature Cards Grid with 1px hairline dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#F4F3EF]/10 border border-[#F4F3EF]/10">
          {FEATURES.map((item) => (
            <div
              key={item.num}
              className="flex flex-col justify-between bg-[#0C0C0C] p-[22px] pt-[26px] pb-[30px]"
            >
              <div>
                <div className="mb-4 font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  {item.num}
                </div>
                <div className="font-sans text-[15px] font-bold uppercase leading-[1.25] tracking-[0.02em] text-[#F4F3EF] whitespace-pre-line">
                  {item.title}
                </div>
              </div>
              <p className="mt-[14px] font-sans text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
