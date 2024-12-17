"use client";
import React, { useEffect, useState } from "react";

export default function Project() {
  const project = JSON.parse(localStorage.getItem("project"));
  const [projectData, setProjectData] = useState(project);
  useEffect(() => {
    console.log(project);
    setProjectData(project);
    localStorage.removeItem("project");
  }, []);
  return projectData ? (
    <h1>{projectData.client}</h1>
  ) : (
    <h1>Project not found</h1>
  );
}
