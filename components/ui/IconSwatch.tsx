import type { ComponentType, SVGProps } from "react";

type Tone = "ink" | "gold" | "champagne" | "outline-light" | "outline-dark";

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink text-white",
  gold: "bg-linear-to-br from-gold-deep to-gold text-ink",
  champagne: "bg-champagne text-ink",
  "outline-light": "border border-white/30 text-white",
  "outline-dark": "border border-ink/15 text-ink",
};

export function IconSwatch({
  icon: Icon,
  tone = "outline-dark",
  className = "",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] ${toneClasses[tone]} ${className}`}
    >
      <Icon width={22} height={22} />
    </span>
  );
}
