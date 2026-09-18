"use client";

import { media } from "@/lib/content";

export function Product() {
  return (
    <section
      id="product"
      data-theme="dark"
      className="relative overflow-hidden bg-[#0C0C0C] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
              02 PRODUCT
            </span>
            <h2 className="mt-4 font-sans text-[clamp(36px,5.6vw,84px)] font-extrabold tracking-[-0.03em] leading-[0.94] uppercase">
              Not just <br />
              <span className="font-serif font-light italic text-[#F4F3EF]/80">sound.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-mute">
              AERON ARC is engineered around the way you actually experience sound — not around a spec sheet.
            </p>

            <div className="mt-10 space-y-6 border-t border-line pt-8">
              <div>
                <span className="font-mono text-xs text-[#D8FF3E]">01 / ARCHITECTURAL FORM</span>
                <p className="mt-1 text-sm text-dim">
                  A single continuous surface, shaped to vanish against the ear. Zero excess bulk.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#D8FF3E]">02 / ACOUSTIC SEAL</span>
                <p className="mt-1 text-sm text-dim">
                  Micro-contoured memory ceramic creates an imperceptible hermetic chamber.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 Cloudinary Video */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#151515] lg:col-span-7">
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 font-mono text-[11px] tracking-[0.2em] text-[#D8FF3E]">
              FIG 02.1 — ACTIVE TRANSDUCER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
