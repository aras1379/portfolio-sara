//PROJECTS AND TECHNIQUES 
import { getProjects } from "@/lib/projects";
import SkillsFullDisplay from "@/components/sections/SkillsDisplay";
import ClientGradientWrapper from "@/components/sections/WrapperClient";
import ProjectsClient from "./ProjectClient";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-background text-foreground relative">
      <div className="fixed inset-0 z-[5]">
        <ClientGradientWrapper />
      </div>

      <div className="relative z-[10]">
        <header className="text-center mb-10 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-1">
            Portfolio and Techniques
          </h1>
        </header>

        <div className="max-w-6xl mx-auto px-8 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
            <p className="text-gray-600 mb-4">My projects</p>
          </div>

          <ProjectsClient projects={projects} />

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-foreground">No projects found.</p>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto px-4 py-2 mb-7">
          <SkillsFullDisplay
            displayMode="circle"
            showToggle={false}
            showCategoryAverage={true}
            showSummaryStats={false}
          />
        </div>
      </div>
    </div>
  );
}
