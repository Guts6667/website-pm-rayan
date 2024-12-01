"use client";
import React, { useState } from "react";

export default function HeroImg({ src, alt }) {
  const [style, setStyle] = useState({
    transform: "rotate(0deg) translate(0px, 0px)",
  });

  const handleMove = (x, y, element) => {
    const { left, top, width, height } = element.getBoundingClientRect();

    const xTilt = ((x - left) / width - 0.5) * 30; // Tilt sensitivity
    const yTilt = ((y - top) / height - 0.5) * -30; // Inverted Y tilt sensitivity
    const xMove = ((x - left) / width - 0.5) * 25; // Horizontal movement
    const yMove = ((y - top) / height - 0.5) * 25; // Vertical movement

    setStyle({
      transform: `rotate(${xTilt}deg) translate(${xMove}px, ${yMove}px)`,
      transition: "transform 0.1s ease-in-out",
    });
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY, e.currentTarget);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY, e.currentTarget);
  };

  const handleLeaveOrEnd = () => {
    setStyle({
      transform: "rotate(0deg) translate(0px, 0px)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <div
      className="relative w-full h-fit rounded-[12px] overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeaveOrEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeaveOrEnd}
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