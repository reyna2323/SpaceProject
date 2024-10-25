// InteractiveSolarSystem.js
import React, { useState } from 'react';
import SolarSystem from './SolarSystem';
import PhysicsInfo from './PhysicsInfo';
import './InteractiveSolarSystem.css';

const InteractiveSolarSystem = () => {
  const [physicsData, setPhysicsData] = useState({ force: 0, distance: 0, velocity: { x: 0, y: 0 } });

  return (
    <div className="interactive-solar-system">
      <h1>Explore the Physics of Orbits</h1>
      <div className="content">
        <div className="simulation">
          <SolarSystem onPhysicsDataUpdate={setPhysicsData} />
        </div>
        <div className="info">
          <PhysicsInfo data={physicsData} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveSolarSystem;
