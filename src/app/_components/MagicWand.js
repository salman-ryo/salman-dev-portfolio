"use client"
import React, { useEffect, useState } from 'react';
import { useActiveTab } from '../_context/ActiveTabContext';

function MagicWand() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
  const [supportsMouse, setSupportsMouse] = useState(false);

  const handleMouseMovement = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

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
  }, [supportsMouse]);

  const colors = ["#03e3fc", "#e573f0", "#f0ca73"];
  const animationClass = ['star', 'star2', 'star3'];

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

  const addDivAtMousePosition = () => {
    const myColor = colors[getRandomIndex(colors)];
    const myClass = animationClass[getRandomIndex(animationClass)];

    const newDiv = document.createElement('span');
    newDiv.style.position = 'fixed';
    newDiv.style.left = `${mousePosition.x + 20}px`;
    newDiv.style.top = `${mousePosition.y + 20}px`;
    newDiv.style.pointerEvents = 'auto';
    newDiv.innerHTML = `
      <svg class=${myClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
        <polygon points="50,0 61.8,38.2 100,50 61.8,61.8 50,100 38.2,61.8 0,50 38.2,38.2" fill=${myColor} />
      </svg>`;

    document.body.appendChild(newDiv);

    setTimeout(() => {
      document.body.removeChild(newDiv);
    }, 1000);
  };

  useEffect(() => {
    const xDiff = mousePosition.x - prevMousePosition.x;
    const yDiff = mousePosition.y - prevMousePosition.y;
    const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);

    if (distance >= 20) {
      addDivAtMousePosition();
      setPrevMousePosition(mousePosition);
    }
  }, [mousePosition]);

  const { theme } = useActiveTab();

  return supportsMouse ? (
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
  ) : null;
}

export default MagicWand;
