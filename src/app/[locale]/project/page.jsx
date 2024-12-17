
import ProjectContent from "@/app/components/(project)/ProjectContent";
import ProjectCover from "@/app/components/(project)/ProjectCover";

import React from "react";


export default function projectPage() {

  return (
    <main>
      <ProjectCover />
      <ProjectContent  />
    </main>
  );
}
