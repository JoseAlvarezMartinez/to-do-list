import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { useState,useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if(darkMode){
        document.querySelector('input').style.backgroundColor = 'hsl(235, 24%, 19%)';
        document.body.style.backgroundColor = "hsl(235, 21%, 11%)"
    }else{
        document.querySelector('input').style.backgroundColor = '#fff';
        document.body.style.backgroundColor = "#fff"
    }
  },[darkMode])
  return (
    <header
      className={`${
        darkMode ? "dark-mode-background" : "light-mode-background"
      }`}
    >
      <div className="contenedor-header">
        <h1>{"t o d o".toUpperCase()}</h1>
        <img
          onClick={() => setDarkMode(!darkMode)}
          src={darkMode ? SunIcon : MoonIcon}
          alt=""
        />
      </div>
      <div className="input-center">
        <input type="text" placeholder="Create a new todo..." />
      </div>
    </header>
  );
};

export default Header;
