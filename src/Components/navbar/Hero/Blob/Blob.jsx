import React, { useState, useEffect } from 'react';
import './Blob.css';

const Blob = () => {
  const [points, setPoints] = useState('300,150 350,100 450,100 500,150 450,200 350,200');
  const [animationSpeed, setAnimationSpeed] = useState(0.02);

  useEffect(() => {
    const updateBlob = () => {
      const newPoints = points.split(' ').map(point => {
        const [x, y] = point.split(',').map(Number);
        const angle = Math.atan2(y - 150, x - 300);
        const distance = 50 + Math.sin(Date.now() * animationSpeed) * 50;
        const newX = x + distance * Math.cos(angle);
        const newY = y + distance * Math.sin(angle);
        return `${newX},${newY}`;
      });
      setPoints(newPoints.join(' '));
    };

    const animationId = requestAnimationFrame(function animate() {
      updateBlob();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [points, animationSpeed]);

  return (
    <svg className="blob" viewBox="0 0 600 300">
      <polygon points={points} />
    </svg>
  );
};

export default Blob;
