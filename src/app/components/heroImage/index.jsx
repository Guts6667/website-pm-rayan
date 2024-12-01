"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HeroImg({ src, alt }) {
  const [style, setStyle] = useState({
    transform: "rotate(0deg) translate(0px, 0px)",
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Increased sensitivity for tilt and movement
    const xTilt = ((clientX - left) / width - 0.5) * 60; // Increased tilt sensitivity
    const yTilt = ((clientY - top) / height - 0.5) * -60; // Increased inverted Y tilt sensitivity
    const xMove = ((clientX - left) / width - 0.5) * 60; // Increased horizontal movement
    const yMove = ((clientY - top) / height - 0.5) * 60; // Increased vertical movement

    setStyle({
      transform: `rotate(${xTilt}deg) translate(${xMove}px, ${yMove}px)`, // Combine tilt and movement
      transition: "transform 0.1s ease-in-out", // Smooth movement
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotate(0deg) translate(0px, 0px)", // Reset tilt and movement
      transition: "transform 0.6s ease", // Smooth reset
    });
  };

  return (
    <div
      className="relative "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <img
        className="rounded-[12px] object-cover object-center"
        src={src}
        alt={alt}
      />
      
    </div>
  );
}