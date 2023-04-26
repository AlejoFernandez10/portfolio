'use client'
import React from 'react'
import Context from '@/app/context/Context'
import { useContext } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
const ThemeToggler = () => {

  const [theme, setTheme] = useContext(Context);

const toggleTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};

return (
  <div className={`relative h-6 w-12 text-white flex flex-col`} >
    <label htmlFor="AcceptConditions" className="absolute h-6 w-12 cursor-pointer" >
      <input type="checkbox" id="AcceptConditions" className="peer sr-only" onClick={toggleTheme} checked={theme === 'light'} />
      <span className="absolute inset-0 w-full rounded-full bg-gray-500 transition peer-checked:bg-purple-500"></span>
      <span className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full  transition-all peer-checked:start-6">{theme === 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />} </span>
    </label>
    
  </div>
);

}

export default ThemeToggler