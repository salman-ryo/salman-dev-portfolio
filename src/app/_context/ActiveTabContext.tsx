'use client'
import React, { createContext, useContext, useState } from 'react'
import { links } from '../_lib/data';
import { error } from 'console';

type ActiveTabContextType = {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

//either this type or null type
export const ActiveTabContext = createContext<ActiveTabContextType | null>(null);

//explicit type definition
// type TabNames = (typeof links)[number]["name"];


//inline type definition <>
export default function ActiveTabContextProvider({children} : {children : React.ReactNode}) {
    const [activeTab, setActiveTab] = useState<string>("Home")

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab}}>{children}</ActiveTabContext.Provider>
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
