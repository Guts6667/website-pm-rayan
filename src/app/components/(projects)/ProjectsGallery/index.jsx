"use client";
import React from "react";
import projectCardEn from "/public/projects/en/project-en.json";
import projectCardFr from "/public/projects/fr/project-fr.json";
import { Link } from "@/i18n/routing";

export default function ProjectsGallery({ locale }) {
  const projectCard = locale === "en" ? projectCardEn : projectCardFr;
  const saveProject = (project) => {
    localStorage.setItem("project", JSON.stringify(project));
  };

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-2 gap-[24px] w-full h-[100vh] overflow-hidden px-[24px] lg:px-[48px] group">
      {projectCard.map((project, index) => (
        <Link
          onClick={() => saveProject(project)}
          href={`/project`}
          key={index}
          style={{ backgroundImage: `url(/img/${project.image})` }}
          className="bg-cover bg-center bg-no-repeat hover:scale-105 w-full h-[600px] lg:h-auto rounded-md p-[12px] lg:p-[24px] transition-all duration-300 group-hover:blur-sm hover:!blur-none"
        >
          <div className="flex justify-between">
            <h4 className="text-[24px] text-white text-left flex-grow font-semibold ">
              {project.type}
            </h4>
            <div className="flex-grow hidden lg:flex flex-wrap gap-y-[12px] justify-end items-center gap-x-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300">
              {project.tags.map((item, index) => (
                <div
                  key={index}
                  className="h-fit flex items-center justify-center font-semibold text-white text-[14px] px-3 py-1.5 bg-light-blurry dark:bg-dark-blurry backdrop-blur-[6px] py-[6px] px-[12px] rounded-md "
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
