"use client";

import { useState, useMemo } from "react";
import {
  ProjectGrid,
  ProjectPopUp,
} from "@/components/sections/ProjectComponents";
import { Project } from "@/types/project";
import { mySkills } from "@/lib/skills";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTechniqueOpen, setIsTechniqueOpen] = useState(false);

  //for filtering
  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [projects]);

  const availableTechniques = useMemo(() => {
    const techIds = new Set<string>();
    projects.forEach((project) => {
      project.techStack.forEach((id) => techIds.add(id));
    });

    const techniquesMap = new Map<string, { id: string; label: string }>();

    mySkills.forEach((category) => {
      category.skills.forEach((skill) => {
        if (techIds.has(skill.id) && !techniquesMap.has(skill.id)) {
          techniquesMap.set(skill.id, { id: skill.id, label: skill.label });
        }
      });
    });

    return Array.from(techniquesMap.values()).sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  }, [projects]);

  // filter projects based on selected category and techniques
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // filter by techniques
    if (selectedTechniques.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTechniques.every((techId) => project.techStack.includes(techId))
      );
    }

    return filtered;
  }, [projects, selectedCategory, selectedTechniques]);

  const toggleTechnique = (techId: string) => {
    setSelectedTechniques((prev) =>
      prev.includes(techId)
        ? prev.filter((id) => id !== techId)
        : [...prev, techId]
    );
  };

  // clear filters
  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTechniques([]);
  };

  const hasActiveFilters =
    selectedCategory !== "all" || selectedTechniques.length > 0;

  return (
    <>
      <div className="bg-background p-8 rounded-lg shadow-md">
        <div>
          <h4 className="text-3xl font-semibold text-secondary-foreground mb-4 text-center">
            Projects
          </h4>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <button
                onClick={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  setIsTechniqueOpen(false);
                }}
                className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="block truncate">
                  {selectedCategory === "all"
                    ? "All Categories"
                    : selectedCategory.charAt(0).toUpperCase() +
                      selectedCategory.slice(1)}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none mt-8">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              {isCategoryOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        selectedCategory === cat
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {cat === "all"
                        ? "All Categories"
                        : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>


            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Techniques{" "}
                {selectedTechniques.length > 0 &&
                  `(${selectedTechniques.length} selected)`}
              </label>
              <button
                onClick={() => {
                  setIsTechniqueOpen(!isTechniqueOpen);
                  setIsCategoryOpen(false);
                }}
                className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="block truncate">
                  {selectedTechniques.length === 0
                    ? "Select techniques..."
                    : selectedTechniques.length === 1
                    ? availableTechniques.find(
                        (t) => t.id === selectedTechniques[0]
                      )?.label
                    : `${selectedTechniques.length} techniques selected`}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none mt-8">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              {isTechniqueOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {availableTechniques.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => toggleTechnique(tech.id)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 ${
                        selectedTechniques.includes(tech.id)
                          ? "bg-green-50"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                          selectedTechniques.includes(tech.id)
                            ? "bg-green-600 border-green-600"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedTechniques.includes(tech.id) && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={
                          selectedTechniques.includes(tech.id)
                            ? "text-green-700 font-medium"
                            : "text-gray-700"
                        }
                      >
                        {tech.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-2 mt-2 pt-1 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold">{filteredProjects.length}</span>{" "}
              of <span className="font-semibold">{projects.length}</span>{" "}
              projects
            </p>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-6 py-1 bg-secondary text-secondary-foreground rounded-lg hover:opacity-60 transition-opacity"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={setSelectedProject}
            showTechStack={true}
            maxTechShown={3}
            columns={3}
          />
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 mb-2">No projects match your filters</p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {selectedProject && (
          <ProjectPopUp
            project={selectedProject}
            isOpen={true}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
}
