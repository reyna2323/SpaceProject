import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InteractiveSolarSystem from './InteractiveSolarSystem';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/solar-system" element={<InteractiveSolarSystem />} />
      </Routes>
    </Router>
  );
};

export default App;
