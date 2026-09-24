"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Precision() {
  const { isVisible, sectionRef } = useSectionTransition("engineering");

  return (
    <section
      id="engineering"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#151515] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 lg:min-h-[875px] text-[#F4F3EF]"
    >
      {/* Background Architectural Ray / Stage Image from Figma */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={media.precisionBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-40 filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-[#151515]/80" />
      </div>

      <div
        ref={sectionRef}
        className={`relative z-10 mx-auto flex h-full max-w-[1424px] flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        {/* Top Header: Eyebrow + Built with Precision */}
        <div className="w-full">
          {/* Eyebrow Meta: 05 —— ENGINEERING */}
          <div className="flex items-center gap-[14px]">
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
              05
            </span>
            <span className="h-[1px] w-[54px] bg-[#D8FF3E]/50" />
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
              ENGINEERING
            </span>
          </div>

          {/* Heading (Figma Node 1:292) */}
          <div className="mt-[34px] max-w-[1076px]">
            <h2 className="m-0 font-sans text-[clamp(42px,6.4vw,98px)] font-extrabold uppercase leading-[1.08] tracking-[-0.045em] text-[#F4F3EF]">
              BUILT WITH
              <br />
              PRECISION.
            </h2>
          </div>
        </div>

        {/* Center Showcase: Specs on Left, Macro Product in Center, Specs on Right */}
        <div className="mt-8 sm:mt-12 lg:mt-[clamp(40px,7vh,90px)] grid items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Spec 01 & Spec 02 */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:col-span-4">
            {/* Spec 01: Titanium acoustic chamber */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  01
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  TITANIUM ACOUSTIC CHAMBER
                </span>
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                0.4 mm walls, vacuum-sealed. Resonance measured in single decibels.
              </p>
            </div>

            {/* Spec 02: Adaptive driver */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  02
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  ADAPTIVE DRIVER
                </span>
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                11 mm dual-layer diaphragm that stiffens under load.
              </p>
            </div>
          </div>

          {/* Center Column: Macro Floating Earbuds Image from Figma */}
          <div className="my-2 flex justify-center lg:my-0 lg:col-span-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[444px]">
              <img
                src={media.precisionMacro}
                alt="AERON ARC Precision Engineering"
                className="animate-aeron-float h-auto w-full object-contain filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* Right Column: Spec 03 & Spec 04 */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:col-span-4 lg:items-end">
            {/* Spec 03: Micro sensor array */}
            <div className="w-full text-left lg:text-right">
              <div className="flex items-center justify-start gap-3 lg:justify-end">
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block lg:order-1" />
                <span className="lg:hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  03
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF] lg:order-2">
                  MICRO SENSOR ARRAY
                </span>
                <span className="hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E] lg:inline lg:order-3">
                  03
                </span>
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85 lg:ml-auto lg:pl-0 lg:pr-[26px]">
                Six-axis motion, optical wear detection, bone conduction pickup.
              </p>
            </div>

            {/* Spec 04: Ceramic composite shell */}
            <div className="w-full text-left lg:text-right">
              <div className="flex items-center justify-start gap-3 lg:justify-end">
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block lg:order-1" />
                <span className="lg:hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  04
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF] lg:order-2">
                  CERAMIC COMPOSITE SHELL
                </span>
                <span className="hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E] lg:inline lg:order-3">
                  04
                </span>
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85 lg:ml-auto lg:pl-0 lg:pr-[26px]">
                Scratch-hardened to 8H. Warm to the touch within seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
