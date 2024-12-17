"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProjectDescription({ project }) {
  const pathName = usePathname();
  const switchLanguage = (enText, frText) => {
    if (pathName.includes("/en")) {
      return enText;
    } else {
      return frText;
    }
  };
  return (
    project && (
      <div className="col-span-4 flex flex-col gap-[12px] ">
        <div className="flex flex-col gap-[12px] px-[10px] py-[24px]">
          <h2 className="text-[32px] font-medium ">
            {switchLanguage("Overview", "Contexte")}
          </h2>
          <p>{project.overview}</p>
        </div>
        <div className="flex flex-col gap-[12px] px-[10px] py-[24px]">
          <h2 className="text-[32px] font-medium ">Solution</h2>
          <p>{project.solution}</p>
        </div>
        <div className="flex flex-col gap-[12px] px-[10px] py-[24px]">
          <h2 className="text-[32px] font-medium ">Impact</h2>
          <p>{project.impact}</p>
        </div>
      </div>
    )
  );
}
