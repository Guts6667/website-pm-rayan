import React from "react";
import ButtonPrimary from "../../ButtonPrimary";
import { BackgroundGradientAnimation } from "../../BackgroundGradientAnimation";

export default function FooterBanner({ title, text, textSmall, button }) {
  return (
    <div className="relative h-fit lg:h-[100vh] w-full flex  items-center justify-center overflow-hidden  py-[24px] px-[24px] lg:p-[144px]   ">
      <div className=" text-center z-20 flex flex-col items-center justify-center gap-[24px] h-full w-full  bg-light-blurry dark:bg-dark-blurry backdrop-blur-[100px]  pt-[36px] pb-[24px] lg:pt-[96px] lg:pb-[72px] px-[12px] lg:px-[48px]  rounded-md ">
        <h2 className="uppercase tracking-[10px] font-medium text-orange dark:text-yellow text-[14px] ">
          {title}
        </h2>
        <p className="dark:text-white text-[1.4rem] xl:text-[2.5rem] uppercase ">
          {text}
        </p>
        <p className="dark:text-white text-[14px] uppercase "> {textSmall}</p>
        <ButtonPrimary text={button} url="/contact" />
      </div>
      <BackgroundGradientAnimation />
    </div>
  );
}
