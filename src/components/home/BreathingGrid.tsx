'use client';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function BreathingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const pulseRef = useRef(0);
  const rafRef = useRef<number>(0);
  const shouldReduce = useReducedMotion();

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  useEffect(() => {
    if (shouldReduce || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL = 44;
    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    let lastPulseTime = 0;
    const PULSE_INTERVAL = 6000;

    function draw(timestamp: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Pulse phase
      if (timestamp - lastPulseTime > PULSE_INTERVAL) {
        lastPulseTime = timestamp;
        pulseRef.current = timestamp;
      }
      const elapsed = timestamp - pulseRef.current;
      const pulseOpacity = elapsed < 1200
        ? 0.04 + 0.04 * Math.sin((elapsed / 1200) * Math.PI)
        : 0.04;

      const cols = Math.ceil(width / CELL) + 1;
      const rows = Math.ceil(height / CELL) + 1;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw grid lines
      ctx.strokeStyle = `rgba(26, 39, 64, ${pulseOpacity})`;
      ctx.lineWidth = 1;
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * CELL, 0);
        ctx.lineTo(c * CELL, height);
        ctx.stroke();
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * CELL);
        ctx.lineTo(width, r * CELL);
        ctx.stroke();
      }

      // Draw cursor proximity glow on intersections
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const px = c * CELL;
          const py = r * CELL;
          const dist = Math.hypot(px - mx, py - my);
          if (dist < 150) {
            const intensity = (1 - dist / 150) * 0.18;
            ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
            ctx.fillRect(px - 1, py - 1, 2, 2);
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouse);
      ro.disconnect();
    };
  }, [shouldReduce, isMobile]);

  if (shouldReduce) return null;

  if (isMobile) {
    return (
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(192,57,43,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 65%, rgba(192,57,43,0.03) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-drift 14s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  );
}
