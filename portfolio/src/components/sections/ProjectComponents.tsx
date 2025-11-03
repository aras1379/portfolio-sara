"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { getSkillById, type Skill } from "@/lib/skills";
import { Project } from "@/types/project";
import Image from "next/image";

// ============================================
// PROJECT CARD COMPONENT
// ============================================

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  showTechStack?: boolean;
  maxTechShown?: number;
}

export const ProjectCard = ({
  project,
  onClick,
  showTechStack = true,
  maxTechShown = 3,
}: ProjectCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const content = (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer border border-gray-200 h-full">
      {project.imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden h-40 bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

      {/* TechStack Tags */}
      {showTechStack && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, maxTechShown).map((skillId) => {
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
          {project.techStack.length > maxTechShown && (
            <span className="text-gray-500 text-xs">
              +{project.techStack.length - maxTechShown} more
            </span>
          )}
        </div>
      )}

      {/* Project Meta data */}
      <div className="text-sm text-gray-600">
        <span className="capitalize">{project.category}</span>
        {project.duration && <span> • {project.duration}</span>}
      </div>
    </div>
  );

  if (onClick) {
    return <div onClick={handleClick}>{content}</div>;
  }

  return <Link href={`/projects/${project.slug}`}>{content}</Link>;
};

// ============================================
// PROJECT GRID COMPONENT
// ============================================

interface ProjectGridProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
  showTechStack?: boolean;
  maxTechShown?: number;
  columns?: 1 | 2 | 3 | 4;
}

export const ProjectGrid = ({
  projects,
  onProjectClick,
  showTechStack = true,
  maxTechShown = 3,
  columns = 3,
}: ProjectGridProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick ? () => onProjectClick(project) : undefined}
          showTechStack={showTechStack}
          maxTechShown={maxTechShown}
        />
      ))}
    </div>
  );
};

// ============================================
// TECH STACK DISPLAY COMPONENT
// ============================================

interface TechStackDisplayProps {
  techStack: string[];
  variant?: "pills" | "bars" | "minimal" | "grid";
  showProficiency?: boolean;
}

export const TechStackDisplay = ({
  techStack,
  variant = "pills",
  showProficiency = false,
}: TechStackDisplayProps) => {
  const skills = techStack
    .map((skillId) => getSkillById(skillId))
    .filter((skill): skill is Skill => skill !== undefined);

  if (variant === "pills") {
    return (
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill.label}
            {showProficiency && ` • ${skill.proficiency}%`}
          </span>
        ))}
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-gray-50 px-3 py-1 rounded">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {skill.label}
              </span>
              {showProficiency && (
                <span className="text-sm text-gray-500">
                  {skill.proficiency}%
                </span>
              )}
            </div>
            {showProficiency && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-gray-50 px-3 py-2 rounded">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">
                {skill.label}
              </span>
              {showProficiency && (
                <span className="text-xs text-gray-500">
                  {skill.proficiency}%
                </span>
              )}
            </div>
            {showProficiency && (
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // minimal variant
  return (
    <div className="space-y-2">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="bg-gray-50 px-3 py-2 rounded text-sm font-medium text-gray-700"
        >
          {skill.label}
        </div>
      ))}
    </div>
  );
};
// ============================================
// PROJECT MODAL COMPONENT
// ============================================

interface ProjectPopUpProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPopUp = ({
  project,
  isOpen,
  onClose,
}: ProjectPopUpProps) => {
  // Add early return if no project
  if (!isOpen || !project) return null;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[75vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 grid grid-rows-auto gap-6">
          {/* Project Header */}
          <div className="mb-6">
            <div className="grid grid-cols-[1fr_auto] gap-4 items-start">

              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/github-mark/github-mark.png"
                    alt="GitHub Logo"
                    width={20}
                    height={20}
                  />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 space-x-7">
  
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Project Info */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">
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
                {project.status && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium capitalize">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>s
            </div>
            <div className="pl-5">
         
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                Tech Stack
              </h3>
              <TechStackDisplay
                techStack={project.techStack}
                variant="bars"
                showProficiency={true}
              />
            </div>
          </div>

          <div>
            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Gallery
                </h3>
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="flex-shrink-0 snap-center">
                        <div className="relative h-64 w-auto rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="h-64 w-auto object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
