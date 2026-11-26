"use client";

import { MONTHS, TYPE_LABELS, compareLine, daysIn, otherCount, sortedMix, type WrapData } from "../data";
import { Arrow, Board, C, F, Frame, Kicker, LINE, body, delay, headline, mono, useCountUp, type SlideProps } from "./parts";

type P = SlideProps & { data: WrapData };

export function Cover({ data, ...frame }: P) {
  return (
    <Frame
      {...frame}
      label={`${frame.owner} 2026: a year of showing up. Touch in to start.`}
      stripe={LINE.central}
      chip="CENTRAL · WESTBOUND"
      chipBg={LINE.central}
      footerLeft={
        <span style={{ ...mono(14), color: "var(--wrap-red-text, #FF6B5E)", display: "flex", alignItems: "center", gap: 10 }}>
          TOUCH IN TO START <Arrow />
        </span>
      }
    >
      <Board style={{ margin: "26px 30px 0", padding: "16px 18px", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, lineHeight: 1 }}>
          <span>1 {frame.owner} 2026</span>
          <span>NOW</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, lineHeight: 1 }}>
          <span>2 JAN – NOV</span>
          <span>ON TIME</span>
        </div>
        <div style={{ fontSize: 18, lineHeight: 1, opacity: 0.85, paddingTop: 4 }}>STAND BACK · A YEAR IS ARRIVING</div>
      </Board>
      <h1 className="wrap-rise" style={headline(92, { padding: "34px 30px 0", lineHeight: 0.9, ...delay(500) })}>
        A year of
        <br />
        showing up.
      </h1>
      <p className="wrap-rise" style={body({ padding: "16px 30px 0", maxWidth: 420, ...delay(700) })}>
        Every talk, meetup and build night across London, counted.
      </p>
    </Frame>
  );
}

