import React from 'react'
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"
import './DarkMode.css'


function Darkmode() {
    const setDarkMode=()=>{
        document.querySelector("body").setAttribute("data-theme","dark")
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightTheme=()=>{
        document.querySelector("body").setAttribute("data-theme","light")
localStorage.setItem("selectedTheme","light")
    }
    const selectedTheme=localStorage.getItem("selectedTheme");
if (selectedTheme==="dark"){
    setDarkMode();
}

  const toggleTheme=(e)=>{
if (e.target.checked)setDarkMode();
else setLightTheme();
  }
  return (
  <>
  <div className='button'>
    <input type="checkbox"
   id='darkmode-toggle'
   onChange={toggleTheme}
   defaultChecked={selectedTheme==="dark"}
   />
  <label for="darkmode-toggle">
 <img src={sun}/>
 <img src={moon}/>

  </label>
</div>
  </>
  )
}

export default Darkmode