import { Anton, Inter_Tight, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import localFont from "next/font/local";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--wf-display", display: "swap" });
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--wf-sans",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--wf-mono", display: "swap" });
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--wf-marker", display: "swap" });
// Doto (dot matrix, SIL Open Font License) is newer than this Next.js release's Google font list, so it is self-hosted.
const doto = localFont({ src: "./fonts/doto-900.woff2", weight: "900", variable: "--wf-dots", display: "swap" });

export const wrapFonts = [anton, inter, mono, marker, doto].map((font) => font.variable).join(" ");
