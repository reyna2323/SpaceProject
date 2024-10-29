import React, { useEffect, useRef } from 'react';

function StarsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set initial canvas size only once
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate and draw stars only once
        const numStars = 200;
        const stars = Array.from({ length: numStars }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            opacity: Math.random(),
        }));

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(({ x, y, size, opacity }) => {
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        drawStars(); // Draw stars once

        return () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Cleanup on unmount
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
            }}
        />
    );
}

export default StarsBackground;
