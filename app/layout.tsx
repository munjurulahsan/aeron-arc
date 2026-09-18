import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "AERON ARC — Sound, Reimagined.",
  description: "AERON ARC wireless audio. Precision spatial sound, 32H battery, and architectural ceramic form.",
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgressBar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
