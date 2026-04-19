'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
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
      duration: 60,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    });
    return () => controlsRef.current?.stop();
  }, [shouldReduce]);

  useEffect(() => {
    if (!controlsRef.current) return;
    if (isHovered) controlsRef.current.pause();
    else controlsRef.current.play();
  }, [isHovered]);

  const chip: React.CSSProperties = {
    flexShrink: 0,
    width: '172px',
    padding: '1.25rem 1rem 1.125rem',
    background: 'rgba(255,255,255,0.72)',
    backdropFilter: 'blur(18px) saturate(1.1)',
    WebkitBackdropFilter: 'blur(18px) saturate(1.1)',
    border: '1px solid rgba(22,22,26,0.08)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    textAlign: 'center',
    boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 6px 22px rgba(16,26,44,0.04)',
  };

  const photoBox: React.CSSProperties = {
    width: 56,
    height: 56,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    border: '1px solid rgba(22,22,26,0.08)',
    background: 'var(--accent-wash)',
  };

  const initials: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Noto Serif, serif',
    fontWeight: 600,
    fontSize: '1rem',
    color: 'var(--accent)',
  };

  const nameStyle: React.CSSProperties = {
    fontFamily: 'Noto Serif, serif',
    fontWeight: 600,
    fontSize: '0.875rem',
    color: 'var(--ink)',
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
  };

  const roleStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.625rem',
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--ink-subtle)',
  };

  const renderChip = (advisor: typeof advisors[number], key: string) => (
    <div key={key} style={chip}>
      <div style={photoBox}>
        {advisor.photo ? (
          <img
            src={advisor.photo}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <div style={initials}>{advisor.initials}</div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
        <span style={nameStyle}>{advisor.name}</span>
        <span style={roleStyle}>{advisor.role}</span>
      </div>
    </div>
  );

  return (
    <div>
      <ul
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
        }}
      >
        {advisors.map(a => (
          <li key={a.id}>{a.name}, {a.title}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          overflow: 'hidden',
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent 0, black 96px, black calc(100% - 96px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 96px, black calc(100% - 96px), transparent 100%)',
        }}
      >
        {shouldReduce ? (
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '1.25rem 1.5rem', scrollbarWidth: 'none' }}>
            {advisors.map(a => renderChip(a, a.id))}
          </div>
        ) : (
          <div
            ref={trackRef}
            style={{ display: 'flex', gap: '1rem', padding: '1.25rem 0', width: 'max-content' }}
          >
            {items.map((a, i) => renderChip(a, `${a.id}-${i}`))}
          </div>
        )}
      </div>
    </div>
  );
}
