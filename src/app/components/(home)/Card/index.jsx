import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ project }) {
  return (
    <Link href={project.link} className="sticky top-[24px] lg:top-[48px] card-container w-[100%] h-[100vh] lg:px-[72px] pt-[48vh] md:pt-[25vh] lg:pt-[10vh] flex items-center justify-center rounded-md overflow-hidden  ">
      <div
        style={{
          backgroundImage: `url(/img/${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="group w-full h-[300px] md:h-[700px] object-cover rounded-lg relative flex px-[24px] py-[24px] uppercase"
      >
        <div className="flex justify-between w-full h-fit">
          <h4 className="text-[24px] text-white text-center w-fill font-semibold ">
            {project.type}
          </h4>
          <div className=" w-fill hidden lg:flex flex-wrap gap-y-[12px] items-center gap-x-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300">
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
      {/* <img
        src={`/img/${project.image}`}
        className="w-full  h-[500px] lg:h-[700px] object-cover rounded-lg relative"
        alt=""
      /> */}
    </Link>
  );
}
