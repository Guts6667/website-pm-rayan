"use client";
import React, { useEffect, useState } from "react";
import SkillCard from "../SkillCard";
import SectionHead from "../SectionHead";
import skillsFr from "/public/skills/skillsFr.json";
import skillsEn from "/public/skills/skillsEn.json";

export default function HomeSkills({ content }) {
  // Let's check the url for the locale so we can use skillsEn or skillsFr by verifying if the path contains /fr/
  let locale = window.location.pathname.includes("en") ? "en" : "fr";
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    if (locale.includes("en")) {
      setSkills(skillsEn);
    } else {
      setSkills(skillsFr);
    }
  }, [locale]);

  return (
    <section className="px-[24px] lg:px-[48px] flex flex-col items-center gap-[48px] relative">
      {content && (
        <SectionHead
          title={content.title}
          tagline={content.tagline}
          link={"/contact"}
          buttonText={content.buttonText}
          style={"w-full"}
        />
      )}

      <div className="w-full h-full lg:h-[100vh] flex flex-col xl:grid xl:grid-cols-4 gap-[24px] lg:gap-[48px] xl:px-[72px] lg:items-center justify-between ">
        {skills.map((skill, index) => {
          const randomRotate = Math.floor(Math.random() * 15) - 10;
          // const randomDelay = (Math.random() * 1.5) - 0.5;
          return (
            <SkillCard
              key={index}
              title={skill.title}
              skills={skill.skills}
              number={index + 1}
              rotation={randomRotate}
              // delay={randomDelay}
            />
          );
        })}
      </div>
    </section>
  );
}
