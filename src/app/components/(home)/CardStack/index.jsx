"use client";
import React from "react";

export default function CardStack({ project, i }) {
  return (
    <div className="cardContainer sticky top-0 h-[100vh] flex items-center justify-center scroll-smooth ">
      <div
        style={{
        //   backgroundImage: `url(/img/${project.image})`,
        //   backgroundSize: "cover",
        //     backgroundPosition: "center",
           top:`calc(-5vh + ${i * 25}px)`
        }}
        className={"card group overflow-hidden flex flex-col relative h-[60vh] xl:h-[70vh]  w-full lg:w-[60vw] xl:w-[70vw]  rounded-lg  origin-top "}
      >
        <img
        className="absolute w-full h-full rounded-lg object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        src={`/img/${project.image}`} alt="" />
       <div className="z-20 p-[24px] flex justify-between w-full h-fit">
          <h4 className="text-[24px] text-white text-left flex-1 font-semibold ">
            {project.type}
          </h4>
          <div className=" flex-1 hidden lg:flex flex-wrap gap-y-[12px] justify-end items-center gap-x-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300">
            {project.tags.map((item, index) => (
            console.log(item + index),
              <div
                key={index}
                className="h-fit flex items-center justify-center font-semibold text-white text-[14px] px-3 py-1.5 bg-light-blurry dark:bg-dark-blurry backdrop-blur-[6px] py-[6px] px-[12px] rounded-md "
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
// display: flex;

// flex-direction: column;

// position: relative;

// height: 500px;

// width: 1000px;

// border-radius: 25px;

// padding:50px;

// transform-origin: top;
