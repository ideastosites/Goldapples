/**
 * Abstract line-art motif (Ink + Gold, 1.5px stroke) standing in for a
 * framework's diagram at teaser scale — a signal travelling from a source
 * through a medium to an effect, echoing the Physics of Communication idea
 * that underlies all of Goldapples' frameworks. `variant` nudges the path
 * so the six teaser tiles on Home don't look identical; the Frameworks page
 * gets each framework's own bespoke diagram.
 */
export function FrameworkGlyph({
  variant = 0,
  className = "",
  dark = false,
}: {
  variant?: number;
  className?: string;
  dark?: boolean;
}) {
  const stroke = dark ? "#DFBE7E" : "#12100D";
  const accent = "#B98F3E";
  const wobble = (variant % 3) * 6 - 6;

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <circle cx="10" cy="32" r="5" stroke={stroke} strokeWidth="1.5" />
      <path
        d={`M15 32 Q 32 ${32 + wobble} 49 32`}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray={variant % 2 === 0 ? "0" : "2 3"}
      />
      <circle cx="54" cy="32" r="5" stroke={accent} strokeWidth="1.5" />
      <circle cx="54" cy="32" r="1.5" fill={accent} />
    </svg>
  );
}
