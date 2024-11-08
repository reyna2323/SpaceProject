import "./TabBar.css";
import Button from 'react-bootstrap/Button';
import React from "react";
import {useNavigate} from "react-router-dom";

function TabBar() {
    const navigate = useNavigate();
    const goToTimelineTab = (name) => {
        navigate(name);
    }

    return (
        <div className="tabLayout">
            <Button className="tabButton" onClick={() => goToTimelineTab("/timeline")}>Apollo Timeline</Button>
            <Button className="tabButton" onClick={() => goToTimelineTab("/solar-system")}>Create An Orbital!</Button>
            <Button className="tabButton" onClick={() => goToTimelineTab("/astrophysics-info")}>Astrophysics Information</Button>
        </div>
    );
}

export default TabBar;
