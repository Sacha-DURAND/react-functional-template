// components/StudioSurFooter.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function StudioFooter() {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef(null);

  // flux lumineux ondulants et particules d'étoiles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Génération de petites particules d'étoiles fixes en arrière-plan
    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.02 + 0.055,
    }));

    let step = 0;
    const render = () => {
      step += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Dessin des particules scintillantes
      particles.forEach((p) => {
        p.alpha += Math.sin(step * 2 + p.x) * 0.01;
        ctx.fillStyle = `rgba(147, 197, 253, ${Math.max(0.1, Math.min(0.8, p.alpha))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dessin des vagues lumineuses fluides (flux bleu Studio 111)
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        for (let x = 0; x < width; x += 15) {
          const y =
            Math.sin(x * 0.004 + step + i * 1.5) * 12 +
            Math.cos(x * 0.002 - step * 0.7) * 8 +
            height / 2 +
            (i === 0 ? -5 : 5);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, i === 0 ? 'rgba(59, 130, 246, 0.18)' : 'rgba(99, 102, 241, 0.12)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)');
        gradient.addColorStop(1, 'rgba(10, 12, 16, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const styles = {
    wrapper: {
      position: 'relative',
      width: '100%',
      minHeight: '11px',
      backgroundColor: '#0a0c10',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxSizing: 'border-box',
      padding: '11px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    // Ligne lumineuse supérieure dégradée
    topGlowBorder: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.9), rgba(59, 130, 246, 0.6), transparent)',
      boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)',
      zIndex: 2,
    },
    canvasBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none',
    },
    container: {
      position: 'relative',
      zIndex: 3,
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 24px', 
      boxSizing: 'border-box',
    },
    text: {
      margin: 0,
      fontSize: '12px',
      color: '#9ca3af',
      letterSpacing: '0.025em',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      flexWrap: 'wrap',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      transition: 'all 0.25s ease',
      cursor: 'pointer',
    },
    brand: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '700',
      letterSpacing: '0.03em',
      filter: isHovered ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none',
      transition: 'filter 0.25s ease',
    },
    iconWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
      transition: 'background-color 0.25s ease',
    },
    icon: {
      width: '12px',
      height: '12px',
      stroke: '#60a5fa',
      fill: 'none',
      strokeWidth: '2.2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
      transform: isHovered ? 'translate(2px, -2px) scale(1.1)' : 'translate(0, 0) scale(1)',
    }
  };

  return (
    <footer style={styles.wrapper}>
      <div style={styles.topGlowBorder} />
      <canvas ref={canvasRef} style={styles.canvasBg} />
      <div style={styles.container}>
        <p style={styles.text}>
          <span>Conçu et développé par</span>
          <a 
            href="https://cent-onze.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={styles.brand}>Studio 111</span>
            <span style={styles.iconWrapper}>
              <svg style={styles.icon} viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}