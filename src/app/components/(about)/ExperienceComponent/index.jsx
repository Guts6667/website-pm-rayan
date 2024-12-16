import React from "react";

export default function ExperienceComponent({ title, company, date }) {
  return (
    <div className="flex flex-col  gap-[12px] ">
      <h3 className="text-[20px] uppercase">{title}</h3>
      <p className="uppercase text-black/50 dark:text-white/50">At {company}</p>
      <p className="uppercase text-black/50 dark:text-white/50">{date}</p>
    </div>
  );
}
