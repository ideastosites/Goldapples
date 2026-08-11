const lanes = ["Intent", "Message", "Behaviour", "Execution"];

export function LeadershipAlignmentDiagram() {
  return (
    <svg
      viewBox="0 0 520 140"
      className="w-full"
      role="img"
      aria-label="Diagram: four parallel lanes — intent, message, behaviour, execution — moving in the same aligned direction."
    >
      {lanes.map((lane, i) => {
        const y = 20 + i * 28;
        return (
          <g key={lane}>
            <line
              x1="70"
              y1={y}
              x2="460"
              y2={y}
              stroke="#12100D"
              strokeWidth="1.5"
              opacity={0.55}
            />
            <path
              d={`M452 ${y - 5} L462 ${y} L452 ${y + 5}`}
              stroke="#B98F3E"
              strokeWidth="1.5"
              fill="none"
            />
            <text x="0" y={y + 4} className="fill-ink font-sans text-[11px] font-medium">
              {lane}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
