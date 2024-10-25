// SolarSystem.js
import React, { useRef, useEffect, useState } from 'react';

const SolarSystem = ({ onPhysicsDataUpdate }) => {
  const canvasRef = useRef(null);
  const [planets, setPlanets] = useState([]); // Use state to track planets
  const G = 6.67430e-11; // Gravitational constant
  const SUN_MASS = 1.989e30; // Mass of the sun
  const width = 800; // Canvas width
  const height = 600; // Canvas height

  // Sun's properties
  const sun = { x: width / 2, y: height / 2, radius: 40, mass: SUN_MASS, color: 'yellow' };

  // Function to add a new planet to the solar system
  const addPlanet = (mass, distance, initialSpeed) => {
    const newPlanet = {
      x: sun.x + distance,
      y: sun.y,
      radius: 10,
      mass,
      vx: initialSpeed, // initial horizontal velocity
      vy: 0, // Start with 0 vertical velocity
      color: 'blue',
    };
    setPlanets((prevPlanets) => [...prevPlanets, newPlanet]); // Update the state
    console.log('Planet added:', newPlanet);
  };

  // Function to update positions of planets
  const updatePlanets = () => {
    setPlanets((prevPlanets) => 
      prevPlanets.map((planet) => {
        const dx = sun.x - planet.x;
        const dy = sun.y - planet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > sun.radius) { // Prevent calculation when the planet is on top of the sun
          const force = (G * sun.mass * planet.mass) / (distance * distance);
          const acceleration = force / planet.mass;

          // Calculate acceleration components
          const ax = (acceleration * (dx / distance)) * -1; // Change the direction
          const ay = (acceleration * (dy / distance)) * -1; // Change the direction

          // Update velocity and position
          planet.vx += ax;
          planet.vy += ay;
          planet.x += planet.vx;
          planet.y += planet.vy;

          // Optional: Send physics data to the parent component
          onPhysicsDataUpdate({
            force,
            distance,
            velocity: { x: planet.vx, y: planet.vy },
          });
        }
        return planet;
      })
    );
  };

  // Animation and drawing function
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const draw = () => {
      ctx.clearRect(0, 0, width, height); // Clear the canvas

      // Draw the sun
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
      ctx.fillStyle = sun.color;
      ctx.fill();

      // Draw planets
      planets.forEach((planet) => {
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      updatePlanets(); // Update all planets' positions
      requestAnimationFrame(draw); // Continue animation loop
    };

    draw(); // Start the animation loop
  }, [planets]); // Redraw whenever planets state changes

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <button onClick={() => addPlanet(5.972e24, 200, 0.1)}>Add Earth-like Planet</button>
      <button onClick={() => addPlanet(3.285e23, 100, 0.2)}>Add Mercury-like Planet</button>
      <button onClick={() => addPlanet(4.867e24, 300, 0.05)}>Add Venus-like Planet</button>
    </div>
  );
};

export default SolarSystem;
