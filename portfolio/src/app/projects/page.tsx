// skills chart and projects

import { getProjects } from "@/lib/projects";
import { getSkillById } from "@/lib/skills";
import Link from "next/link";

import SkillsBars from "@/components/sections/SkillsBars";
import ClientAuroraWrapper from "@/components/sections/AuroraWrapper";
import ClientGradientWrapper from "@/components/sections/WrapperClient"; 

export default async function ProjectsPage() {
  const projects = await getProjects();
  

  return (
    <div className="bg-background text-foreground relative">
  
       <ClientGradientWrapper/>

        <header className="text-center mb-16 relative z-[30] pt-17">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Sara Ljung
          </h1>
          </header>
      <div className="relative max-w-6xl mx-auto px-4 py-8 mb-16 relative z-[30]">


        <SkillsBars></SkillsBars>

    
        <h2 className="text-2xl font-bold mb-8 text-foreground">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer border border-border">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                {/* TechStack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((skillId) => {
                    const skill = getSkillById(skillId);
                    return skill ? (
                      <span
                        key={skill.id}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill.label}
                      </span>
                    ) : null;
                  })}
                  {project.techStack.length > 3 && (
                    <span className="text-secondary-foreground text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Meta data */}
                <div className="text-sm text-secondary-foreground">
                  <span className="capitalize">{project.category}</span>
                  {project.duration && <span> • {project.duration}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* if no projects*/}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary-foreground">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
