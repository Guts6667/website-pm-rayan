import Image from "next/image";
import React from "react";

export default function Card({ project }) {
  return (
    <div className="sticky top-[48px] lg:top-[48px] card-container w-[100%] h-[100vh] lg:px-[72px] flex items-center justify-center rounded-md overflow-hidden pt-[120px] ">
      <img
        src={`/img/${project.image}`}
        className="w-full  h-[500px] lg:h-[700px] object-cover rounded-lg relative"
        alt=""
      />
    </div>
  );
}
