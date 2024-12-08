"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import projectCardEn from "/public/projects/en/project-en.json";
import projectCardFr from "/public/projects/fr/project-fr.json";
import ButtonPrimary from "../../ButtonPrimary";
import SectionHead from "../SectionHead";
export default function HomeProjects({locale, content}) {
  // Let's verify the locale to determine which project card to display
const projectCard = locale === "en" ? projectCardEn : projectCardFr;
  
  return (
    <section className=" px-[24px] lg:px-[48px] relative ">
        <SectionHead style={"sticky top-[120px]"} title={content.title} tagline={content.tagline} link="/projects" buttonText={content.buttonText} />
      {projectCard.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </section>
  );
}
