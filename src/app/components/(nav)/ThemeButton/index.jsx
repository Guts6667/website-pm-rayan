"use client";
import { useTheme } from "@/utils/themeContext";
import React, { useState } from "react";

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
      <button onClick={handleToggle} className="theme-toggle-button">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {isAnimating && (
        <div
          className={`fixed top-0 left-0 w-full h-[100vh] bg-black dark:bg-white z-50 animate-cover transition-all   ${animationClass}`}
        ></div>
      )}
    </>
  );
};

export default ThemeToggleButton;
