import { useEffect, useRef, useState } from 'react';

interface FlowingGradientProps {
  colorStops?: string[];
  speed?: number;
  blur?: number;
  opacity?: number;
  waveHeight?: number;
}

export default function FlowingGradient({
  colorStops = ['#F4D793', '#FFF6DA', '#F9C0AB'],
  speed = 3.0,
  blur = 60,
  opacity = 0.6,
  waveHeight = 0.4
}: FlowingGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    // Wave layer for each color
    class WaveLayer {
      color: string;
      offset: number;
      amplitude: number;
      frequency: number;
      phase: number;
      yPosition: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(color: string, index: number, total: number, width: number, height: number) {
        this.color = color;
        this.offset = (index / total) * Math.PI * 2;
        this.amplitude = 80 + Math.random() * 40;
        this.frequency = 0.002 + Math.random() * 0.001;
        this.phase = Math.random() * Math.PI * 2;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.yPosition = (height * waveHeight) * (index / total);
      }

      updateSize(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
      }

      draw(time: number, ctx: CanvasRenderingContext2D) {
        const points = [];
        const segments = 100;

        // Generate wave points
        for (let i = 0; i <= segments; i++) {
          const x = (this.canvasWidth / segments) * i;
          const baseY = this.yPosition;
          const wave1 = Math.sin(x * this.frequency + time * 0.5 + this.phase) * this.amplitude;
          const wave2 = Math.sin(x * this.frequency * 0.5 + time * 0.3 + this.offset) * (this.amplitude * 0.5);
          const y = baseY + wave1 + wave2;
          points.push({ x, y });
        }

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvasHeight * waveHeight * 1.5);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.7, this.color + 'cc');
        gradient.addColorStop(1, this.color + '00');

        // Draw wave shape
        ctx.beginPath();
        ctx.moveTo(0, 0);
        
        // Top edge (straight line)
        ctx.lineTo(this.canvasWidth, 0);
        
        // Wave curve (from right to left)
        for (let i = points.length - 1; i >= 0; i--) {
          if (i === points.length - 1) {
            ctx.lineTo(points[i].x, points[i].y);
          } else {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i + 1].x, points[i + 1].y, xc, yc);
          }
        }
        
        // Close path back to top left
        ctx.lineTo(0, points[0].y);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create wave layers for each color
    const waves = colorStops.map((color, index) => 
      new WaveLayer(color, index, colorStops.length, canvas.width, canvas.height)
    );

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      time += deltaTime * 0.001 * speed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = `blur(${blur}px)`;
      ctx.globalAlpha = opacity;

      // Update wave sizes and draw
      waves.forEach(wave => {
        wave.updateSize(canvas.width, canvas.height);
        wave.draw(time, ctx);
      });

      ctx.filter = 'none';
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [colorStops, speed, blur, opacity, waveHeight, isClient]);

  if (!isClient) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}