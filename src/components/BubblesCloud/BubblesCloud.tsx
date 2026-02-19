'use client';

import { useEffect, useState } from 'react';
import styles from './BubblesCloud.module.css';

interface Bubble {
  img: string;
  size: number;
  top: number;
  left: number;
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
  '/bubbles/googleads.png',
];

const MAX_ATTEMPTS = 100;
const FIXED_SIZE = 100; // same size for desktop
const MIN_GAP = 18;

const BubblesCloud = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const placed: Bubble[] = [];

    const cols = 4;  // control horizontal spread
    const rows = 3;  // control vertical spread

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    let index = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (index >= bubbleImages.length) break;

        const randomOffsetX = Math.random() * (cellWidth * 0.4);
        const randomOffsetY = Math.random() * (cellHeight * 0.4);

        placed.push({
          img: bubbleImages[index],
          size: FIXED_SIZE,
          left: c * cellWidth + randomOffsetX,
          top: r * cellHeight + randomOffsetY,
          floatDuration: `${Math.random() * 4 + 6}s`,
          floatDelay: `${Math.random() * 2}s`,
        });

        index++;
      }
    }

    setBubbles(placed);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {bubbles.slice(0, 9).map((bubble, index) => (
        <div
          key={index}
          className={styles.bubble}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            animationDuration: bubble.floatDuration,
            animationDelay: bubble.floatDelay,
          }}
        >
          <img src={bubble.img} alt="Bubble icon" />
        </div>
      ))}
    </div>
  );
};

export default BubblesCloud;
