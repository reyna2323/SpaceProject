import './TimelineTab.css';
import StarsBackground from "./StarsBackground";
import React from "react";
import TimelinePanel from "./TimelinePanel";
import SideBar from "./SideBar";
import Timeline from "./Timeline";

function TimelineTab() {
    return(
        <div className="timeline-tab">
            <h1>History Of Apollo</h1>
            <div className="content">
                <h2>Background:</h2>
                <div>
                    <SideBar/>
                    <Timeline/>

                </div>

            </div>

        </div>
    );
}

export default TimelineTab;