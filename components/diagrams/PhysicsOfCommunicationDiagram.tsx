"use client";

import { useState } from "react";

const nodes = [
  { id: "source", x: 40, y: 90, label: "Source" },
  { id: "force", x: 144, y: 40, label: "Force" },
  { id: "medium", x: 248, y: 90, label: "Medium" },
  { id: "resistance", x: 352, y: 40, label: "Resistance" },
  { id: "distortion", x: 456, y: 90, label: "Distortion" },
  { id: "effect", x: 560, y: 40, label: "Effect" },
];

/**
 * The Physics of Communication chain — source, force, medium, resistance,
 * distortion, effect — as a bespoke line-art diagram. Per design.md §8, elements
 * highlight as the cursor passes near them; this doubles as an explanatory
 * device (desktop only, degrades to the static chain everywhere else).
 */
export function PhysicsOfCommunicationDiagram() {
  const [active, setActive] = useState<string | null>(null);

  function handleMove(event: React.MouseEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const scaleX = 620 / rect.width;
    const scaleY = 140 / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    let closest: string | null = null;
    let min = Infinity;
    for (const node of nodes) {
      const d = Math.hypot(node.x - x, node.y - y);
      if (d < min) {
        min = d;
        closest = node.id;
      }
    }
    setActive(min < 70 ? closest : null);
  }

  return (
    <svg
      viewBox="0 0 620 140"
      className="w-full"
      onMouseMove={handleMove}
      onMouseLeave={() => setActive(null)}
      role="img"
      aria-label="Diagram: a message travels from source, through force and medium, meeting resistance, to reach its effect on the audience."
    >
      {nodes.slice(0, -1).map((node, i) => {
        const next = nodes[i + 1];
        return (
          <line
            key={node.id}
            x1={node.x}
            y1={node.y}
            x2={next.x}
            y2={next.y}
            stroke="#12100D"
            strokeWidth="1.5"
            opacity={0.5}
          />
        );
      })}
      {nodes.map((node) => {
        const isActive = active === node.id;
        return (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={isActive ? 16 : 12}
              stroke={isActive ? "#B98F3E" : "#12100D"}
              strokeWidth="1.5"
              fill={isActive ? "#DFBE7E" : "white"}
              className="transition-all duration-150 ease-out"
            />
            <text
              x={node.x}
              y={node.y + 34}
              textAnchor="middle"
              className={`font-sans text-[11px] transition-colors duration-150 ${
                isActive ? "fill-ink font-semibold" : "fill-steel"
              }`}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
