import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, isActive: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Crisp, Refined Small Particles
    const particleCount = Math.min(Math.floor(width / 20), 85);
    const particles = [];

    const colors = ['#3b82f6', '#2563eb', '#60a5fa', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.8 + 1.2; // Refined small particle radius (1.2px - 3px)
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.04 + 0.015,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Smooth Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle smoothly
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Subtle breathing pulse
        p1.angle += p1.pulseSpeed;
        p1.radius = p1.baseRadius + Math.sin(p1.angle) * 0.6;

        // Soft bounce boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse interaction
        if (mouse.isActive) {
          const mdx = mouse.x - p1.x;
          const mdy = mouse.y - p1.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 170) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.35 * (1 - mdist / 170)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw crisp particle orb
        const grad = ctx.createRadialGradient(p1.x, p1.y, 0, p1.x, p1.y, p1.radius * 2.2);
        grad.addColorStop(0, p1.color);
        grad.addColorStop(0.6, p1.color + '80');
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Connect nearby particles with smooth laser lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 150) * 0.28;
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}
