import React from "react";
import { BackgroundGradientAnimation } from "../../BackgroundGradientAnimation";
import ButtonPrimary from "../../ButtonPrimary";

export default function HomeAbout({ t }) {
  return (
    <section className="relative h-fit lg:h-[80vh] w-full flex  items-center justify-center overflow-hidden  py-[24px] px-[24px] lg:p-[144px]   ">
      <div className=" text-center z-20 flex flex-col items-center justify-center gap-[24px] h-full w-full  bg-light-blurry dark:bg-dark-blurry backdrop-blur-[100px]  pt-[36px] pb-[24px] lg:pt-[96px] lg:pb-[72px] px-[12px] lg:px-[48px]  rounded-md ">
        <h2 className="tracking-[10px] font-medium text-orange dark:text-yellow text-[14px] ">
          {t("titleAbout")}
        </h2>
        <p className="dark:text-white text-[1.4rem] xl:text-[2.5rem] uppercase ">
          {t("textAbout")}
        </p>
        <ButtonPrimary text={t("buttonAbout")} url="/about" />
      </div>
      <BackgroundGradientAnimation />
    </section>
  );
}
