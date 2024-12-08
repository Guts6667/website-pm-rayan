import React from "react";
import ButtonPrimary from "../../ButtonPrimary";

export default function SectionHead({
  title,
  tagline,
  link,
  buttonText,
  style,
}) {
  return (
  
    <div className={`${style} flex flex-col  gap-[24px]`}>
      <div
        className="w-full flex flex-col lg:flex-row justify-between lg:items-end gap-[24px
        ] "
      >
        <div className=" flex flex-col gap-[24px]">
          <h2 className="tracking-[10px] text-orange dark:text-yellow text-[14px] font-medium ps-0 ">
            {title}
          </h2>
          <span className="uppercase text-[40px]">{tagline}</span>
        </div>
        <div>
          <ButtonPrimary text={buttonText} url={link} />
        </div>
      </div>

      <span className="w-full h-[0.5px] bg-black dark:bg-white rounded-full "></span>
    </div>
  );
}
