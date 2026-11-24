"use client";

import { createContext, useContext, useEffect, useState, type CSSProperties, type ReactNode } from "react";

export const SLIDE_W = 540;
export const SLIDE_H = 675;

export const F = {
  display: "var(--wf-display), 'Inter Tight', sans-serif",
  sans: "var(--wf-sans), system-ui, sans-serif",
  mono: "var(--wf-mono), ui-monospace, monospace",
  dots: "var(--wf-dots), ui-monospace, monospace",
  marker: "var(--wf-marker), cursive",
};

export const C = {
  bg: "var(--wrap-bg, #121212)",
  dots: "var(--wrap-dots, rgba(255,255,255,0.06))",
  ink: "var(--wrap-ink, #ffffff)",
  soft: "var(--wrap-soft, #dcdcdc)",
  muted: "var(--wrap-muted, #bdbdbd)",
  amber: "var(--wrap-amber, #FFB31A)",
  glow: "var(--wrap-glow, 0 0 8px rgba(255,179,26,0.45))",
  boardAmber: "#FFB31A",
  boardGlow: "0 0 9px rgba(255,179,26,0.5)",
};

/** TfL's line colours, used as colour only: no roundel, Johnston or map. */
export const LINE = {
  central: "#E32017",
  overground: "#EE7C0E",
  metropolitan: "#9B0056",
  jubilee: "#A0A5A9",
  victoria: "#0098D4",
  elizabeth: "#6950A1",
  piccadilly: "#003688",
  district: "#00782A",
  bakerloo: "#B36305",
  circle: "#FFD300",
};

/** True while slides are rendered for export: everything shows at rest. */
export const StaticContext = createContext(false);

export function useCountUp(target: number, duration = 1400): number {
  const still = useContext(StaticContext);
  const [value, setValue] = useState(still ? target : 0);
  useEffect(() => {
    if (still || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, still]);
  return value;
}

export const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export type SlideProps = { page: number; pages: number; next?: string; owner: string };

type FrameProps = SlideProps & {
  label: string;
  stripe: ReactNode;
  chip: string;
  chipBg: string;
  chipInk?: string;
  footerLeft?: ReactNode;
  children: ReactNode;
};

const mono = (size: number, extra: CSSProperties = {}): CSSProperties => ({
  fontFamily: F.mono,
  fontSize: size,
  fontWeight: 700,
  letterSpacing: "0.14em",
  ...extra,
});

export function Kicker({ color, children }: { color: string; children: ReactNode }) {
  return <p style={{ margin: 0, padding: "24px 30px 0", ...mono(13), color }}>{children}</p>;
}

export function Frame({ label, stripe, chip, chipBg, chipInk = "#ffffff", owner, page, pages, next, footerLeft, children }: FrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="wrap-slide"
      style={{
        width: SLIDE_W,
        height: SLIDE_H,
        position: "relative",
        overflow: "hidden",
        backgroundColor: C.bg,
        backgroundImage: `radial-gradient(${C.dots} 1px, transparent 1.3px)`,
        backgroundSize: "6px 6px",
        color: C.ink,
        fontFamily: F.sans,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {typeof stripe === "string" ? <div style={{ height: 10, background: stripe }} /> : stripe}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 30px 0" }}>
        <span style={mono(12)}>{owner} 2026</span>
        <span style={{ ...mono(12, { letterSpacing: "0.12em" }), color: chipInk, background: chipBg, padding: "6px 10px" }}>{chip}</span>
      </div>
      {children}
      <div style={{ flexGrow: 1 }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px 14px" }}>
        {footerLeft ?? (
          <span style={{ fontFamily: F.dots, fontWeight: 900, fontSize: 18, color: C.amber, textShadow: C.glow }}>
            {next ? `NEXT STOP: ${next}` : "PLEASE TAKE ALL YOUR MEMORIES"}
          </span>
        )}
        <span style={{ ...mono(12, { letterSpacing: 0 }), color: C.muted }}>{`${page} / ${pages}`}</span>
      </div>
      <Platform />
    </div>
  );
}

function Platform() {
  const words = Array.from({ length: 8 }, (_, i) => (
    <span key={i} style={{ paddingRight: 32 }}>
      MIND THE GAP
    </span>
  ));
  return (
    <div aria-hidden="true">
      <div
        style={{
          height: 30,
          backgroundColor: "#3a3a3a",
          backgroundImage: "radial-gradient(#5a5a5a 2.6px, transparent 3px)",
          backgroundSize: "10px 10px",
          backgroundPosition: "2px 2px",
        }}
      />
      <div style={{ height: 38, background: LINE.circle, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div
          className="wrap-gap"
          style={{ display: "flex", whiteSpace: "nowrap", fontFamily: F.display, fontSize: 24, letterSpacing: "0.08em", color: "#121212" }}
        >
          {words}
        </div>
      </div>
      <div style={{ height: 22, background: "#050505" }} />
    </div>
  );
}

/** A dot-matrix departure board. Decorative: the slide's own label says what it shows. */
export function Board({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      className="wrap-board-on"
      aria-hidden="true"
      style={{
        background: "#050505",
        border: "2px solid #2c2c2c",
        borderRadius: 10,
        boxShadow: "inset 0 0 0 6px #0b0b0b",
        display: "flex",
        flexDirection: "column",
        fontFamily: F.dots,
        fontWeight: 900,
        color: C.boardAmber,
        textShadow: C.boardGlow,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Arrow({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const headline = (size: number, extra: CSSProperties = {}): CSSProperties => ({
  margin: 0,
  padding: "8px 30px 0",
  fontFamily: F.display,
  fontWeight: 400,
  fontSize: size,
  lineHeight: 0.92,
  textTransform: "uppercase",
  ...extra,
});

export const body = (extra: CSSProperties = {}): CSSProperties => ({
  margin: 0,
  padding: "14px 30px 0",
  fontSize: 20,
  lineHeight: 1.35,
  fontWeight: 500,
  color: C.soft,
  ...({ textWrap: "balance" } as CSSProperties),
  ...extra,
});

export { mono };
