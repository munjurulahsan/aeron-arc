"use client";

import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#080808] px-gutter py-14 text-[#F4F3EF]">
      <div className="mx-auto flex max-w-[1560px] flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="font-extrabold tracking-[0.26em] text-lg">AERON</span>
          <p className="mt-2 font-mono text-xs text-mute">
            © {new Date().getFullYear()} AERON AUDIO INC. ALL RIGHTS RESERVED.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 font-mono text-xs text-mute">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#top"
            data-cursor="TOP"
            className="text-[#D8FF3E] hover:underline"
          >
            BACK TO TOP ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
