'use client';
import { useReducedMotion } from 'framer-motion';

/**
 * Corridor diagram — three cities, hairline arcs, slow pulsing anchors,
 * one travelling dash on each arc. SVG-based; pure CSS animations so
 * Framer Motion isn't needed.
 *
 * Canvas is 560 × 320 (16:9-ish), but it scales responsively.
 */
const cities = [
  { id: 'tokyo',     label: 'Tokyo',               x: 430, y: 90,  align: 'middle', offset: [0, -22] },
  { id: 'delhi',     label: 'New Delhi · Mumbai',  x: 140, y: 190, align: 'middle', offset: [0, 28] },
  { id: 'singapore', label: 'Singapore · SEA',     x: 420, y: 260, align: 'middle', offset: [0, 28] },
];

const arcs = [
  { d: 'M 430 90 Q 280 110 140 190', id: 'a1' },
  { d: 'M 140 190 Q 280 260 420 260', id: 'a2' },
  { d: 'M 430 90 Q 500 180 420 260', id: 'a3' },
];

export default function CorridorDiagram() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="corridor-wrap" aria-hidden="true">
      <svg viewBox="0 0 560 320" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
        <defs>
          <radialGradient id="node-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#C0392B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C0392B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Region label */}
        <text
          x="280"
          y="28"
          textAnchor="middle"
          fontSize="18"
          fontWeight="500"
          fontFamily="Inter, sans-serif"
          fill="#7A7A7A"
          letterSpacing="0.22em"
          style={{ textTransform: 'uppercase' }}
        >
          The Corridor
        </text>

        {/* Horizontal scale axis */}
        <line x1="60" y1="300" x2="500" y2="300" stroke="#16161A" strokeWidth="0.5" opacity="0.14" />
        <line x1="60" y1="296" x2="60" y2="304" stroke="#16161A" strokeWidth="0.5" opacity="0.3" />
        <line x1="500" y1="296" x2="500" y2="304" stroke="#16161A" strokeWidth="0.5" opacity="0.3" />
        <text x="60" y="320" fontSize="14" fontFamily="Inter, sans-serif" fill="#7A7A7A" letterSpacing="0.12em">West</text>
        <text x="500" y="320" textAnchor="end" fontSize="14" fontFamily="Inter, sans-serif" fill="#7A7A7A" letterSpacing="0.12em">East</text>

        {/* Arc base lines */}
        {arcs.map(arc => (
          <path
            key={arc.id}
            d={arc.d}
            fill="none"
            stroke="#C0392B"
            strokeOpacity="0.22"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        ))}

        {/* Arc travelling packets — a short bright dash moving along the path */}
        {!shouldReduce && arcs.map((arc, i) => (
          <path
            key={`packet-${arc.id}`}
            d={arc.d}
            fill="none"
            stroke="#C0392B"
            strokeOpacity="0.9"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="3 600"
            style={{
              animation: `corridor-flow ${18 + i * 3}s linear infinite`,
              animationDelay: `${i * 4}s`,
            }}
          />
        ))}

        {/* City halos + nodes */}
        {cities.map((c, i) => (
          <g key={c.id}>
            <circle cx={c.x} cy={c.y} r="16" fill="url(#node-halo)" />
            <circle cx={c.x} cy={c.y} r="9" fill="none" stroke="#C0392B" strokeOpacity="0.22" strokeWidth="0.6" />
            {shouldReduce ? (
              <circle cx={c.x} cy={c.y} r="5" fill="#C0392B" opacity="0.75" />
            ) : (
              <circle
                cx={c.x}
                cy={c.y}
                r="5"
                fill="#C0392B"
                style={{
                  transformOrigin: `${c.x}px ${c.y}px`,
                  animation: `node-pulse 5.4s ease-in-out infinite`,
                  animationDelay: `${i * 1.8}s`,
                }}
              />
            )}
            <text
              x={c.x + c.offset[0]}
              y={c.y + c.offset[1]}
              fontSize="20"
              fontWeight="500"
              fontFamily="Inter, sans-serif"
              fill="#1A1A1A"
              textAnchor={c.align as any}
              letterSpacing="0.01em"
              dominantBaseline="middle"
            >
              {c.label}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes corridor-flow {
          0%   { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes node-pulse {
          0%, 100% { transform: scale(1);   opacity: 0.85; }
          50%      { transform: scale(1.4); opacity: 1;    }
        }
      `}</style>
    </div>
  );
}
