import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InteractiveSolarSystem from './InteractiveSolarSystem';
import './App.css';
import Tab from "./Components/Tab";

function App() 
  return (
    <div>
      <Tab/>
      <Router>
        <Routes>
          <Route path="/solar-system" element={<InteractiveSolarSystem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;