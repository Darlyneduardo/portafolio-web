import React, { useEffect, useRef } from 'react';
import { startGalaxy } from './galaxy-background';

// Interactivo: Galaxia con tooltip de proyectos
export default function GalaxyBackground({ projects = [], onProjectHover }) {
  const canvasRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    let cleanup = null;
    if (canvasRef.current) {
      cleanup = startGalaxy(canvasRef.current, projects, tooltipRef, onProjectHover);
    }
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, [projects, onProjectHover]);

  // El tooltip se renderiza fuera del canvas
  return (
    <>
      <canvas
        id="galaxy-canvas"
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'auto',
        }}
      />
      <div
        ref={tooltipRef}
        id="galaxy-tooltip"
        style={{
          position: 'absolute',
          background: 'rgba(255,255,255,0.95)',
          color: '#000',
          padding: '10px 15px',
          borderRadius: 10,
          fontSize: 14,
          pointerEvents: 'none',
          transform: 'translate(-50%, -120%)',
          transition: 'opacity 0.3s',
          opacity: 0,
          zIndex: 1000,
          minWidth: 120,
          maxWidth: 260,
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)'
        }}
      />
    </>
  );
}
