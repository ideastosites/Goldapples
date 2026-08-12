import Image from "next/image";

type Tone = "ink-gold" | "ink" | "gold";

const overlays: Record<Tone, string> = {
  "ink-gold": "bg-linear-to-br from-ink/90 via-ink/40 to-gold-deep/70",
  ink: "bg-ink/55",
  gold: "bg-linear-to-br from-gold-deep/70 to-gold/40",
};

/**
 * Keeps real (placeholder) photography on-palette per design.md §7: a
 * grayscale base photo with an in-palette color-blend overlay, so any photo
 * reads as Ink/Gold rather than competing with the rest of the page.
 */
export function DuotonePhoto({
  src,
  alt,
  tone = "ink-gold",
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  tone?: Tone;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover grayscale"
      />
      <div className={`absolute inset-0 mix-blend-color ${overlays[tone]}`} />
      <div className="bg-ink/10 absolute inset-0" />
    </div>
  );
}
