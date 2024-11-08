import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";

function TimelineButton({ width, height, node1, node2 }) {
    const buttonRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 1 } // Adjust this threshold to detect partial visibility
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => {
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, []);

    return (
        <Button
            ref={buttonRef}
            style={{
                display: "flex",
                backgroundImage: `url(${node1})`, // Default image
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
                width: `${width}px`,
                minHeight: `${height}px`,
                maxHeight: `${height}px`,
                height: `${height}px`,
                border: 'none',
                padding: '0',
                outline: 'none',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Fade transition layer */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${node2})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundColor: 'transparent',
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 1s ease-in-out", // Adjust duration as needed
                }}
            ></div>
        </Button>
    );
}

export default TimelineButton;
