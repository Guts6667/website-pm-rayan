"use client";
import React, { useState, useEffect } from "react";

export default function SkillCard({ title, skills, number, rotation, delay }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = screenWidth > 768;

  return (
    <div
      className={` col-span-1 flex flex-col w-full gap-[12px] lg:gap-[24px] p-[24px] bg-[#361601]/10 dark:bg-[#1B1915] rounded-[12px] sm:rotate-0 lg:animate-floating  hover:animate-scaleCard`}
      style={{
        "--rotate": isLargeScreen ? `${rotation}deg` : "0deg",
        transform: `translateY(0) rotate(var(--rotate))`,
        animationDelay: `${delay}s`,
      }}
    >
      <h4 className="uppercase font-medium text-[20px]">{title}</h4>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="w-full py-[12px] lg:py-[24px] border-b-[0.5px] border-black dark:border-white"
        >
          <span className="font-light uppercase">{skill}</span>
        </div>
      ))}
      <span className="w-full pt-[12px] lg:pt-[24px] text-right text-[24px] font-medium text-orange dark:text-yellow">
        {number}
      </span>
    </div>
  );
}
