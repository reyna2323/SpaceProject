// InteractiveSolarSystem.js
import React from 'react';
import SolarSystem from './SolarSystem';   // Import the solar system simulation
import PhysicsInfo from './PhysicsInfo';   // Import the physics info
import './InteractiveSolarSystem.css';     // Import styles

const InteractiveSolarSystem = () => {
  return (
    <div className="interactive-solar-system">
      <h1>Explore the Physics of Orbits</h1>
      <div className="content">
        <div className="simulation">
          <SolarSystem />
        </div>
        <div className="info">
          <PhysicsInfo />
        </div>
      </div>
    </div>
  );
};

export default InteractiveSolarSystem;
