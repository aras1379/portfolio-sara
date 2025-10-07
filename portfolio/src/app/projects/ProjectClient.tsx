"use client";

import { useState } from "react";
import { ProjectGrid, ProjectPopUp } from "@/components/sections/ProjectComponents";

interface ProjectsClientProps {
  projects: any[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      {/* Projects Grid */}
      <ProjectGrid
        projects={projects}
        onProjectClick={setSelectedProject}
        showTechStack={true}
        maxTechShown={3}
        columns={3}
      />

      {/* Singel project popup */}
      <ProjectPopUp
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}