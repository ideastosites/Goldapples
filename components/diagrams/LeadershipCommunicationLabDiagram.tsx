const stages = [
  { label: "Scenario", angle: -90 },
  { label: "Practice", angle: 0 },
  { label: "Feedback", angle: 90 },
  { label: "Refine", angle: 180 },
];

export function LeadershipCommunicationLabDiagram() {
  const cx = 260;
  const cy = 70;
  const r = 34;
  const labelOffset = 22;

  return (
    <svg
      viewBox="0 0 520 140"
      className="w-full"
      role="img"
      aria-label="Diagram: a repeating cycle of scenario, practice, feedback and refine."
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="#12100D"
        strokeWidth="1.5"
        opacity={0.5}
        fill="none"
      />
      {stages.map((stage) => {
        const rad = (stage.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        
        let labelX = x;
        let labelY = y;
        let anchor: "middle" | "start" | "end" = "middle";

        if (stage.angle === 0) { // Practice (right)
          labelX = x + 14;
          labelY = y + 4;
          anchor = "start";
        } else if (stage.angle === 180) { // Refine (left)
          labelX = x - 14;
          labelY = y + 4;
          anchor = "end";
        } else if (stage.angle === -90) { // Scenario (top)
          labelY = y - 12;
          anchor = "middle";
        } else if (stage.angle === 90) { // Feedback (bottom)
          labelY = y + 18;
          anchor = "middle";
        }

        return (
          <g key={stage.label}>
            <circle cx={x} cy={y} r="6" stroke="#B98F3E" strokeWidth="1.5" fill="white" />
            <text
              x={labelX}
              y={labelY}
              textAnchor={anchor}
              className="fill-ink font-sans text-[11px] font-medium"
            >
              {stage.label}
            </text>
          </g>
        );
      })}
      <path
        d={`M ${cx + r} ${cy - 6} A 6 6 0 0 1 ${cx + r + 2} ${cy + 6}`}
        stroke="#B98F3E"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
