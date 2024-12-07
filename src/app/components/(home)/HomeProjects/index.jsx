"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import projectCard from "/public/projects/en/project-en.json";
import ButtonPrimary from "../../ButtonPrimary";
export default function HomeProjects() {
  return (
    <section className=" px-[24px] lg:px-[48px] relative ">
      <div className="sticky top-[120px] flex flex-col  gap-[24px] ">
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-end gap-[24px
        ] ">
          <div className=" flex flex-col gap-[24px]">
            <h2 className="tracking-[10px] text-orange dark:text-yellow text-[14px] ps-0 ">
              CASE STUDIES
            </h2>
            <span className="uppercase text-[40px]">A peek into my work</span>
          </div>
          <div>
            <ButtonPrimary text="View all" url="/projects" />
          </div>
        </div>

        <span className="w-full h-[0.5px] bg-black dark:bg-white rounded-full "></span>
      </div>

      {projectCard.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </section>
  );
}
