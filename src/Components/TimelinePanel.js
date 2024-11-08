import React, { useEffect, useRef, useState } from "react";
import './TimelinePanel.css';

function TimelinePanel({ header, prompt }) {
    const panelRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [summary, setSummary] = useState("Loading...");
    const [error, setError] = useState(null);

    // Fetch Wikipedia summary when component mounts or header changes
    useEffect(() => {
        const fetchWikipediaSummary = async () => {
            try {
                // Using a CORS proxy to avoid cross-origin issues
                const url = `https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${encodeURIComponent(prompt)}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data from Wikipedia API");
                }

                const data = await response.json();
                const page = data.query.pages;
                const pageId = Object.keys(page)[0];
                const extract = page[pageId]?.extract || "No summary available.";

                setSummary(extract);
            } catch (err) {
                console.error(err);
                setError("Error fetching summary from Wikipedia.");
            }
        };

        fetchWikipediaSummary(header);
    }, [header]); // Refetch data if header changes

    // Intersection Observer for fade-in effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust threshold as needed
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
            {/* Render error message or summary content */}
            {error ? <p>{error}</p> : <p dangerouslySetInnerHTML={{ __html: summary }} />}
        </div>
    );
}

export default TimelinePanel;
