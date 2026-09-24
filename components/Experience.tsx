"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Experience() {
  const { isVisible, sectionRef } = useSectionTransition("experience");

  return (
    <section
      id="experience"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#080808] px-gutter py-12 sm:py-16 md:py-20 lg:py-28 text-[#F4F3EF]"
    >
      <div
        ref={sectionRef}
        className={`relative mx-auto min-h-[440px] h-[65svh] sm:h-[75svh] md:h-[clamp(520px,85svh,940px)] max-h-[940px] w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover filter brightness-[0.75] contrast-[1.1]"
        >
          <source src={media.section3Video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080808_100%)]" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-14">
          <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            03 EXPERIENCE
          </span>

          <div className="max-w-[700px]">
            <h2 className="font-sans text-[clamp(28px,5vw,78px)] font-black tracking-[-0.03em] leading-[0.94] uppercase">
              Lose yourself <br />
              <span className="font-serif font-light italic">in the sound.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-mute">
              EVERY DETAIL. EVERY LAYER. EVERY MOMENT. Sound should feel closer, deeper, and more immersive — as though it were never transmitted at all.
            </p>
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
            IMMERSIVE CINEMATIC FIELD // 360° SPHERICAL
          </div>
        </div>
      </div>
    </section>
  );
}