export function BigNumber({ data, ...frame }: P) {
  const shown = useCountUp(data.total);
  return (
    <Frame {...frame} label={`You showed up to ${data.total} events in London. ${compareLine(data.total)}`} stripe={LINE.overground} chip="ZONES 1 – 6" chipBg={LINE.overground} chipInk="#121212">
      <p className="wrap-rise" style={{ margin: 0, padding: "30px 30px 0", fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.01em" }}>
        You showed up to
      </p>
      <div style={{ margin: "4px 0 0 -14px", fontFamily: F.display, fontSize: 330, lineHeight: 0.86, color: LINE.overground, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>
        {shown}
      </div>
      <p className="wrap-rise" style={{ margin: 0, padding: "10px 30px 0", fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.015em", ...delay(900) }}>
        events in London.
      </p>
      <p className="wrap-rise" style={body({ maxWidth: 450, ...delay(1100) })}>
        {compareLine(data.total)}
      </p>
    </Frame>
  );
}

const MIX_COLOURS = {
  meetups: LINE.central,
  talks: LINE.victoria,
  workshops: LINE.district,
  socials: LINE.overground,
  conferences: LINE.elizabeth,
  hackathons: LINE.circle,
} as const;

export function Mix({ data, ...frame }: P) {
  const mix = sortedMix(data);
  const other = otherCount(data);
  const rows: { name: string; count: number; colour: string }[] = mix.map(([type, count]) => ({
    name: TYPE_LABELS[type],
    count,
    colour: MIX_COLOURS[type],
  }));
  if (other > 0) rows.push({ name: "Other", count: other, colour: LINE.jubilee });
  const max = Math.max(1, ...rows.map((r) => r.count));
  const top = mix[0];
  const rare = mix[mix.length - 1];
  const note =
    data.mixNote?.trim() ||
    (rare && mix.length > 1 ? `And only ${rare[1]} ${TYPE_LABELS[rare[0]].toLowerCase()}. Rare, but you made them count.` : "");
  return (
    <Frame
      {...frame}
      label={`Mostly ${top ? TYPE_LABELS[top[0]].toLowerCase() : "events"}. ${rows.map((r) => `${r.name} ${r.count}`).join(", ")}.`}
      stripe={LINE.metropolitan}
      chip="METROPOLITAN · ALL LINES KEY"
      chipBg={LINE.metropolitan}
    >
      <Kicker color="var(--wrap-magenta-text, #F27DB8)">YOUR LINES</Kicker>
      <h2 className="wrap-rise" style={headline(60, { padding: "6px 30px 0", lineHeight: 0.95 })}>
        Mostly {top ? TYPE_LABELS[top[0]].toLowerCase() : "events"}.
      </h2>
      <p className="wrap-rise" style={body({ padding: "12px 30px 0", ...delay(150) })}>
        {note}
      </p>
      <div style={{ margin: "18px 30px 0", display: "flex", flexDirection: "column", gap: 6 }}>
        {rows.map((row, i) => (
          <div key={row.name} style={{ display: "grid", gridTemplateColumns: "128px minmax(0, 1fr)", alignItems: "center", columnGap: 14, minHeight: 34 }}>
            <span className="wrap-fade" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.1, textAlign: "right", ...delay(200 + i * 120) }}>
              {row.name}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <div
                className="wrap-draw-x"
                style={{
                  width: Math.max(14, Math.round((row.count / max) * 270)),
                  height: 14,
                  borderRadius: 7,
                  background: row.colour,
                  boxShadow: row.colour === LINE.circle ? "var(--wrap-track-edge, none)" : "none",
                  flexShrink: 0,
                  ...delay(300 + i * 120),
                }}
              />
              <span className="wrap-fade" style={{ fontFamily: F.dots, fontWeight: 900, fontSize: 22, color: C.amber, textShadow: C.glow, fontVariantNumeric: "tabular-nums", ...delay(900 + i * 120) }}>
                {row.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function Gap({ data, ...frame }: P) {
  const gap = data.gap;
  const names = MONTHS.slice(0, 11);
  let a = names.indexOf(gap.from as (typeof names)[number]);
  let b = names.indexOf(gap.to as (typeof names)[number]);
  if (a < 0) a = 0;
  if (b < 0) b = a;
  if (b < a) [a, b] = [b, a];
  const short = (i: number) => names[i].slice(0, 3);
  const range = a === b ? short(a) : `${short(a)} – ${short(b)}`;
  const countText = gap.count === 1 ? "1 event" : gap.count === 0 ? "no events" : `${gap.count} events`;
  return (
    <Frame {...frame} label={`Mind the gap. ${range}: ${countText}. Then you never stopped.`} stripe={LINE.jubilee} chip="JUBILEE · REDUCED SERVICE" chipBg={LINE.jubilee} chipInk="#121212">
      <Kicker color="var(--wrap-gap-text, #FFD300)">MIND THE GAP</Kicker>
      <h2 className="wrap-rise" style={headline(84, { lineHeight: 0.9 })}>
        {range}:
        <br />
        {countText}.
      </h2>
      <p className="wrap-rise" style={{ margin: 0, padding: "14px 30px 0", fontSize: 22, lineHeight: 1.3, fontWeight: 700, ...delay(200) }}>
        Then you never stopped.
      </p>
      <div style={{ margin: "34px 30px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(11, minmax(0, 1fr))", gap: 3, height: 96, alignItems: "end" }}>
          {names.map((month, i) => {
            const inGap = i >= a && i <= b;
            return (
              <div key={month} className="wrap-slab" style={{ height: inGap ? 26 : 96, display: "flex", flexDirection: "column", background: inGap ? "#050505" : "transparent", ...delay(300 + i * 70) }}>
                {inGap ? (
                  <div style={{ height: 6, backgroundImage: "repeating-linear-gradient(135deg, #FFD300 0 6px, #121212 6px 12px)" }} />
                ) : (
                  <>
                    <div style={{ height: 10, background: LINE.circle }} />
                    <div style={{ flexGrow: 1, backgroundColor: "#3a3a3a", backgroundImage: "radial-gradient(#5a5a5a 2.2px, transparent 2.6px)", backgroundSize: "9px 9px" }} />
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(11, minmax(0, 1fr))", gap: 3, marginTop: 10 }}>
          {names.map((month, i) => (
            <span key={month} style={{ textAlign: "center", ...mono(13, { letterSpacing: 0 }), color: i >= a && i <= b ? "var(--wrap-gap-text, #FFD300)" : C.muted }}>
              {month[0]}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function Busiest({ data, ...frame }: P) {
  const { month, count, highlights } = data.busiest;
  const shown = useCountUp(count, 1300);
  const days = daysIn(month);
  const perDay = (count / days).toFixed(1);
  const calling = highlights.filter(Boolean).map((h) => h.toUpperCase()).join(" · ") || "TALKS · MEETUPS · SOCIALS";
  const line = count >= days ? `${count} events in ${days} days. More events than days, and no delays.` : `${count} events in ${days} days. Peak service, no delays.`;
  return (
    <Frame {...frame} label={`${month} was rush hour. ${line}`} stripe={LINE.victoria} chip="VICTORIA · PEAK SERVICE" chipBg={LINE.victoria} chipInk="#121212">
      <Board style={{ margin: "24px 24px 0", padding: "18px 20px 16px", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, lineHeight: 1, opacity: 0.8 }}>
          <span>PLATFORM 4</span>
          <span>BUSIEST MONTH</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 40, lineHeight: 1 }}>
          <span>1 {month.toUpperCase()}</span>
          <span>{shown}</span>
        </div>
        <div style={{ overflow: "hidden", whiteSpace: "nowrap", fontSize: 18, lineHeight: 1, borderTop: "1px dashed #3a2a00", borderBottom: "1px dashed #3a2a00", padding: "9px 0" }}>
          <div className="wrap-calling" style={{ display: "inline-flex" }}>
            <span style={{ paddingRight: 40 }}>CALLING AT: {calling}</span>
            <span style={{ paddingRight: 40 }}>CALLING AT: {calling}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, lineHeight: 1 }}>
          <span>2 {perDay} A DAY</span>
          <span>ON TIME</span>
        </div>
      </Board>
      <h2 className="wrap-rise" style={headline(76, { padding: "34px 30px 0", ...delay(700) })}>
        {month}
        <br />
        was rush hour.
      </h2>
      <p className="wrap-rise" style={body({ padding: "16px 30px 0", maxWidth: 440, ...delay(900) })}>
        {line}
      </p>
    </Frame>
  );
}
