import React from 'react';

const PhysicsInfo = () => {
  return (
    <div className="physics-info">
      <h2>Understanding Orbital Mechanics</h2>
      <p>
        In our solar system, planets orbit the Sun due to gravitational forces.
        The force follows Newton's law of gravitation:
      </p>
      <p><strong>F = G * (m1 * m2) / r²</strong></p>
      <p>
        Where G is the gravitational constant, m1 and m2 are the masses of the objects,
        and r is the distance between them. 
      </p>
      <p>Planets move in elliptical orbits due to the balance of gravitational pull and velocity.</p>
    </div>
  );
};

export default PhysicsInfo;
