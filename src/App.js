import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import InteractiveSolarSystem from './InteractiveSolarSystem.js';
import TabBar from "./Components/TabBar";
import TimelineTab from "./Components/TimelineTab";
import "./App.css"
import StarsBackground from "./Components/StarsBackground";

const App = () => {
  return (
    <Router>
        <div className="App">
            <StarsBackground />
            <TabBar/>
            <Routes>
                <Route path="/" element={<Navigate to="/timeline" />}></Route>
                <Route path="/solar-system" element={<InteractiveSolarSystem/>}/>
                <Route path="/timeline" element={<TimelineTab/>}/>
            </Routes>
        </div>
    </Router>

)
    ;
};

export default App;
