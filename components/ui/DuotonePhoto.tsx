import Image from "next/image";

type Tone = "ink-gold" | "ink" | "gold";

const overlays: Record<Tone, string> = {
  "ink-gold": "bg-gradient-to-br from-ink/90 via-ink/40 to-gold-deep/70",
  ink: "bg-ink/55",
  gold: "bg-gradient-to-br from-gold-deep/70 to-gold/40",
};

const placeholderBgs: Record<Tone, string> = {
  "ink-gold": "bg-gradient-to-br from-ink via-graphite to-ink",
  ink: "bg-gradient-to-br from-ink via-ink to-graphite",
  gold: "bg-gradient-to-br from-champagne via-gold/20 to-champagne",
};

/**
 * Keeps real (placeholder) photography on-palette per design.md §7.
 * Uses a subtle signal-motif overlay for placeholders so the page looks
 * authored and intentional before real photography arrives.
 */
export function DuotonePhoto({
  src,
  alt,
  tone = "ink-gold",
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src?: string;
  alt: string;
  tone?: Tone;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    const isLight = tone === "gold";
    const lineColor = isLight ? "text-gold-deep/30" : "text-gold-deep/20";
    
    return (
      <div className={`overflow-hidden relative ${placeholderBgs[tone]} ${className}`}>
        {/* Signal Motif Placeholder Graphic */}
        <div className={`absolute inset-0 flex items-center justify-center ${lineColor}`}>
          <svg viewBox="0 0 400 100" fill="none" className="w-full h-auto min-w-[200%] opacity-60 mix-blend-luminosity">
            <path 
              d="M0 50 L100 50 L120 20 L150 80 L180 30 L200 50 L400 50" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinejoin="round" 
              strokeLinecap="round" 
            />
            <circle cx="200" cy="50" r="3" fill="currentColor" />
          </svg>
        </div>
        
        {/* Clean mono label */}
        <div className="absolute bottom-4 right-4">
          <span className={`font-mono text-[9px] uppercase tracking-[0.25em] ${isLight ? "text-ink/40" : "text-white/20"}`}>
            Image Space
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
