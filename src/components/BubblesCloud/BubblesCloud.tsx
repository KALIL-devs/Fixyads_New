'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BubblesCloud.module.css';

interface Bubble {
  img: string;
  size: number;
  x: number;
  y: number;
  floatDuration: string;
  floatDelay: string;
}

const bubbleImages = [
  '/bubbles/analytics.png',
  '/bubbles/searchconsole.png',
  '/bubbles/trends.png',
  '/bubbles/tag.png',
  '/bubbles/lockerstudio.png',
  '/bubbles/gemini.png',
  '/bubbles/lighthouse.png',
  '/bubbles/aistudio.png',
  '/bubbles/notebook.png',
  // '/bubbles/googleads.png',
];

const FIXED_SIZE = 100;
const GAP = 20;

export default function BubblesCloud() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const generateBubbles = () => {
    const el = wrapperRef.current;
    if (!el) return;

    const width = el.offsetWidth;
    const height = el.offsetHeight;

    if (width < 50 || height < 50) return;

    const placed: Bubble[] = [];
    const maxAttempts = 300;

    for (let i = 0; i < bubbleImages.length; i++) {
      let placedSuccessfully = false;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const radius = FIXED_SIZE / 2;

        const x = Math.random() * (width - FIXED_SIZE) + radius;
        const y = Math.random() * (height - FIXED_SIZE) + radius;

        let collision = false;

        for (const b of placed) {
          const dx = x - b.x;
          const dy = y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const minDistance = radius + b.size / 2 + GAP;

          if (distance < minDistance) {
            collision = true;
            break;
          }
        }

        if (!collision) {
          placed.push({
            img: bubbleImages[i],
            size: FIXED_SIZE,
            x,
            y,
            floatDuration: `${Math.random() * 4 + 6}s`,
            floatDelay: `${Math.random() * 2}s`,
          });

          placedSuccessfully = true;
          break;
        }
      }

      if (!placedSuccessfully) {
        const radius = FIXED_SIZE / 2;

        placed.push({
          img: bubbleImages[i],
          size: FIXED_SIZE,
          x: Math.random() * (width - FIXED_SIZE) + radius,
          y: Math.random() * (height - FIXED_SIZE) + radius,
          floatDuration: `${Math.random() * 4 + 6}s`,
          floatDelay: `${Math.random() * 2}s`,
        });
      }
    }

    setBubbles(placed);
  };

  /* ✅ FIXED INIT */
  useEffect(() => {
    const run = () => generateBubbles();

    const timeout = setTimeout(run, 150);
    window.addEventListener('resize', run);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', run);
    };
  }, []);

  /* Mouse tracking */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {bubbles.map((bubble, index) => {
        let moveX = 0;
        let moveY = 0;

        /* -------- Mouse Repulsion -------- */
        const dx = mouse.x - bubble.x;
        const dy = mouse.y - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 120;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          moveX += -(dx / distance) * force * 25;
          moveY += -(dy / distance) * force * 25;
        }

        /* -------- Bubble Repulsion -------- */
        bubbles.forEach((other, i) => {
          if (i === index) return;

          const dx2 = bubble.x - other.x;
          const dy2 = bubble.y - other.y;
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          const minDist = bubble.size / 2 + other.size / 2 + 10;

          if (dist < minDist && dist > 0) {
            const force = (minDist - dist) / minDist;

            moveX += (dx2 / dist) * force * 20;
            moveY += (dy2 / dist) * force * 20;
          }
        });

        return (
          <div
            key={index}
            className={styles.bubble}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x - bubble.size / 2}px`,
              top: `${bubble.y - bubble.size / 2}px`,
              transform: `translate(${moveX}px, ${moveY}px)`,
            }}
          >
            <div
              className={styles.float}
              style={{
                animationDuration: bubble.floatDuration,
                animationDelay: bubble.floatDelay,
              }}
            >
              <img src={bubble.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}