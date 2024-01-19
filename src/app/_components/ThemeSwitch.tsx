'use client'
import React, { useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import {  useActiveTab } from '../_context/ActiveTabContext';


export default function ThemeSwitch() {

    //get the theme state from context
    const {theme, setTheme} = useActiveTab();

    //fetch system and local theme
    useEffect(()=>{
        //if a theme setting already exists, use that
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme){
            //if local theme is dark, add dark class (by default it is light so no need of setting that)
            if(localTheme === 'dark'){
                setTheme(localTheme);
                document.documentElement.classList.add('dark');
            }
            //if no local theme found, detect the user's system theme if its dark and apply it
        } else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    },[])

    const toggleTheme = ()=>{
        if(theme === 'light'){
            setTheme('dark');
            window.localStorage.setItem('theme','dark');
            //now add the dark class to the doc for tailwind to take effect
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme','light');
            //remove the dark class from doc when in light mode
            document.documentElement.classList.remove('dark');
        }
    }

  return (
    <button className='z-[998] fixed bottom-5 right-5 p-4 text-2xl bg-white text-black dark:text-yellow-500 dark:bg-black hover:bg-black hover:text-white border-[1.5px] border-gray-600 dark:border-white dark:hover:bg-white dark:hover:text-black  rounded-full opacity-80' onClick={toggleTheme}>
        {theme === 'light'?(<BsSun/>) : (<BsMoon />)}
        </button>
  )
}
