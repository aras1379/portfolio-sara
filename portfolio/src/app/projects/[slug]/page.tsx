//Single project cards

import { getProject, getProjects } from "@/lib/projects";
import { getSkillById } from "@/lib/skills";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Gallery</h2>
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-center"
                  >
                    <div className="relative h-64 w-auto rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
                        style={{ width: 'auto', height: '256px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                Tech Stack
              </h3>
              <div className="space-y-2">
                {project.techStack.map((skillId) => {
                  const skill = getSkillById(skillId);
                  return skill ? (
                    <div
                      key={skill.id}
                      className="bg-gray-50 px-3 py-2 rounded text-sm font-medium text-gray-700"
                    >
                      {skill.label}
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                Project Info
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                {project.duration && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}