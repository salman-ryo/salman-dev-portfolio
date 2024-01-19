"use client"
import React, { useEffect, useState } from 'react';
import { useActiveTab } from '../_context/ActiveTabContext';

function MagicWand() {

    //mouse position
    const [mousePosition, setMousePosition] = useState({x:0, y:0})
    // keep track of previous mouse pos to prevent too many stars
    const [prevMousePosition, setPrevMousePosition] = useState({x:0, y:0})
    // calculate mouse position from event e
    const handleMouseMovement = (e)=>{
        const {clientX, clientY} = e;
        setMousePosition({x:clientX, y:clientY});
    }

    useEffect(()=>{
        //add an event listener that runs the mouse position calculate function everytime the mouse moves
        window.addEventListener('mousemove',handleMouseMovement);
        //unmount the event listener when component is not in use
        return ()=>{
            window.removeEventListener('mousemove',handleMouseMovement);
        }
    },[])

    //  Array of colors
    const colors = ["#03e3fc", "#e573f0", "#f0ca73"];

    const animationClass = ['star','star2','star3']

    // Get a random index from the array
    const getRandomIndex =(arr)=>{
        const randomIndex = Math.floor(Math.random() * arr.length);
        return randomIndex
    }

    const addDivAtMousePosition = () => {
      // Assign the random color to the variable myColor
      const myColor = colors[getRandomIndex(colors)];
      const myClass = animationClass[getRandomIndex(animationClass)]
        const newDiv = document.createElement('span');
        newDiv.style.position = 'fixed';
        newDiv.style.left = `${mousePosition.x +20}px`;
        newDiv.style.top = `${mousePosition.y+20}px`;
        newDiv.style.pointerEvents="auto"
        newDiv.innerHTML=`
                          <svg class=${myClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20">
                            <polygon points="50,0 61.8,38.2 100,50 61.8,61.8 50,100 38.2,61.8 0,50 38.2,38.2" fill=${myColor} />
                          </svg>`;
        document.body.appendChild(newDiv);
        // remove star after 1s
        setTimeout(() => {
            document.body.removeChild(newDiv);
        }, 1000);
      };

      useEffect(()=>{
        const xDiff = mousePosition.x - prevMousePosition.x;
        const yDiff = mousePosition.y - prevMousePosition.y;
        const distance= Math.sqrt((xDiff)**2 + (yDiff)**2)
        if(distance >=20){
            addDivAtMousePosition()
            setPrevMousePosition(mousePosition)
        }
      },[mousePosition])

      const {theme} = useActiveTab();


  return (
    <div id='cucu' className={`fixed z-[999]`} style={{ top: `${mousePosition.y +2}px`, left: `${mousePosition.x -11}px` , pointerEvents: 'auto'}}>
      <img src='pointerLight.svg' alt='cursor' className='h-12'/>
  </div>
  );
}

export default MagicWand;
