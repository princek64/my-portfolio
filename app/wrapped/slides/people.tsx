"use client";

import { numberWord, traveller, type WrapData } from "../data";
import { Arrow, Board, C, F, Frame, Kicker, LINE, body, delay, headline, mono, type SlideProps } from "./parts";

type P = SlideProps & { data: WrapData };

export function Communities({ data, ...frame }: P) {
  const stops = data.communities.filter((c) => c.name.trim()).slice(0, 5);
  const top = stops[0];
  return (
    <Frame
      {...frame}
      label={`Your most frequent stop: ${top?.name ?? "none yet"}. ${stops.map((s) => `${s.name} ${s.count}`).join(", ")}.`}
      stripe={LINE.elizabeth}
      chip="ELIZABETH · ALL STATIONS"
      chipBg={LINE.elizabeth}
    >
      <Kicker color="var(--wrap-purple-text, #B9A8EC)">YOUR MOST FREQUENT STOP</Kicker>
      <h2 className="wrap-rise" style={headline(72, { ...delay(150) })}>
        {top?.name ?? "Your top community"}
      </h2>
      <p className="wrap-rise" style={body({ padding: "10px 30px 0", fontSize: 19, ...delay(250) })}>
        {top ? `${top.count} visits. You could have asked for a season ticket.` : ""}
      </p>
      <div style={{ position: "relative", margin: "26px 30px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="wrap-draw-y" aria-hidden="true" style={{ position: "absolute", left: 13, top: 14, bottom: 14, width: 10, background: LINE.elizabeth, borderRadius: 5 }} />
        {stops.map((stop, i) => {
          const first = i === 0;
          const size = first ? 36 : 24;
          return (
            <div key={`${stop.name}-${i}`} className="wrap-slide-in" style={{ position: "relative", display: "grid", gridTemplateColumns: "36px minmax(0, 1fr) auto", alignItems: "center", columnGap: 16, minHeight: 44, ...delay(500 + i * 140) }}>
              <div aria-hidden="true" style={{ justifySelf: "center", width: size, height: size, borderRadius: "50%", background: "#ffffff", boxSizing: "border-box", border: `${first ? 8 : 6}px solid #121212`, boxShadow: "0 0 0 4px #ffffff" }} />
              <span style={{ fontSize: first ? 26 : 22, fontWeight: first ? 800 : 700, lineHeight: 1.1, letterSpacing: "-0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{stop.name}</span>
              <span style={{ fontFamily: F.dots, fontWeight: 900, fontSize: 24, color: C.amber, textShadow: C.glow, whiteSpace: "nowrap" }}>×{stop.count}</span>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

export function Wildcard({ data, ...frame }: P) {
  return (
    <Frame {...frame} label={`The wildcard. Good service on all lines. Minor detour reported: ${data.wildcard} Passengers say it was worth it.`} stripe={LINE.piccadilly} chip="PICCADILLY · SERVICE CHANGE" chipBg={LINE.piccadilly}>
      <Kicker color="var(--wrap-blue-text, #9FB4E8)">THE WILDCARD</Kicker>
      <div style={{ position: "relative", margin: "18px 38px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="wrap-board-drop" style={{ width: "100%", background: "#fbfbf8", border: "6px solid #c9ccd1", borderRadius: 6, boxShadow: "0 18px 40px -18px rgba(0,0,0,0.8)", overflow: "hidden", color: "#1a1a1a" }}>
          <div style={{ background: LINE.piccadilly, color: "#ffffff", padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "0.02em" }}>Service update</span>
            <span style={{ ...mono(11, { letterSpacing: "0.12em" }) }}>ALL LINES</span>
          </div>
          <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", gap: 10, fontFamily: F.marker }}>
            <p className="wrap-write" style={{ margin: 0, fontSize: 22, lineHeight: 1.2, color: "#1f4fbf", ...delay(600) }}>Good service on all lines.</p>
            <p className="wrap-write" style={{ margin: 0, fontSize: 22, lineHeight: 1.2, color: "#1f4fbf", ...delay(1200) }}>Minor detour reported:</p>
            <p className="wrap-write" style={{ margin: 0, fontSize: 34, lineHeight: 1.1, color: "#d4232a", ...delay(1800) }}>{data.wildcard}</p>
            <p className="wrap-write" style={{ margin: 0, fontSize: 20, lineHeight: 1.2, color: "#1a1a1a", ...delay(2500) }}>Passengers say it was worth it.</p>
          </div>
        </div>
        <div aria-hidden="true" style={{ width: "78%", display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: 10, height: 46, background: "#8a8f96", transform: "skewX(12deg)" }} />
          <div style={{ width: 10, height: 46, background: "#8a8f96", transform: "skewX(-12deg)" }} />
        </div>
      </div>
    </Frame>
  );
}

export function Ticket({ data, ...frame }: P) {
  const t = traveller(data);
  return (
    <Frame {...frame} label={`Your traveller type: ${t.name}. ${t.line}`} stripe={LINE.district} chip="DISTRICT · ANY ROUTE" chipBg={LINE.district}>
      <Kicker color="var(--wrap-green-text, #7FD39B)">YOUR TRAVELLER TYPE</Kicker>
      <div aria-hidden="true" style={{ margin: "18px 30px 0", height: 16, background: "#050505", border: "2px solid #2c2c2c", borderRadius: 10 }} />
      <div style={{ margin: "-8px 44px 0", overflow: "hidden", paddingBottom: 14 }}>
        <div className="wrap-issue" style={{ position: "relative", backgroundColor: "#F3EAD6", backgroundImage: "repeating-linear-gradient(135deg, rgba(0,120,42,0.07) 0 2px, transparent 2px 7px)", borderRadius: "0 0 10px 10px", color: "#1a1a1a", boxShadow: "0 16px 30px -16px rgba(0,0,0,0.9)" }}>
          <div style={{ background: LINE.district, color: "#ffffff", padding: "10px 16px", display: "flex", justifyContent: "space-between", ...mono(11, { letterSpacing: "0.12em" }) }}>
            <span>TRAVELCARD · ADULT</span>
            <span>No. 2026-0001</span>
          </div>
          <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ ...mono(11, { letterSpacing: "0.12em" }), color: "#4a4a4a" }}>TYPE</span>
            <span style={{ marginTop: -8, fontFamily: F.display, fontSize: 50, lineHeight: 0.95, textTransform: "uppercase", color: "#121212" }}>{t.name}</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8, borderTop: "1.5px dashed #b9ad94", paddingTop: 10, fontFamily: F.mono, fontSize: 11, lineHeight: 1.35 }}>
              {[
                ["VALID", "ZONES 1–6"],
                ["FROM", "01 JAN 26"],
                ["TO", "30 NOV 26"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#5a5a5a" }}>{k}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
            <span style={{ alignSelf: "flex-start", transform: "rotate(-2deg)", ...mono(12, { letterSpacing: "0.08em" }), color: "#B3141B", border: "2px solid #B3141B", borderRadius: 4, padding: "5px 8px" }}>{t.issued}</span>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", right: -6, top: 44, bottom: 12, width: 12, backgroundImage: "radial-gradient(circle, #121212 3px, transparent 3.5px)", backgroundSize: "12px 14px" }} />
        </div>
      </div>
      <p className="wrap-rise" style={{ margin: 0, padding: "16px 30px 0", fontSize: 22, lineHeight: 1.35, fontWeight: 600, maxWidth: 460, ...delay(1300) }}>
        {t.line}
      </p>
    </Frame>
  );
}

export function Built({ data, ...frame }: P) {
  const names = (data.built ?? []).filter((n) => n.trim()).slice(0, 7);
  const row = 44;
  const span = Math.max(0, names.length - 1) * row;
  return (
    <Frame {...frame} label={`What it all built: ${names.join(", ")}.`} stripe={LINE.bakerloo} chip="BAKERLOO · NEW STATIONS" chipBg={LINE.bakerloo}>
      <Kicker color="var(--wrap-brown-text, #F0A55C)">LINE EXTENSION</Kicker>
      <h2 className="wrap-rise" style={headline(54, { padding: "6px 30px 0", lineHeight: 0.95 })}>
        What it all built.
      </h2>
      <div style={{ margin: "18px 30px 0", background: "#ffffff", color: "#121212", borderRadius: 6, overflow: "hidden", boxShadow: "var(--wrap-panel-edge, none)" }}>
        <div style={{ background: LINE.bakerloo, color: "#ffffff", padding: "9px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 17, fontWeight: 800 }}>The 2026 line</span>
          <span style={mono(11, { letterSpacing: "0.12em" })}>{numberWord(names.length).toUpperCase()} NEW STATIONS</span>
        </div>
        <div style={{ position: "relative", padding: "14px 16px 10px" }}>
          <div className="wrap-draw-y" aria-hidden="true" style={{ position: "absolute", left: 33, top: 36, width: 10, height: span, background: LINE.bakerloo }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 33, top: 36 + span, width: 10, height: 30, backgroundImage: `repeating-linear-gradient(180deg, ${LINE.bakerloo} 0 6px, transparent 6px 11px)` }} />
          {names.map((name, i) => {
            const end = i === names.length - 1;
            return (
              <div key={`${name}-${i}`} className="wrap-slide-in" style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, height: row, ...delay(600 + i * 130) }}>
                <div aria-hidden="true" style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
                  {end ? (
                    <div style={{ position: "absolute", left: 11, top: 11, width: 22, height: 22, boxSizing: "border-box", borderRadius: "50%", background: "#ffffff", border: "5px solid #121212" }} />
                  ) : (
                    <div style={{ position: "absolute", left: 27, top: 17, width: 13, height: 10, background: LINE.bakerloo }} />
                  )}
                </div>
                <span style={{ fontSize: end ? 21 : 19, fontWeight: end ? 800 : 600, lineHeight: 1.1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>{name}</span>
                {end && <span style={{ marginLeft: "auto", ...mono(10, { letterSpacing: "0.1em" }), color: "#ffffff", background: "#121212", padding: "4px 7px", whiteSpace: "nowrap" }}>NOW OPEN</span>}
              </div>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", height: 30 }}>
            <div style={{ width: 44, flexShrink: 0 }} />
            <span style={{ ...mono(11, { letterSpacing: "0.1em" }), color: "#5a5a5a" }}>UNDER CONSTRUCTION · 2027</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const ALL_LINES = [LINE.central, LINE.overground, LINE.metropolitan, LINE.victoria, LINE.elizabeth, LINE.piccadilly, LINE.district, LINE.bakerloo];

export function End({ data: _data, ...frame }: P) {
  return (
    <Frame
      {...frame}
      label="End of the line. Thanks for riding along. Make your own 2026 wrap at pixelprince.dev/wrapped. Find your next event at londondesignguide.co.uk."
      stripe={
        <div className="wrap-draw-x" aria-hidden="true" style={{ height: 10, display: "grid", gridTemplateColumns: `repeat(${ALL_LINES.length}, minmax(0, 1fr))` }}>
          {ALL_LINES.map((colour) => (
            <div key={colour} style={{ background: colour }} />
          ))}
        </div>
      }
      chip="ALL LINES · TERMINUS"
      chipBg="var(--wrap-chip-bg, #ffffff)"
      chipInk="var(--wrap-chip-ink, #121212)"
    >
      <Board style={{ margin: "20px 30px 0", padding: "14px 18px", gap: 10 }}>
        <div style={{ fontSize: 24, lineHeight: 1 }}>THIS TRAIN TERMINATES AT 2027</div>
        <div className="wrap-blink" style={{ fontSize: 24, lineHeight: 1 }}>ALL CHANGE · ALL CHANGE</div>
      </Board>
      <h2 className="wrap-rise" style={headline(84, { padding: "24px 30px 0", lineHeight: 0.88, ...delay(500) })}>
        End of
        <br />
        the line.
      </h2>
      <p className="wrap-rise" style={body({ ...delay(650) })}>Thanks for riding along. See you on the platform.</p>
      <div className="wrap-rise" style={{ margin: "20px 30px 0", display: "flex", flexDirection: "column", gap: 10, ...delay(850) }}>
        <div style={{ background: "var(--wrap-cta-bg, #ffffff)", color: "var(--wrap-cta-ink, #121212)", borderRadius: 8, padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
            <span style={{ ...mono(11, { letterSpacing: "0.12em" }), color: "var(--wrap-cta-label, #4a4a4a)" }}>MAKE YOUR OWN 2026 WRAP</span>
            <span style={{ fontSize: 22, fontWeight: 800 }}>pixelprince.dev/wrapped</span>
          </div>
          <Arrow size={26} />
        </div>
        <span style={{ fontSize: 15, fontWeight: 500, color: C.muted }}>
          Find your next event at <span style={{ color: C.ink, fontWeight: 700 }}>londondesignguide.co.uk</span>
        </span>
      </div>
    </Frame>
  );
}
