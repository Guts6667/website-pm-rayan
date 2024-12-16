import AboutHero from "@/app/components/(about)/AboutHero";
import ResumeList from "@/app/components/(about)/ResumeList";
import React from "react";

export default function About() {

  return (
    <main className="flex flex-col items-center gap-[24px] lg:gap-[48px] pt-[24px]">
      <AboutHero />
      <ResumeList />
    </main>
  );
}
