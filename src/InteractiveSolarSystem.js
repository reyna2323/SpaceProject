import React, { useRef, useEffect, useState } from 'react';
import './InteractiveSolarSystem.css'; // Optional CSS for styling

const InteractiveSolarSystem = () => {
  const canvasRef = useRef(null);
  const [planets, setPlanets] = useState([]);
  const width = 800;
  const height = 600;

  // Sun's properties
  const sun = { x: width / 2, y: height / 2, radius: 30, color: 'yellow' };

  // Function to add a new planet
  const addPlanet = (distance, speed, color = 'blue') => {
    const newPlanet = {
      angle: 0,
      distance,
      radius: 10,
      speed,
      color,
    };
    setPlanets((prevPlanets) => [...prevPlanets, newPlanet]);
  };

  // Animation and drawing function
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const draw = () => {
      // Clear the canvas and set background color
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      // Star background
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 2, 2); // Small white squares as stars
      }

      // Draw the sun
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
      ctx.fillStyle = sun.color;
      ctx.fill();

      // Draw planets in circular orbits
      planets.forEach((planet) => {
        planet.angle += planet.speed;
        const x = sun.x + planet.distance * Math.cos(planet.angle);
        const y = sun.y + planet.distance * Math.sin(planet.angle);

        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      requestAnimationFrame(draw); // Continue animation loop
    };

    draw(); // Start the animation loop
  }, [planets]);

  return (
    <div className="interactive-solar-system">
      <h1>Explore the Physics of Orbits</h1>
      <canvas ref={canvasRef}></canvas>
      
      {/* Button container for adding planets */}
      <div className="button-container">
        <button onClick={() => addPlanet(100, 0.03, 'blue')}>Add Earth-like Planet</button>
        <button onClick={() => addPlanet(150, 0.02, 'red')}>Add Mars-like Planet</button>
        <button onClick={() => addPlanet(200, 0.01, 'green')}>Add Jupiter-like Planet</button>
      </div>

      {/* Informational Box */}
      <div className="physics-info">
        <h2>Understanding Orbital Mechanics</h2>
        <p>
          In our solar system, planets orbit the Sun due to gravitational forces. These orbits result from a balance of
          gravitational pull and the planet's velocity.
        </p>
        <p>
          The gravitational force is calculated using Newton's Law of Gravitation: <strong>F = G * (m1 * m2) / r²</strong>, 
          where G is the gravitational constant, m1 and m2 are the masses of two objects, and r is the distance between them.
        </p>
      </div>
    </div>
  );
};

export default InteractiveSolarSystem;
