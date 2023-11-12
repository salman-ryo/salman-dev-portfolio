"use client"
import { useInView } from "react-intersection-observer";
import { useActiveTab } from "../_context/ActiveTabContext";
import { useEffect } from "react";

export function useSectionInView(sectionName : string, threshold: number){
    const {ref, inView} = useInView({threshold:threshold});

    const {setActiveTab, lastClickTime} = useActiveTab();
  
    useEffect(()=>{
      //add a one sec delay to prevent bounce when long scroll triggered
      if(inView && Date.now() - lastClickTime > 1000){
        setActiveTab(sectionName)
      }
    },[inView])

    return({
        ref
    })
}