import React, { useEffect, useRef } from 'react';

function StarsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');


        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawStars();
        };

        const drawStars = () => {
            const numStars = 200; // Number of stars to display
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

            for (let i = 0; i < numStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 1.5;
                const opacity = Math.random();

                // Draw the star
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        // Initial canvas setup and drawing
        resizeCanvas();

        // Resize event listener
        window.addEventListener('resize', resizeCanvas);

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', resizeCanvas);
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
                backgroundColor: '#000', // Set a black background to check visibility
            }}
        />
    );
}

export default StarsBackground;
