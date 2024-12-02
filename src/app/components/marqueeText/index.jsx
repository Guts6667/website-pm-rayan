"use client";
import React from "react";

export default function MarqueeText({ text = "RAYAN CHAMBET - RAYAN CHAMBET - RAYAN CHAMBET", speed =480 }) {
  return (
    <div className="overflow-hidden w-full  whitespace-nowrap absolute top- z-0">
      <div
        className="inline-block animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {Array(10)
          .fill(text)
          .map((item, index) => (
            <span
              key={index}
              className="text-[40vw] light:text-black-transparent dark:text-white-transparent opacity-40 xl:text-[15vw]  font-semibold mx-4"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}
