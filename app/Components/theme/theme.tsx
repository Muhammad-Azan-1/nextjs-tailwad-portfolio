
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useCallback } from "react";
const theme = () => {
    console.log("component re-redner")
    const [darkMode , setdarkMode] = useState(
        
        ()=>{ return localStorage.getItem('theme') === 'dark';} // initally return nfalse to the darkMode because there is no value in localStorage  so null === "string" (false)
    )as any;
    // localStorage is a browser feature that allows you to persist key-value data across page reloads and sessions.
    // Data in localStorage will remain until it is explicitly changed or removed.

    useEffect(()=>{
      if(darkMode){
        document.documentElement.classList.add('dark')
        // localStorage.setItem('theme', 'dark')
        // console.log("DARK MODE")
      }else{
        document.documentElement.classList.remove('dark')
        // localStorage.setItem('theme', 'light')
        // console.log("Light MODE")
      }
    },[darkMode])




   const changeTHeme = useCallback(()=>{
    setdarkMode((prevVal:boolean)=>!prevVal)
   },[])

  return (
    <>

    <div
    className="md:relative ml-[3rem] flex items-center text-[1.7rem] w-20 h-8 rounded-full dark:bg-white bg-main cursor-pointer p-1 
   "
    onClick={()=>{
        changeTHeme()
        console.log("AUTOMATIC SET THE VALUE")
    }}
    >
        <FontAwesomeIcon icon={faMoon} className="text-white" />
        <div
         className="md:absolute bg-white dark:bg-black rounded-full w-[17px] h-[17px] shadow-md transform transition-transform duration-300"
         style={darkMode ? {left:"2px"} : {right:"2px"}}
        >
        </div>
        <FontAwesomeIcon icon={faSun} className="md:text-yellow-400 ml-auto w-[15px] h-[15]" />
    </div>
  

    </>
  )
}

export default theme













 // useEffect(()=>{
    //     const theme = localStorage.getItem('theme')
    //     if (theme === 'dark') {
    //         setdarkMode(true);
    //     } else if (theme === 'light') {
    //         setdarkMode(false);  
    //     }
    // },[])