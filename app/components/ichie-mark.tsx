type IchieMarkProps = {
  compact?: boolean;
};

export function IchieMark({ compact = false }: IchieMarkProps) {
  return (
    <div
      role="img"
      aria-label="Ichie, 一期一会"
      className="relative isolate flex h-full w-full items-center justify-center overflow-hidden bg-[#0A0A0B]"
    >
      <div
        aria-hidden="true"
        className={`absolute rounded-full opacity-80 ${compact ? "h-12 w-12" : "h-[300px] w-[300px]"}`}
        style={{
          background:
            "radial-gradient(circle, rgba(124,116,224,.55) 0%, rgba(83,74,183,.34) 42%, transparent 72%), radial-gradient(circle, rgba(50,36,71,.65) 0%, transparent 70%)",
          filter: compact ? "blur(10px)" : "blur(30px)",
        }}
      />
      <div className="relative flex flex-col items-center">
        <span
          lang="ja"
          translate="no"
          className={`select-none text-white [text-shadow:0_0_12px_rgba(255,255,255,.18)] ${compact ? "text-[8px] tracking-[0.12em]" : "text-[30px] tracking-[0.2em]"}`}
          style={{ fontFamily: "Lora, Georgia, serif" }}
        >
          一期一会
        </span>
        <span
          className={`font-mono uppercase text-[#A1A1A1] ${compact ? "mt-1 text-[5px] tracking-[0.12em]" : "mt-3 text-xs tracking-[0.12em]"}`}
        >
          ichie
        </span>
      </div>
    </div>
  );
}
