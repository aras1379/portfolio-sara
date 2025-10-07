"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { getSkillById, type Skill } from "@/lib/skills";
import { Project } from "@/types/project";

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
  maxTechShown = 3 
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
      <p className="text-gray-600 mb-4 text-sm">
        {project.description}
      </p>

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

  return (
    <Link href={`/projects/${project.slug}`}>
      {content}
    </Link>
  );
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
  columns = 3
}: ProjectGridProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
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
  variant?: 'pills' | 'bars' | 'minimal';
  showProficiency?: boolean;
}

export const TechStackDisplay = ({ 
  techStack, 
  variant = 'pills',
  showProficiency = false 
}: TechStackDisplayProps) => {
  const skills = techStack
    .map(skillId => getSkillById(skillId))
    .filter((skill): skill is Skill => skill !== undefined);

  if (variant === 'pills') {
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

  if (variant === 'bars') {
    return (
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.label}</span>
              {showProficiency && (
                <span className="text-sm text-gray-500">{skill.proficiency}%</span>
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

export const ProjectPopUp = ({ project, isOpen, onClose }: ProjectPopUpProps) => {
  // Add early return if no project
  if (!isOpen || !project) return null;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-white/30">
      <div  className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6">
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <p className="text-gray-600 mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <TechStackDisplay
              techStack={project.techStack}
              variant="pills"
              showProficiency={false}
            />
          </div>

          {/* Project details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Category:</span>{" "}
              <span className="capitalize">{project.category}</span>
            </div>
            {project.duration && (
              <div>
                <span className="font-semibold">Duration:</span> {project.duration}
              </div>
            )}
          </div>

          {/* Links if available */}
 
        </div>
      </div>
    </div>
  );
};