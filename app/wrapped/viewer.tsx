"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DeckSlide } from "./deck";
import { fileSlug, saveFile, slidesToPdf, slideToPng } from "./export";
import { SLIDE_H, SLIDE_W, StaticContext } from "./slides/parts";

type Theme = "dark" | "light";

type Props = {
  slides: DeckSlide[];
  name: string;
  theme: Theme;
  onTheme: (theme: Theme) => void;
  onClose: () => void;
  fonts: string;
};

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/70 disabled:opacity-50";

/** Tap-through slides, like Stories: tap the right side for next, the left for back. */
export function Viewer({ slides, name, theme, onTheme, onClose, fonts }: Props) {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [busy, setBusy] = useState<string | null>(null);
  const exportRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback((step: number) => setIndex((i) => Math.min(slides.length - 1, Math.max(0, i + step))), [slides.length]);

  useEffect(() => {
    // Room for the progress bar and controls; on phones the buttons wrap onto two rows.
    const fit = () => {
      const reserve = window.innerWidth < 520 ? 260 : 190;
      setScale(Math.min((window.innerWidth - 24) / SLIDE_W, (window.innerHeight - reserve) / SLIDE_H, 1.6));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  async function renderAll(): Promise<string[]> {
    const pngs: string[] = [];
    for (let i = 0; i < slides.length; i++) {
      setBusy(`Making slide ${i + 1} of ${slides.length}…`);
      const node = exportRefs.current[i]?.firstElementChild as HTMLElement | null;
      if (node) pngs.push(await slideToPng(node));
    }
    return pngs;
  }

  async function downloadImages() {
    try {
      const pngs = await renderAll();
      const slug = fileSlug(name);
      pngs.forEach((png, i) => saveFile(png, `${slug}-wrap-2026-${String(i + 1).padStart(2, "0")}.png`));
      setBusy(`Saved ${pngs.length} images.`);
    } catch {
      setBusy("Couldn’t make the images. Try again.");
    }
  }

  async function downloadPdf() {
    try {
      const pngs = await renderAll();
      setBusy("Putting the PDF together…");
      const blob = await slidesToPdf(pngs);
      const url = URL.createObjectURL(blob);
      saveFile(url, `${fileSlug(name)}-wrap-2026.pdf`);
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
      setBusy("Saved the PDF.");
    } catch {
      setBusy("Couldn’t make the PDF. Try again.");
    }
  }

  const slide = slides[index];

  return (
    <div role="dialog" aria-modal="true" aria-label="Your 2026 wrap" className={`fixed inset-0 z-[10000] flex flex-col items-center bg-[#0a0a0a] text-white ${fonts}`}>
      <div className="flex w-full max-w-[560px] items-center gap-3 px-3 pt-3">
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {slides.map((s, i) => (
            <div key={s.id} className={`h-1 flex-1 rounded-full ${i <= index ? "bg-white" : "bg-white/25"}`} />
          ))}
        </div>
        <span className="font-mono text-xs tabular-nums text-white/80">{`${index + 1} / ${slides.length}`}</span>
        <button ref={closeRef} type="button" onClick={onClose} className={`${btn} min-w-11 px-0 hover:bg-white/10`} aria-label="Close and edit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="relative mt-3 flex flex-1 items-start justify-center" style={{ width: SLIDE_W * scale }}>
        <div style={{ width: SLIDE_W * scale, height: SLIDE_H * scale }} className="overflow-hidden rounded-lg">
          <div key={`${slide.id}-${theme}`} data-wrap-theme={theme} style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: SLIDE_W, height: SLIDE_H }}>
            {slide.render()}
          </div>
        </div>
        <button type="button" onClick={() => go(-1)} disabled={index === 0} aria-label="Previous slide" className="absolute inset-y-0 left-0 w-1/3 cursor-w-resize outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:cursor-default" />
        <button type="button" onClick={() => go(1)} disabled={index === slides.length - 1} aria-label="Next slide" className="absolute inset-y-0 right-0 w-2/3 cursor-e-resize outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:cursor-default" />
      </div>

      <div className="flex w-full max-w-[560px] flex-wrap items-center justify-center gap-2 px-3 pb-4 pt-3">
        <div className="inline-flex rounded-full border border-white/30 p-1" role="group" aria-label="Slide colours">
          {(["dark", "light"] as const).map((t) => (
            <button key={t} type="button" aria-pressed={theme === t} onClick={() => onTheme(t)} className={`${btn} min-h-9 px-3 ${theme === t ? "bg-white text-black" : "text-white hover:bg-white/10"}`}>
              {t === "dark" ? "Dark" : "Light"}
            </button>
          ))}
        </div>
        <button type="button" onClick={downloadImages} disabled={Boolean(busy?.endsWith("…"))} className={`${btn} bg-white text-black hover:bg-white/90`}>
          Download images
        </button>
        <button type="button" onClick={downloadPdf} disabled={Boolean(busy?.endsWith("…"))} className={`${btn} border border-white/40 hover:bg-white/10`}>
          Download PDF
        </button>
        <p aria-live="polite" className="w-full text-center text-sm text-white/80">
          {busy ?? "Images for X, a PDF for a LinkedIn carousel."}
        </p>
      </div>

      {/* Every slide at rest, off screen, for the downloads. */}
      <StaticContext.Provider value={true}>
        <div aria-hidden="true" className="wrap-static" style={{ position: "fixed", left: -20000, top: 0, pointerEvents: "none" }}>
          {slides.map((s, i) => (
            <div key={`${s.id}-export-${theme}`} ref={(el) => {
                exportRefs.current[i] = el;
              }} data-wrap-theme={theme} style={{ width: SLIDE_W, height: SLIDE_H }}>
              {s.render()}
            </div>
          ))}
        </div>
      </StaticContext.Provider>
    </div>
  );
}
