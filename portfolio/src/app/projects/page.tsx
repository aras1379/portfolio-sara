// skills chart and projects
import { getProjects } from "@/lib/projects";
import SkillsSection from "@/components/sections/SkillsSection";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-black">My Skills</h1>

        <SkillsSection
          title="My Technical Expertise"
          className="bg-gray-50 mb-16"
        />
        <h2 className="text-2xl font-bold mb-8 text-black">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* TechStack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Meta data */}
                <div className="text-sm text-gray-500">
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
            <p className="text-gray-500">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
