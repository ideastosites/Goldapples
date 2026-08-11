export function Eyebrow({
  children,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "gold" | "champagne";
  className?: string;
}) {
  const color = tone === "gold" ? "text-gold-deep" : "text-gold";
  return (
    <p
      className={`font-mono text-xs font-semibold tracking-[0.16em] uppercase ${color} ${className}`}
    >
      {children}
    </p>
  );
}
