"use client";

export function Acoustics() {
  return (
    <section
      data-theme="dark"
      className="relative bg-[#080808] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div className="mx-auto max-w-[1560px]">
        <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
          08 INTELLIGENCE
        </span>
        <h2 className="mt-4 font-sans text-[clamp(36px,5.6vw,84px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
          It listens <br />
          <span className="font-serif font-light italic">with you.</span>
        </h2>
        <p className="mt-6 max-w-[48ch] font-mono text-sm leading-relaxed text-mute">
          Four acoustic systems running quietly in the background, adjusting the sound before you notice it needed adjusting.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="border-t border-line pt-6">
            <span className="font-mono text-xs text-[#D8FF3E]">01 / ADAPTIVE ANC</span>
            <h3 className="mt-2 text-xl font-bold">Reads the room 200× a second</h3>
            <p className="mt-2 font-mono text-xs text-dim">
              Adjusts anti-noise wave phase in real time to cancel subway rumble or coffee shop clatter.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <span className="font-mono text-xs text-[#D8FF3E]">02 / SPATIAL TRANSPARENCY</span>
            <h3 className="mt-2 text-xl font-bold">Bypass with natural stereo phase</h3>
            <p className="mt-2 font-mono text-xs text-dim">
              External microphones funnel outside voices into your ears with natural directional timing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
