"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/utils/themeContext";
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const theme = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor "
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        width: "30px", 
        height: "30px",
        borderRadius: "50%",
        mixBlendMode: "difference",
        pointerEvents: "none", // Prevent blocking other interactions
        zIndex: 1000,
      }}
    />
  );
}