"use client";

export function Footer() {
  return (
    <footer
      data-theme="dark"
      className="relative border-t border-white/10 bg-[#080808] px-gutter pb-8 sm:pb-[34px] pt-10 sm:pt-[62.5px] text-[#F4F3EF]"
    >
      <div className="mx-auto max-w-[1424px]">
        {/* Top Watermark & Tagline Row */}
        <div className="flex flex-col justify-between gap-4 sm:gap-6 border-b border-white/10 pb-6 sm:pb-10 md:flex-row md:items-end">
          <div className="select-none font-sans text-[clamp(44px,14vw,224px)] font-[900] leading-[0.8] tracking-[-0.05em] text-[#F4F3EF]/[0.05]">
            AERON
          </div>
          <div className="pb-1 sm:pb-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#B9BCC0]">
            SOUND, REIMAGINED.
          </div>
        </div>

        {/* 4-Column Navigation & Spec Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8">
          {/* Column 1: SHOP */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/55 uppercase">
              SHOP
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-[#F4F3EF]">
              <a href="#product" className="transition-colors hover:text-[#D8FF3E]">
                Product
              </a>
              <a href="#technology" className="transition-colors hover:text-[#D8FF3E]">
                Technology
              </a>
              <a href="#experience" className="transition-colors hover:text-[#D8FF3E]">
                Experience
              </a>
            </div>
          </div>

          {/* Column 2: CARE */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/55 uppercase">
              CARE
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-[#F4F3EF]">
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Support
              </a>
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Shipping
              </a>
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Returns
              </a>
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Privacy
              </a>
            </div>
          </div>

          {/* Column 3: FOLLOW */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/55 uppercase">
              FOLLOW
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-[#F4F3EF]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#D8FF3E]"
              >
                Instagram
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#D8FF3E]"
              >
                X
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#D8FF3E]"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Column 4: TECHNICAL SPECS */}
          <div className="flex flex-col gap-2 font-mono text-[10px] leading-[19px] tracking-[0.16em] text-[#B9BCC0]/55">
            <div>MODEL / ARC-01</div>
            <div>CODEC / LDAC · AAC · SBC</div>
            <div>BLUETOOTH / 5.4 LE</div>
            <div>IP RATING / IPX5</div>
            <div>FIRMWARE / 1.04.220</div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.16em] text-[#B9BCC0]/45 sm:flex-row sm:items-center">
          <div>© 2026 AERON AUDIO LABORATORIES</div>
          <div>DESIGNED FOR THE WAY YOU HEAR</div>
        </div>
      </div>
    </footer>
  );
}
