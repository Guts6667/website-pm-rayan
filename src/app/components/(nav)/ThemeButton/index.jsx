"use client";
import { useTheme } from "@/utils/themeContext";
import React, { useState } from "react";
import "@theme-toggles/react/css/DarkSide.css"
import { DarkSide } from "@theme-toggles/react"


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");


  const handleToggle = () => {
    setIsAnimating(true);
    setAnimationClass(theme === "light" ? "animate-cover" : "animate-uncover");
    setTimeout(() => {
      toggleTheme();
      setIsAnimating(false);
    }, 1200);
  };


  return (
    <>

      <DarkSide
        duration={1200}
        onClick={handleToggle}
        reversed={theme === "light" ? "" : true}
        className="transition delay-700 [&_svg]:w-[24px] [&_svg]:h-[24px] "
      />

      {isAnimating && (
        <div
          className={`fixed top-0 left-0 w-full h-[100vh] bg-black dark:bg-white z-50 delay-700 animate-cover transition-all   ${animationClass}`}
        ></div>
      )}
    </>
  );
};

export default ThemeToggleButton;
