'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
import { clients } from '@/data/clients';

export default function LogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  const items = [...clients, ...clients];

  useEffect(() => {
    if (shouldReduce || !trackRef.current) return;
    const track = trackRef.current;
    const halfW = track.scrollWidth / 2;

    controlsRef.current = animate(track, { x: [0, -halfW] }, {
      duration: 45,
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

  const logoStyle: React.CSSProperties = {
    flexShrink: 0,
    height: '42px',
    width: 'auto',
    maxWidth: '130px',
    objectFit: 'contain',
    filter: 'grayscale(1) contrast(0.9)',
    opacity: 0.6,
    transition: 'opacity 240ms ease, filter 240ms ease',
  };

  return (
    <div>
      {/* Accessible list */}
      <ul style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
        {clients.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>

      <div
        aria-hidden="true"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          overflow: 'hidden',
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent 0, black 100px, black calc(100% - 100px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 100px, black calc(100% - 100px), transparent 100%)',
        }}
      >

        {shouldReduce ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', padding: '1rem 0' }}>
            {clients.map(client => (
              <img key={client.id} src={client.logo} alt={client.name} style={logoStyle} />
            ))}
          </div>
        ) : (
          <div
            ref={trackRef}
            style={{ display: 'flex', alignItems: 'center', gap: '3.5rem', padding: '1.5rem 0', width: 'max-content' }}
          >
            {items.map((client, i) => (
              <img
                key={`${client.id}-${i}`}
                src={client.logo}
                alt={client.name}
                style={logoStyle}
                onMouseOver={e => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = '1';
                  el.style.filter = 'grayscale(0) contrast(1)';
                }}
                onMouseOut={e => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = '0.6';
                  el.style.filter = 'grayscale(1) contrast(0.9)';
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
