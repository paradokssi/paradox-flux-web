import { useEffect, useRef } from 'react';

interface Trail {
  x: number;
  y: number;
  alpha: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailsRef = useRef<Trail[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1
      });

      // Limit trail length
      if (trailsRef.current.length > 30) {
        trailsRef.current.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trails
      trailsRef.current = trailsRef.current.filter(trail => {
        trail.alpha -= 0.03;
        return trail.alpha > 0;
      });

      // Draw each trail point with glow effect
      trailsRef.current.forEach((trail, index) => {
        const size = 8 + (index / trailsRef.current.length) * 12;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, size * 2);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${trail.alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${trail.alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        const coreGradient = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, size);
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${trail.alpha})`);
        coreGradient.addColorStop(0.3, `rgba(216, 180, 254, ${trail.alpha * 0.8})`);
        coreGradient.addColorStop(1, `rgba(168, 85, 247, ${trail.alpha * 0.3})`);
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Connect trails with lines
        if (index > 0) {
          const prevTrail = trailsRef.current[index - 1];
          const lineGradient = ctx.createLinearGradient(
            prevTrail.x, prevTrail.y, 
            trail.x, trail.y
          );
          lineGradient.addColorStop(0, `rgba(168, 85, 247, ${prevTrail.alpha * 0.3})`);
          lineGradient.addColorStop(1, `rgba(168, 85, 247, ${trail.alpha * 0.3})`);
          
          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(prevTrail.x, prevTrail.y);
          ctx.lineTo(trail.x, trail.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MouseTrail;
