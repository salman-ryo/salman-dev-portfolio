'use client'
import React, { createContext, useContext, useState } from 'react'

type ActiveTabContextType = {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    lastClickTime: number;
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

//either this type or null type
export const ActiveTabContext = createContext<ActiveTabContextType | null>(null);

//explicit type definition
type ThemeType = 'light' | "dark";



//inline type definition <>
export default function ActiveTabContextProvider({children} : {children : React.ReactNode}) {
    const [activeTab, setActiveTab] = useState<string>("Home");
    const [lastClickTime, setLastClickTime] = useState(0);
    const [theme, setTheme] =useState<ThemeType>('light');


  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab, lastClickTime, setLastClickTime, theme, setTheme}}>{children}</ActiveTabContext.Provider>
  )
}

//create a custom hook as contextype can be null too, so check it
export function useActiveTab(){
    const context = useContext(ActiveTabContext);
    if( context === null){
        throw new Error("Context is null!")
    } else {
        return context
    }
}
