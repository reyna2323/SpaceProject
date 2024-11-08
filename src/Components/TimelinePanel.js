// TimelinePanel.js

import React, { useEffect, useRef, useState } from "react";
import './TimelinePanel.css';

function TimelinePanel({ header, text }) {
    const panelRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust this threshold to trigger when partially visible
        );

        if (panelRef.current) {
            observer.observe(panelRef.current);
        }

        return () => {
            if (panelRef.current) {
                observer.unobserve(panelRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={panelRef}
            className="panel"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)", // Optional slide effect
                transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
            }}
        >
            <header>{header}</header>
            <paragraph>{text}</paragraph>
        </div>
    );
}

export default TimelinePanel;
