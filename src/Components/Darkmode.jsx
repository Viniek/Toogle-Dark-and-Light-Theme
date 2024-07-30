import React from 'react'
import sun from "../assets/sun.png"
import moon from "../assets/moon.webp"
import './DarkMode.css'


function Darkmode() {
    const setDarkMode=()=>{
        document.querySelector("body").setAttribute("data-theme","dark")
    }
    const setLightTheme=()=>{
        document.querySelector("body").setAttribute("data-theme","light")

    }
  const toggleTheme=(e)=>{
if (e.target.checked)setDarkMode();
else setLightTheme();
  }
  return (
  <>
  <label for="darkmode-toggle">
    <img src={sun}/>
    <img src={moon}/>
  </label>
  <input type="checkbox" id='darkmode-toggle'onChange={toggleTheme}/>
  </>
  )
}

export default Darkmode