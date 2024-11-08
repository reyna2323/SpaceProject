import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import InteractiveSolarSystem from './InteractiveSolarSystem.js';
import TabBar from "./Components/TabBar";
import TimelineTab from "./Components/TimelineTab";
import AstrophysicsInfo from "./Components/AstrophysicsInfo";  // Import the new component
import "./App.css";
import StarsBackground from "./Components/StarsBackground";

const App = () => {
  return (
    <Router>
      <div className="App">
        <StarsBackground />
        <Routes>
          <Route path="/" element={<Navigate to="/timeline" />}></Route>
          <Route path="/solar-system" element={<InteractiveSolarSystem />} />
          <Route path="/timeline" element={<TimelineTab />} />
          <Route path="/astrophysics-info" element={<AstrophysicsInfo />} />  
        </Routes>
        <TabBar />
      </div>
    </Router>
  );
};
export default App;
