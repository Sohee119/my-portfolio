"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Increased particle count for higher density
    const particleCount = Math.floor((width * height) / 10000);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5, // Larger nodes
      });
    }

    const render = () => {
      const isDark = document.documentElement.classList.contains("dark");

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Higher opacity colors tailored for high contrast in light & dark mode
      const nodeColor = isDark ? "rgba(52, 211, 153, " : "rgba(16, 185, 129, ";
      const lineColor = isDark ? "rgba(16, 185, 129, " : "rgba(5, 150, 105, ";

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle nodes
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor}0.95)`;
        ctx.fill();

        // Connect nearby nodes with thicker, brighter lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.45; // Significantly higher line opacity
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 1.2; // Thicker lines
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Live Interactive Particle Canvas - Opacity set to 100% */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-100" />

      {/* Brighter Glow Orbs */}
      <div className="absolute -left-20 -top-20 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-400/30 blur-[100px] dark:bg-emerald-500/25" />
      <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-500/25 blur-[100px] dark:bg-emerald-700/30" />
    </div>
  );
}