"use client";

import { media } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      data-theme="dark"
      className="relative overflow-hidden bg-[#080808] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div className="relative mx-auto h-[clamp(520px,92svh,940px)] w-full overflow-hidden rounded-3xl">
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

        <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-14">
          <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            03 EXPERIENCE
          </span>

          <div className="max-w-[700px]">
            <h2 className="font-sans text-[clamp(32px,5vw,78px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
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
