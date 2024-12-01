"use client";
import React from "react";

export default function MarqueeText({ text = "RAYAN CHAMBET - RAYAN CHAMBET - RAYAN CHAMBET", speed =480 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap absolute z-0">
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
              className="text-[20vw] text-tertiary_transparent xl:text-[15vw]  font-semibold mx-4"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}