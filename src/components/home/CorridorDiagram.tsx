'use client';
import { motion, useReducedMotion } from 'framer-motion';

const nodes = [
  { id: 'tokyo', label: 'Tokyo', x: 75, y: 30 },
  { id: 'delhi', label: 'New Delhi · Mumbai', x: 20, y: 75 },
  { id: 'sea', label: 'Singapore · SEA', x: 75, y: 80 },
];

export default function CorridorDiagram() {
  const shouldReduce = useReducedMotion();

  const pulseVariants = {
    animate: (i: number) => ({
      r: [5, 8, 5],
      opacity: [0.5, 0.9, 0.5],
      transition: {
        duration: 2,
        delay: i * 2,
        repeat: Infinity,
        repeatDelay: 4,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div style={{ maxWidth: '360px', margin: '2.5rem 0' }} aria-hidden="true">
      <svg viewBox="0 0 100 110" style={{ width: '100%', overflow: 'visible' }}>
        {/* Curved connection lines */}
        <path
          d="M75,30 C60,30 40,50 20,75"
          fill="none"
          stroke="#C0392B"
          strokeWidth="0.5"
          opacity="0.25"
          strokeDasharray="2,3"
        />
        <path
          d="M20,75 C45,70 60,75 75,80"
          fill="none"
          stroke="#C0392B"
          strokeWidth="0.5"
          opacity="0.25"
          strokeDasharray="2,3"
        />
        <path
          d="M75,30 C80,50 80,65 75,80"
          fill="none"
          stroke="#C0392B"
          strokeWidth="0.5"
          opacity="0.25"
          strokeDasharray="2,3"
        />

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Outer ring */}
            <circle cx={node.x} cy={node.y} r="9" fill="none" stroke="#C0392B" strokeWidth="0.4" opacity="0.15" />
            {/* Animated inner node */}
            {shouldReduce ? (
              <circle cx={node.x} cy={node.y} r="5" fill="#C0392B" opacity="0.5" />
            ) : (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill="#C0392B"
                custom={i}
                animate="animate"
                variants={pulseVariants}
              />
            )}
          </g>
        ))}

        {/* Labels */}
        {nodes.map(node => (
          <text
            key={`label-${node.id}`}
            x={node.id === 'delhi' ? node.x + 12 : node.x + 12}
            y={node.y + 1}
            fontSize="5"
            fontFamily="Inter, sans-serif"
            fill="#7A7A7A"
            letterSpacing="0.05em"
            dominantBaseline="middle"
          >
            {node.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
