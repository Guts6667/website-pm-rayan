"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../(projects)/ProjectCard";
import ProjectDescription from "../ProjectDescription";


export default function ProjectContent() {
  const projectDate = JSON.parse(localStorage.getItem("project"));
  const [project, setProject] = useState(undefined);
  useEffect(() => {
    setProject(projectDate);
    localStorage.removeItem("project");
  }, []);
  return (
    <section 
    className=" flex flex-col gap-[24px] lg:gap-[48px] lg:grid grid-cols-6 px-[24px] lg:px-[48px] py-[24px]  ">
      <ProjectCard project={project}
     
      />
      <ProjectDescription project={project} />
    </section>
  );
}
