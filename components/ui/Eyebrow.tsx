export function Eyebrow({
  children,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "gold" | "champagne";
  className?: string;
}) {
  const textColor = tone === "gold" ? "text-graphite" : "text-champagne";
  return (
    <p
      className={`flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.16em] uppercase ${textColor} ${className}`}
    >
      <span
        aria-hidden="true"
        className="bg-gold-deep inline-block h-1.5 w-1.5 rounded-full"
      />
      {children}
    </p>
  );
}
