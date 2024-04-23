"use client"
import React, { useEffect, useState, useCallback } from 'react';
import { useActiveTab } from '../_context/ActiveTabContext';

const MagicWand = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
  const [supportsMouse, setSupportsMouse] = useState(false);
  const [stars, setStars] = useState([]);

  const handleMouseMovement = useCallback((e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    // Check if the device has a mouse
    const mediaQuery = matchMedia('(pointer: fine)');
    setSupportsMouse(mediaQuery.matches);

    if (supportsMouse) {
      window.addEventListener('mousemove', handleMouseMovement);

      return () => {
        window.removeEventListener('mousemove', handleMouseMovement);
      };
    }
  }, [supportsMouse, handleMouseMovement]);
  
  useEffect(() => {
    const xDiff = mousePosition.x - prevMousePosition.x;
    const yDiff = mousePosition.y - prevMousePosition.y;
    const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);

    if (distance >= 20) {
      addStar();
      setPrevMousePosition(mousePosition);
    }
  }, [mousePosition, prevMousePosition]);

  const addStar = () => {
    const colors = ["#03e3fc", "#e573f0", "#f0ca73"];
    const animationClass = ['star', 'star2', 'star3'];

    const myColor = colors[Math.floor(Math.random() * colors.length)];
    const myClass = animationClass[Math.floor(Math.random() * animationClass.length)];

    const newStar = {
      id: Date.now(),
      x: mousePosition.x + 20,
      y: mousePosition.y + 20,
      color: myColor,
      animationClass: myClass
    };

    setStars(prevStars => [...prevStars, newStar]);

    setTimeout(() => {
      setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
    }, 1000);
  };

  const { theme } = useActiveTab();

  return supportsMouse ? (
    <>
      <div
        id="cucu"
        className={`hidden sm:block fixed z-[999]`}
        style={{
          top: `${mousePosition.y + 2}px`,
          left: `${mousePosition.x - 11}px`,
          pointerEvents: 'auto',
        }}
      >
        <img src="pointerLight.svg" alt="cursor" className="h-12" />
      </div>
      {stars.map(star => (
        <span
          key={star.id}
          style={{
            position: 'fixed',
            left: `${star.x}px`,
            top: `${star.y}px`,
            pointerEvents: 'auto',
          }}
        >
          <svg className={star.animationClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
            <polygon points="50,0 61.8,38.2 100,50 61.8,61.8 50,100 38.2,61.8 0,50 38.2,38.2" fill={star.color} />
          </svg>
        </span>
      ))}
    </>
  ) : null;
};

export default MagicWand;
