'use client';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * CorridorLines — the hero's living backdrop.
 *
 * Three hairline arcs connecting Tokyo → Delhi/Mumbai → Singapore.
 * On each arc, a single small packet travels slowly (20s+ per cycle),
 * punctuated by a slow breathing pulse.
 *
 * Mobile / reduced-motion: gentle static gradient, no canvas, no motion.
 */
export default function CorridorLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const shouldReduce = useReducedMotion();

  const isMobile =
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  useEffect(() => {
    if (shouldReduce || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let W = 0;
    let H = 0;

    function resize() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Normalised arc endpoints (0–1) — visual composition, not literal geography.
    // Tokyo top-right → Delhi/Mumbai mid-left → Singapore bottom-right.
    const arcs = [
      // Tokyo → Delhi
      { a: [0.78, 0.22], b: [0.22, 0.58], c: [0.44, 0.30] },
      // Delhi → Singapore
      { a: [0.22, 0.58], b: [0.76, 0.82], c: [0.58, 0.84] },
      // Tokyo → Singapore (long diagonal, bowed out)
      { a: [0.78, 0.22], b: [0.76, 0.82], c: [0.92, 0.52] },
    ];

    // Anchor city dots
    const cities = [
      [0.78, 0.22],
      [0.22, 0.58],
      [0.76, 0.82],
    ];

    const quadPoint = (t: number, a: number[], c: number[], b: number[]) => {
      const u = 1 - t;
      return [
        u * u * a[0] + 2 * u * t * c[0] + t * t * b[0],
        u * u * a[1] + 2 * u * t * c[1] + t * t * b[1],
      ];
    };

    const startTime = performance.now();

    function draw(now: number) {
      if (!ctx) return;
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, W, H);

      // Slow breathing — 0.85 → 1.0 → 0.85 over 8s
      const breath = 0.85 + 0.15 * (Math.sin((elapsed * Math.PI * 2) / 8) * 0.5 + 0.5);

      // Arcs
      arcs.forEach((arc, i) => {
        const [ax, ay] = [arc.a[0] * W, arc.a[1] * H];
        const [bx, by] = [arc.b[0] * W, arc.b[1] * H];
        const [cx, cy] = [arc.c[0] * W, arc.c[1] * H];

        // Base line
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(cx, cy, bx, by);
        ctx.strokeStyle = `rgba(192, 57, 43, ${0.1 * breath})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();

        // Travelling packet — one per arc, phased
        const period = 22 + i * 4;
        const t = ((elapsed + i * period * 0.33) % period) / period;
        if (t > 0.02 && t < 0.98) {
          const [px, py] = quadPoint(t, [ax, ay], [cx, cy], [bx, by]);

          // Trailing fade — a few prior points at reduced opacity
          for (let s = 0; s < 8; s++) {
            const tt = t - s * 0.012;
            if (tt < 0) break;
            const [tx, ty] = quadPoint(
              tt,
              [ax, ay],
              [cx, cy],
              [bx, by],
            );
            const alpha = (1 - s / 8) * 0.55;
            ctx.beginPath();
            ctx.arc(tx, ty, 1.6 - s * 0.12, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(192, 57, 43, ${alpha})`;
            ctx.fill();
          }

          // Head
          ctx.beginPath();
          ctx.arc(px, py, 2.4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(192, 57, 43, 0.95)';
          ctx.fill();

          // Soft halo
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 14);
          grad.addColorStop(0, 'rgba(192, 57, 43, 0.25)');
          grad.addColorStop(1, 'rgba(192, 57, 43, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 14, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // City anchor dots (still, with breathing ring)
      cities.forEach(([nx, ny]) => {
        const x = nx * W;
        const y = ny * H;

        // Ring
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(192, 57, 43, ${0.16 * breath})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Dot
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(192, 57, 43, 0.45)';
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [shouldReduce, isMobile]);

  if (shouldReduce) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(ellipse at 78% 22%, rgba(192,57,43,0.05) 0%, transparent 45%), radial-gradient(ellipse at 22% 58%, rgba(192,57,43,0.04) 0%, transparent 45%), radial-gradient(ellipse at 76% 82%, rgba(192,57,43,0.04) 0%, transparent 45%)',
        }}
      />
    );
  }

  if (isMobile) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(ellipse at 78% 22%, rgba(192,57,43,0.06) 0%, transparent 50%), radial-gradient(ellipse at 22% 58%, rgba(192,57,43,0.05) 0%, transparent 50%), radial-gradient(ellipse at 76% 82%, rgba(192,57,43,0.05) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-drift 18s ease-in-out infinite',
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
