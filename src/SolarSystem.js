import React, { useRef, useEffect } from 'react';

const SolarSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 600;

    const G = 6.67430e-11; // Gravitational constant
    const SUN_MASS = 1.989e30;
    
    const sun = { x: width / 2, y: height / 2, radius: 40, mass: SUN_MASS, color: 'yellow' };
    const planet = { x: width / 2 + 200, y: height / 2, radius: 15, mass: 5.972e24, vx: 0, vy: 0.05, color: 'blue' };

    function updatePosition() {
      const dx = sun.x - planet.x;
      const dy = sun.y - planet.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = (G * sun.mass * planet.mass) / (distance * distance);
      const acceleration = force / planet.mass;

      const ax = acceleration * (dx / distance);
      const ay = acceleration * (dy / distance);

      planet.vx += ax;
      planet.vy += ay;

      planet.x += planet.vx;
      planet.y += planet.vy;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
      ctx.fillStyle = sun.color;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(planet.x, planet.y, planet.radius, 0, 2 * Math.PI);
      ctx.fillStyle = planet.color;
      ctx.fill();

      updatePosition();
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default SolarSystem;
