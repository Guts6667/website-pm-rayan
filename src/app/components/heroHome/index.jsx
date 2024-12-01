import React from "react";
import HeroImg from "../heroImage";

export default function HeroHome() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center gap-[6px] px-[24px] py-[48px]">
      <div className="relative w-full max-w-[500px] aspect-[4/3] ">
        <HeroImg src="/img/picture-rayan.png" alt="Rayan" />
        <p className="text-center absolute end-1.5">
        AN INTERNATIONAL PRODUCT MANAGER & SOFTWARE ENGINEER BASED IN PARIS
      </p>
      </div>
     
    </section>
  );
}