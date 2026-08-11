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
        const labelX = cx + (r + labelOffset) * Math.cos(rad);
        const labelY = cy + (r + labelOffset) * Math.sin(rad);
        return (
          <g key={stage.label}>
            <circle cx={x} cy={y} r="6" stroke="#B98F3E" strokeWidth="1.5" fill="white" />
            <text
              x={labelX}
              y={labelY + 4}
              textAnchor="middle"
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
