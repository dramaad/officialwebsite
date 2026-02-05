import { useEffect, useRef } from 'react';

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle system for energy field
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ['#FF3D00', '#FF9100', '#00E5FF'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const drawAurora = () => {
      // Clear with void color
      ctx.fillStyle = '#050507';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw aurora blobs
      const drawBlob = (
        x: number,
        y: number,
        radius: number,
        color: string,
        alpha: number
      ) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color.replace(')', `, ${alpha})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.5, color.replace(')', `, ${alpha * 0.5})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      };

      // Aurora blob 1 - Top left (ember)
      const blob1x = canvas.width * 0.2 + Math.sin(time * 0.0003) * 100;
      const blob1y = canvas.height * 0.3 + Math.cos(time * 0.0004) * 80;
      drawBlob(blob1x, blob1y, 400, 'rgb(255, 61, 0)', 0.12);

      // Aurora blob 2 - Bottom right (ember glow)
      const blob2x = canvas.width * 0.8 + Math.cos(time * 0.00035) * 120;
      const blob2y = canvas.height * 0.7 + Math.sin(time * 0.00045) * 100;
      drawBlob(blob2x, blob2y, 500, 'rgb(255, 145, 0)', 0.08);

      // Aurora blob 3 - Center (cyan data stream)
      const blob3x = canvas.width * 0.5 + Math.sin(time * 0.0005) * 60;
      const blob3y = canvas.height * 0.5 + Math.cos(time * 0.0006) * 50;
      drawBlob(blob3x, blob3y, 300, 'rgb(0, 229, 255)', 0.05);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.8 + Math.sin(time * 0.002 + p.x) * 0.2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 61, 0, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      const offset = (time * 0.01) % gridSize;

      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      time += 16;
      animationId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
