"use client";

export function Precision() {
  return (
    <section
      data-theme="dark"
      className="relative bg-[#151515] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div className="mx-auto max-w-[1560px]">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
              05 ENGINEERING
            </span>
            <h2 className="mt-3 font-sans text-[clamp(32px,4.8vw,68px)] font-black tracking-[-0.03em] uppercase">
              Built with precision.
            </h2>
          </div>
          <p className="max-w-[42ch] font-mono text-xs text-mute">
            Tolerances measured in microns. Components calibrated to harmonic resonance limits.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="border-t border-line pt-6">
            <span className="font-mono text-xs text-[#D8FF3E]">01 / TITANIUM CHAMBER</span>
            <h3 className="mt-2 font-sans text-xl font-bold">0.4 mm Walls</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed text-dim">
              Vacuum-sealed titanium containment. Resonance measured in single decibels across all frequency bands.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <span className="font-mono text-xs text-[#D8FF3E]">02 / ADAPTIVE DRIVER</span>
            <h3 className="mt-2 font-sans text-xl font-bold">11 mm Dual Diaphragm</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed text-dim">
              Custom composite that stiffens under high excursion to eliminate mid-range breakup distortion.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <span className="font-mono text-xs text-[#D8FF3E]">03 / LOGIC CORE</span>
            <h3 className="mt-2 font-sans text-xl font-bold">4nm Audio Engine</h3>
            <p className="mt-3 font-mono text-xs leading-relaxed text-dim">
              Calculates 200,000 spatial adjustments per second with sub-millisecond audio latency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
