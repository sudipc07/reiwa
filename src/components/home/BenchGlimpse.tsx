'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, animate, useReducedMotion } from 'framer-motion';
import { advisors } from '@/data/advisors';

export default function BenchGlimpse() {
  const trackRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  const items = [...advisors, ...advisors];

  useEffect(() => {
    if (shouldReduce || !trackRef.current) return;

    const track = trackRef.current;
    const halfW = track.scrollWidth / 2;

    controlsRef.current = animate(track, { x: [0, -halfW] }, {
      duration: 50,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    });

    return () => controlsRef.current?.stop();
  }, [shouldReduce]);

  useEffect(() => {
    if (!controlsRef.current) return;
    if (isHovered) {
      controlsRef.current.pause();
    } else {
      controlsRef.current.play();
    }
  }, [isHovered]);

  const chipStyle: React.CSSProperties = {
    flexShrink: 0,
    width: '140px',
    padding: '1.25rem 1rem',
    background: 'var(--surface)',
    backdropFilter: 'blur(20px) saturate(1.1)',
    WebkitBackdropFilter: 'blur(20px) saturate(1.1)',
    border: '1px solid var(--border)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    textAlign: 'center',
  };

  const initialsStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'rgba(192,57,43,0.08)',
    border: '1px solid rgba(192,57,43,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Noto Serif, serif',
    fontWeight: 600,
    fontSize: '0.875rem',
    color: 'var(--accent)',
  };

  return (
    <div>
      {/* Accessible text list (visually hidden) */}
      <ul style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
        {advisors.map(a => <li key={a.id}>{a.name}, {a.title}</li>)}
      </ul>

      <div
        aria-hidden="true"
        style={{ overflow: 'hidden', position: 'relative', cursor: 'default' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edge fade masks */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, var(--canvas), transparent)', zIndex: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, var(--canvas), transparent)', zIndex: 1, pointerEvents: 'none' }} />

        {shouldReduce ? (
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '1rem 0', scrollbarWidth: 'none' }}>
            {advisors.map(advisor => (
              <div key={advisor.id} style={chipStyle}>
                {advisor.photo ? (
                  <img src={advisor.photo} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : (
                  <div style={initialsStyle}>{advisor.initials}</div>
                )}
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>{advisor.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem 0', width: 'max-content' }} ref={trackRef}>
            {items.map((advisor, i) => (
              <div key={`${advisor.id}-${i}`} style={chipStyle}>
                {advisor.photo ? (
                  <img src={advisor.photo} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }} />
                ) : (
                  <div style={initialsStyle}>{advisor.initials}</div>
                )}
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>{advisor.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
