import React from "react";
import ResumeComponent from "../ResumeComponent";
import { useTranslations } from "next-intl";
import ExperienceList from "../ExperienceList";

export default function ResumeList() {
  const t = useTranslations("AboutPage");
  const toolList = [
    "Photoshop",
    "Lightroom",
    "VS Code",
    "Jira",
    "Notion",
    "ClickUp",
    "Miro",
    "Figma",
    "Twilio/SendGrid/Mailchimp",
    "Sketch",
    "GitHub",
    "Chat GPT",
  ];

  const skillsList = [
    "Software Engineering",
    "Project Management",
    "Product Management",
    "Conflict Management",
    "Business Analysis",
    "Marketing Strategy",
    "Market Analysis",
  ];

  const technicalSkills = [
    "JavaScript/TypeScript",
    "React",
    "React Native",
    "Preact",
    "Next js",
    "MySQL",
    "Mongo DB",
    "Tailwind CSS",
    "NativeWind",
    "Bootstrap",
    "Sass",
    "Jest",
    "Jasmine",
    "Swagger",
    "Netlify",
    "Vercel",
  ];
  const methodsList = ["Agile", "Scrum", "Waterfall", "Lean"];
  return (
    <section className="flex flex-col gap-[24px] px-[24px] lg:px-[48px] ">
      <ResumeComponent title={t("titleTools")} items={toolList} />
      <ResumeComponent title={t("titleSkills")} items={skillsList} />
      <ResumeComponent title={t("titleMethods")} items={methodsList} />
      <ResumeComponent title={t("titleTechSkills")} items={technicalSkills} />
      <ExperienceList />
    </section>
  );
}
