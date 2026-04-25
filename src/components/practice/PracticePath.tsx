'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

/**
 * PracticePath — Vision · Mission · Values laid along a vertical "way".
 *
 * Scroll-progress through this section drives:
 *  - the path-fill (a bright-red overlay growing top-to-bottom along the
 *    hairline)
 *  - a small travelling packet that drops down the line as the user
 *    scrolls
 *  - station nodes that "light up" (scale + halo) as the packet arrives
 *
 * Echoes the corridor packets in BreathingGrid / CorridorDiagram so the
 * motion vocabulary stays consistent across the site.
 *
 * Reduced-motion: path fill is full, packet hidden, nodes static.
 */

export interface Station {
  id: string;
  kicker: string;
  italic: string;
  body: string;
  kanji: string; // single CJK char
}

interface Props {
  sectionTitle: string;
  sectionItalic: string;
  stations: [Station, Station, Station];
}

export default function PracticePath({
  sectionTitle,
  sectionItalic,
  stations,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Map scroll position relative to the section into a 0→1 progress signal.
  // offset [start end, end start] starts at 0 when section top hits viewport
  // bottom and reaches 1 when section bottom hits viewport top.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const pathScaleRaw = useTransform(scrollYProgress, [0.05, 0.75], [0, 1]);
  const pathScale = reduce ? 1 : pathScaleRaw;

  const packetTopRaw = useTransform(scrollYProgress, [0.05, 0.95], ['6%', '94%']);
  const packetTop = reduce ? '50%' : packetTopRaw;
  const packetOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.04, 0.96, 1],
    [0, 1, 1, 0],
  );
  const packetOpacity = reduce ? 0 : packetOpacityRaw;

  const node0 = nodeTransforms(scrollYProgress, 0.18, reduce);
  const node1 = nodeTransforms(scrollYProgress, 0.5, reduce);
  const node2 = nodeTransforms(scrollYProgress, 0.82, reduce);
  const nodes = [node0, node1, node2];

  return (
    <section ref={sectionRef} className="vmv-section">
      <div className="container-narrow vmv-inner">

        <header className="vmv-header">
          <p className="vmv-kicker">
            <span className="vmv-kicker-dot" aria-hidden="true"></span>
            {sectionTitle}
          </p>
          <h2 className="vmv-headline">
            <em>{sectionItalic}</em>
          </h2>
        </header>

        <div className="vmv-grid">
          {/* Rail spans the middle column for all rows */}
          <div className="vmv-rail" aria-hidden="true">
            <div className="vmv-rail-line" />
            <motion.div
              className="vmv-rail-fill"
              style={{ scaleY: pathScale }}
            />
            {/* Static node anchors — three positions matched to station rows */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="vmv-node-anchor"
                style={{ top: `${[18, 50, 82][i]}%` }}
              >
                <div className="vmv-node-ring" />
                <motion.div
                  className="vmv-node-dot"
                  style={{
                    scale: nodes[i].scale,
                    opacity: nodes[i].opacity,
                  }}
                />
                <motion.div
                  className="vmv-node-halo"
                  style={{
                    scale: nodes[i].haloScale,
                    opacity: nodes[i].haloOpacity,
                  }}
                />
              </div>
            ))}
            {/* Travelling packet */}
            <motion.div
              className="vmv-packet"
              style={{ top: packetTop, opacity: packetOpacity }}
            >
              <span className="vmv-packet-dot" />
              <span className="vmv-packet-halo" />
            </motion.div>
          </div>

          {/* Stations — kanji and content laid out in flat grid cells */}
          {stations.map((s, i) => (
            <div
              key={s.id}
              className="vmv-station"
              style={{ ['--row' as string]: i + 1 }}
            >
              <div className="vmv-station-kanji" aria-hidden="true">
                {s.kanji}
              </div>
              <div className="vmv-station-content">
                <p className="vmv-station-kicker">{s.kicker}</p>
                <h3 className="vmv-station-italic">
                  <em>{s.italic}</em>
                </h3>
                <p className="vmv-station-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{styles}</style>
    </section>
  );
}

/** Map scrollYProgress to a node's lit-state transforms. */
function nodeTransforms(
  progress: ReturnType<typeof useScroll>['scrollYProgress'],
  centre: number,
  reduce: boolean | null,
) {
  const before = centre - 0.08;
  const peak = centre;
  const after = centre + 0.08;

  const scaleRaw = useTransform(
    progress,
    [before, peak, after, 1],
    [1, 1.6, 1.15, 1.15],
  );
  const opacityRaw = useTransform(
    progress,
    [before, peak, after],
    [0.4, 1, 0.85],
  );
  const haloScaleRaw = useTransform(
    progress,
    [before, peak, after],
    [0.6, 1.6, 1],
  );
  const haloOpacityRaw = useTransform(
    progress,
    [before, peak, after],
    [0, 0.55, 0.25],
  );

  if (reduce) {
    return { scale: 1.15, opacity: 0.85, haloScale: 1, haloOpacity: 0.25 };
  }
  return {
    scale: scaleRaw,
    opacity: opacityRaw,
    haloScale: haloScaleRaw,
    haloOpacity: haloOpacityRaw,
  };
}

const styles = `
  .vmv-section {
    position: relative;
    background: var(--canvas);
    border-top: 1px solid var(--border);
    padding-top: clamp(5rem, 10vw, 8.5rem);
    padding-bottom: clamp(5rem, 10vw, 8.5rem);
  }

  .vmv-inner { position: relative; }

  .vmv-header {
    margin-bottom: clamp(3.5rem, 7vw, 6rem);
    max-width: 36rem;
  }

  .vmv-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-subtle);
    margin: 0 0 1.5rem;
  }

  .vmv-kicker-dot {
    width: 7px;
    height: 7px;
    background: var(--accent);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .vmv-headline {
    font-family: 'Noto Serif', serif;
    font-size: clamp(1.5rem, 3.4vw, 2.75rem);
    font-weight: 600;
    color: var(--ink);
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .vmv-headline em {
    font-style: italic;
    font-weight: 400;
    color: var(--ink-muted);
  }

  /* Mobile-first: single column. Kanji above content. No rail. */
  .vmv-grid {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: clamp(3rem, 6vw, 5rem);
  }

  .vmv-rail { display: none; }

  .vmv-station {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .vmv-station-kanji {
    font-family: 'Noto Serif TC', 'Noto Serif', serif;
    font-weight: 600;
    font-size: clamp(4rem, 12vw, 6rem);
    line-height: 0.9;
    color: var(--accent);
    opacity: 0.18;
    user-select: none;
    letter-spacing: 0;
  }

  .vmv-station-content {
    max-width: 48ch;
  }

  .vmv-station-kicker {
    font-family: 'Inter', sans-serif;
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-subtle);
    margin: 0 0 0.875rem;
  }

  .vmv-station-italic {
    font-family: 'Noto Serif', serif;
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.25rem, 2.4vw, 1.875rem);
    color: var(--ink);
    margin: 0 0 1.25rem;
    letter-spacing: -0.018em;
    line-height: 1.3;
  }

  .vmv-station-italic em { font-style: italic; }

  .vmv-station-body {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--ink-muted);
    line-height: 1.78;
    margin: 0;
  }

  /* Desktop: 3-column grid (kanji | rail | content), rail spans all rows */
  @media (min-width: 860px) {
    .vmv-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 2px minmax(0, 1.4fr);
      column-gap: clamp(3rem, 6vw, 5rem);
      row-gap: clamp(4rem, 8vw, 7rem);
    }

    .vmv-rail {
      display: block;
      position: relative;
      grid-column: 2;
      grid-row: 1 / span 3;
      width: 2px;
      align-self: stretch;
    }

    .vmv-rail-line,
    .vmv-rail-fill {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
    }

    .vmv-rail-line { background: rgba(192, 57, 43, 0.18); }

    .vmv-rail-fill {
      background: var(--accent);
      transform-origin: top center;
      will-change: transform;
    }

    .vmv-node-anchor {
      position: absolute;
      left: 0;
    }

    .vmv-node-ring {
      position: absolute;
      width: 14px;
      height: 14px;
      left: -7px;
      top: -7px;
      border: 1px solid rgba(192, 57, 43, 0.4);
      border-radius: 50%;
    }

    .vmv-node-dot {
      position: absolute;
      width: 6px;
      height: 6px;
      left: -3px;
      top: -3px;
      background: var(--accent);
      border-radius: 50%;
      will-change: transform, opacity;
    }

    .vmv-node-halo {
      position: absolute;
      width: 28px;
      height: 28px;
      left: -14px;
      top: -14px;
      background: radial-gradient(circle, rgba(192,57,43,0.5) 0%, rgba(192,57,43,0) 70%);
      border-radius: 50%;
      pointer-events: none;
      will-change: transform, opacity;
    }

    .vmv-packet {
      position: absolute;
      left: 0;
      pointer-events: none;
      will-change: top, opacity;
    }

    .vmv-packet-dot {
      position: absolute;
      left: -3px;
      top: -3px;
      width: 6px;
      height: 6px;
      background: var(--accent);
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(192, 57, 43, 0.3);
    }

    .vmv-packet-halo {
      position: absolute;
      left: -16px;
      top: -16px;
      width: 32px;
      height: 32px;
      background: radial-gradient(circle, rgba(192,57,43,0.55) 0%, rgba(192,57,43,0) 65%);
      border-radius: 50%;
      pointer-events: none;
    }

    /* Each station spans all 3 columns; its inner items go to col 1 (kanji)
       and col 3 (content). Use a nested grid so we can place kanji at col 1
       and content at col 3 while the rail's grid item sits at col 2. */
    .vmv-station {
      grid-column: 1 / -1;
      grid-row: var(--row);
      display: grid;
      grid-template-columns: subgrid;
      gap: 0;
      align-items: center;
    }

    .vmv-station-kanji {
      grid-column: 1;
      justify-self: end;
      text-align: right;
      font-size: clamp(5rem, 10vw, 8rem);
      opacity: 0.14;
    }

    .vmv-station-content {
      grid-column: 3;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vmv-rail-fill,
    .vmv-node-dot,
    .vmv-node-halo,
    .vmv-packet { transition: none !important; animation: none !important; }
  }
`;
