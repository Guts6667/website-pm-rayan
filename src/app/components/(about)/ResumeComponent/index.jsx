import React from "react";

export default function ResumeComponent({ title, items }) {
  return (
    <>
    <span className="h-[0.5px] bg-black/50 dark:bg-white/50 w-full rounded-full "></span>
      <div className="flex flex-col lg:flex-row gap-[24px] py-[24px] lg:py-[48px]  ">
        <h2 className="uppercase tracking-[10px] font-medium text-orange dark:text-yellow text-[14px] lg:flex lg:grow w-full">
          {title}
        </h2>
        <div className="w-full flex flex-wrap lg:grow gap-[24px] ">
          {items.map((item, index) => (
            <div key={index} className=" flex items-center gap-[12px] ">
              <span className="text-[20px] uppercase">{item}</span>
              <span className="rounded-full w-[10px] h-[10px] bg-orange dark:bg-yellow "></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
