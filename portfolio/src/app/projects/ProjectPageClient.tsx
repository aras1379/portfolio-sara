"use client";

import SkillsFullDisplay from "@/components/sections/SkillsDisplay";
import ClientGradientWrapper from "@/components/sections/WrapperClient";
import ProjectsClient from "./ProjectClient";
import { Project } from "@/types/project";

interface ProjectPageClientProps {
  projects: Project[];
}

export default function ProjectPageClient({ projects }: ProjectPageClientProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-background text-foreground relative">
      <div className="fixed inset-0 z-[5]">
        <ClientGradientWrapper />
      </div>

      <div className="relative z-[10]">
        <header className="text-center mb-10 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-background mb-1">
            Portfolio
          </h1>
        </header>

        <div className="max-w-6xl mx-auto px-8 mb-16">
          <div className="flex justify-center items-center text-lg text-primary-foreground text-center mb-10">
            Below you can find projects I have worked with in the last years, both in my free time and during my education. 
            Click on a project to get more information. 
            <br/>
            Further down the techniques I have used and have varying experience in is listed with a percentage of how comfortable I feel with the language/technique. 
            This is estimated by myself and should not be seen as a hard truth, but rather an estimated level by a junior developer. 
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection("project-section")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Jump to Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills-section")}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Jump to Skills
            </button>
          </div>

          <section id="project-section">
            

            <ProjectsClient projects={projects} />

            {projects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-secondary-foreground">No projects found.</p>
              </div>
            )}
          </section>
        </div>

        <section id="skills-section" className="max-w-6xl mx-auto px-4 py-2 mb-7">
          <SkillsFullDisplay
            displayMode="circle"
            showToggle={false}
            showCategoryAverage={true}
            showSummaryStats={false}
          />
        </section>
      </div>
    </div>
  );
}