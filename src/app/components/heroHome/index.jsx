import React from "react";
import HeroImg from "../heroImage";

export default function HeroHome() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center gap-[6px] px-[24px] py-[48px]">
      <div className="relative w-[60vw] lg:w-[40vw] xl:w-[25vw] aspect-[4/3] ">
        <HeroImg src="/img/picture-rayan.png" alt="Rayan" />
        <p className="text-center absolute bottom-[-48px]">
        AN INTERNATIONAL PRODUCT MANAGER & SOFTWARE ENGINEER BASED IN PARIS
      </p>
      </div>
     
    </section>
  );
}