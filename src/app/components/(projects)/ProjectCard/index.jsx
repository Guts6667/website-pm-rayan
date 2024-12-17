import { usePathname } from "next/navigation";
import React from "react";

export default function ProjectCard({ project }) {
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
      <div className=" h-fit col-span-2 bg-gradient-to-b from-orange to-yellow dark:bg-gradient-to-b dark:from-yellow dark:to-orange   flex flex-col py-[24px] px-[12px] gap-[24px] rounded-md !uppercase !font-medium ">
        <h2 className="text-[20px] lg:text-[24px] ">
          {switchLanguage("Project Details", "Détails du Projet")}
        </h2>
        <div className="flex justify-between pt-[12px] border-t-[0.5px] border-black dark:border-white text-[12px] lg:text-[14px]  ">
          <h3 className="flex-grow w-full">Client</h3>
          <p className="flex-grow w-full justify-end text-right lg:text-[16px] ">
            {project.client}
          </p>
        </div>
        <div className="flex justify-between pt-[12px] border-t-[0.5px] border-black dark:border-white text-[12px] lg:text-[14px]">
          <h3 className="flex-grow w-full ">Date</h3>
          <p className="flex-grow w-full justify-end text-right lg:text-[16px]">
            {project.date}
          </p>
        </div>
        <div className="flex justify-between pt-[12px] border-t-[0.5px] border-black dark:border-white text-[12px] lg:text-[14px]">
          <h3 className="flex-grow w-full ">Services</h3>
          <div className="flex flex-wrap flex-grow justify-end w-full text-right gap-[6px] lg:text-[16px]">
            {project.services.map((service, index) => (
              <p className="" key={index}>
                {service}
                {index < project.services.length - 1 ? "," : ""}{" "}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between pt-[12px] border-t-[0.5px] border-black dark:border-white text-[12px] lg:text-[14px]">
          <h3>Budget</h3>
          <p>{project.budget}</p>
        </div>
      </div>
    )
  );
}
