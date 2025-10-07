"use client";

import { useState } from "react";
import { ProjectGrid, ProjectPopUp } from "@/components/sections/ProjectComponents";
import { Project } from "@/types/project";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

      {/* Single project popup - only render when project exists */}
      {selectedProject && (
        <ProjectPopUp
          project={selectedProject}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
