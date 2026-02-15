
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    interface Spark {
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }

    const sparks: Spark[] = [];
    const colors = ['#D12061', '#00796B', '#B8860B', '#1A1A1B'];

    const createSpark = () => {
      const life = Math.random() * 200 + 100;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 30 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.08,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: life,
        maxLife: life
      };
    };

    for (let i = 0; i < 20; i++) {
      sparks.push(createSpark());
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      sparks.forEach((s, i) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.2;

        const currentOpacity = (s.life / s.maxLife) * s.opacity;
        
        ctx.beginPath();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentOpacity;
        
        // Magician/Creator: Soft alchemical blobs
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        if (s.life <= 0) {
          sparks[i] = createSpark();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ filter: 'blur(60px)' }}
    />
  );
};

export default AnimatedBackground;
