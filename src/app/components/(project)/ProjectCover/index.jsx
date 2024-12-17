"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../ButtonPrimary";
import { usePathname } from "next/navigation";

export default function ProjectCover() {
  const projectDate = JSON.parse(localStorage.getItem("project"));
  const [project, setProject] = useState(undefined);
  
 
const path = usePathname();
  
  useEffect(() => {
    setProject(projectDate);
    localStorage.removeItem("project");
  }, []);
  return project ? (
    <section
      style={{ backgroundImage: `url(/img/${project.image})` }}
      className="flex flex-col justify-end   min-h-[100vh] bg-cover bg-center bg-no-repeat w-full pt-[96px] pb-[24px] lg:pb-[48px]  px-[24px] lg:px-[48px] "
    >
      <h1 className="text-[40px] font-medium uppercase ">{project.client}</h1>
      <div className="flex flex-wrap w-full gap-y-[12px] gap-x-[24px] ">
        {project.tags.map((item, index) => (
          <div
            key={index}
            className="h-fit flex items-center justify-center font-semibold text-white text-[14px] px-3 py-1.5 bg-light-blurry dark:bg-dark-blurry backdrop-blur-[6px] py-[6px] px-[12px] rounded-md "
          >
            <span className="uppercase">{item}</span>
          </div>
        ))}
      </div>
    </section>
  ) : (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center gap-[24px]">
        <h1 className="uppercase text-[40px]">{path.includes("en")? 'Project Not Found': "Impossible de trouver le projet"} </h1>
        <ButtonPrimary text={path.includes("en") ? "Go Back" : "Retour" } url={"/projects"} />
    </section>
    
  );
}
