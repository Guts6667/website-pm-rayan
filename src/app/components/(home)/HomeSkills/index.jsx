import React from "react";
import SectionHead from "../SectionHead";
import SkillCard from "../SkillCard";

export default function HomeSkills({t}) {
  const skills = [
    {
      title: "Strategy",
      skills: [
        "Discovery",
        "Research",
        "Analysis",
        "Consultation",
        "Optimization",
      ],
    },
    {
      title: "Design",
      skills: [
        "UI/UX",
        "Wireframing",
        "Prototyping",
        "Mockups",
        "User Testing",
      ],
    },
    {
      title: "Development",
      skills: ["Frontend", "Backend", "Full Stack", "Mobile", "Web"],
    },
    {
      title: "Development",
      skills: ["Frontend", "Backend", "Full Stack", "Mobile", "Web"],
    },
  ];

  return (
    <section className="px-[24px] lg:px-[48px] flex flex-col items-center gap-[48px] relative">
      <SectionHead
        title="Sets of Skills"
        tagline="Skills tailored to you needs"
        link={"/contact"}
        buttonText={"Let's Talk"}
        style={"w-full"}
      />
      <div className="w-full h-[100vh] flex flex-col lg:flex-row gap-[24px] lg:gap-[48px] xl:px-[72px] lg:items-center justify-between ">
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
