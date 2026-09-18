"use client";

import { media } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      data-theme="dark"
      className="relative grid min-h-svh grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-[#080808] px-gutter pb-[clamp(22px,4vh,44px)] pt-[clamp(88px,15vh,180px)] text-[#F4F3EF]"
    >
      {/* Background Cloudinary Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_52%,rgba(8,8,8,0.2)_0%,rgba(8,8,8,0.72)_70%,#080808_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.6)_0%,transparent_30%,transparent_70%,#080808_100%)]" />
      </div>

      {/* Eyebrow / Meta */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[11px] tracking-[0.24em] text-mute uppercase">
        <span data-hero-type="left">AERON ARC // 01</span>
        <span data-hero-type="right" className="text-[#D8FF3E]">
          SPATIAL AUDIO ACTIVE
        </span>
      </div>

      {/* Main Headline */}
      <div className="relative z-10 my-auto flex flex-col justify-center text-center">
        <h1 className="select-none font-sans font-black tracking-[-0.04em] leading-[0.88] text-[clamp(46px,10vw,144px)] uppercase">
          <span className="block" data-hero-type="left">
            SOUND,
          </span>
          <span className="block font-serif font-light italic text-[#F4F3EF]/90" data-hero-type="right">
            Reimagined.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[42ch] font-mono text-[12px] tracking-[0.08em] text-mute">
          Precision-engineered spatial audio. Designed to disappear into your world.
        </p>
      </div>

      {/* Bottom CTA / Scroller */}
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-5 font-mono text-[11px] tracking-[0.2em] text-mute">
        <a
          href="#product"
          data-cursor="EXPLORE"
          data-magnetic
          className="inline-flex items-center gap-2 text-[#D8FF3E] hover:underline"
        >
          EXPLORE AERON ARC →
        </a>
        <span className="hidden sm:inline-block">SCROLL TO BEGIN</span>
      </div>
    </section>
  );
}
