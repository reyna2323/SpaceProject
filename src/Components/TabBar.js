import "./TabBar.css"
import Button from 'react-bootstrap/Button';
import React, {useState} from "react";
import TimelineTab from "./TimelineTab";
import {useNavigate} from "react-router-dom";
import StarsBackground from "./StarsBackground";

function TabBar() {
    const navigate = useNavigate();
    const goToTimelineTab = (name) => {
        navigate(name);
    }

    return (
        <div className="tabLayout">
            <Button className="tabButton" onClick={() => goToTimelineTab("/timeline")}>Apollo Timeline</Button>
            <Button className="tabButton" onClick={() => goToTimelineTab("/solar-system")}>Create An Orbital!</Button>
            {/*<Button className="tabButton">About Us</Button>*/}

        </div>

    )
}

export default TabBar;