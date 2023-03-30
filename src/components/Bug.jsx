import React, { useState, useEffect } from 'react';
import '../styles/BackgroundStyle.css'

function Bug({ speed, x, y }) {
  const [posX, setPosX] = useState(x);
  const [posY, setPosY] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      const newY = posY + speed;
      const windowHeight = window.innerHeight;
      // Limiter la position en Y
      if (newY > windowHeight) {
        setPosY(-100);
      } else {
        setPosY(newY);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [posY, speed]);

  return <div className="bug" style={{ left: posX, top: posY}} />;
}

export default Bug;
