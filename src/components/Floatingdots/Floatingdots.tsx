"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseOffset: number;
  pulseSpeed: number;
}

export default function FloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dots: Dot[] = [];

    const DOT_COUNT = 15;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDots = () => {
      dots = Array.from({ length: DOT_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
        opacity: Math.random() * 0.25 + 0.1,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      }));
    };

    const drawDot = (dot: Dot, time: number) => {
      const pulse = Math.sin(time * dot.pulseSpeed + dot.pulseOffset);
      const currentRadius = dot.radius + pulse * 0.5;
      const currentOpacity = dot.opacity + pulse * 0.05;

      // Outer glow — tighter and more subtle
      const glow = ctx.createRadialGradient(
        dot.x, dot.y, 0,
        dot.x, dot.y, currentRadius * 2.5
      );
      glow.addColorStop(0, `rgba(255, 140, 0, ${currentOpacity * 0.3})`);
      glow.addColorStop(0.5, `rgba(255, 100, 0, ${currentOpacity * 0.1})`);
      glow.addColorStop(1, `rgba(255, 80, 0, 0)`);

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, currentRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Core dot
      const core = ctx.createRadialGradient(
        dot.x - currentRadius * 0.3,
        dot.y - currentRadius * 0.3,
        0,
        dot.x,
        dot.y,
        currentRadius
      );
      core.addColorStop(0, `rgba(255, 200, 80, ${currentOpacity})`);
      core.addColorStop(0.5, `rgba(255, 130, 0, ${currentOpacity})`);
      core.addColorStop(1, `rgba(200, 70, 0, ${currentOpacity * 0.8})`);

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();
    };

    const update = (dot: Dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Soft bounce off edges
      if (dot.x < -50) dot.x = canvas.width + 50;
      if (dot.x > canvas.width + 50) dot.x = -50;
      if (dot.y < -50) dot.y = canvas.height + 50;
      if (dot.y > canvas.height + 50) dot.y = -50;

      // Slight random drift
      dot.vx += (Math.random() - 0.5) * 0.02;
      dot.vy += (Math.random() - 0.5) * 0.02;

      // Clamp speed
      const speed = Math.sqrt(dot.vx ** 2 + dot.vy ** 2);
      if (speed > 0.6) {
        dot.vx = (dot.vx / speed) * 0.6;
        dot.vy = (dot.vy / speed) * 0.6;
      }
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      for (const dot of dots) {
        update(dot);
        drawDot(dot, time);
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createDots();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createDots();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}