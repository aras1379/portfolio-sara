"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { getSkillById, type Skill } from "@/lib/skills";

// ============================================
// PROJECT CARD COMPONENT
// ============================================

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    description: string;
    techStack: string[];
    category: string;
    duration?: string;
    imageUrl?: string;
  };
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
  projects: any[];
  onProjectClick?: (project: any) => void;
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
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPopUp = ({ project, isOpen, onClose }: ProjectPopUpProps) => {
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-white/30"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
          <div className="flex-1">
            <div className="mb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-lg text-gray-600 mt-2">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Full Description */}
              {project.fullDescription && (
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">About</h3>
                  <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="text-gray-700">{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Key Learnings</h3>
                  <ul className="space-y-2">
                    {project.learnings.map((learning: string, index: number) => (
                      <li key={index} className="text-gray-700">{learning}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
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
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Tech Stack</h3>
                <TechStackDisplay 
                  techStack={project.techStack} 
                  variant="minimal"
                  showProficiency={false}
                />
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Project Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium capitalize">{project.status}</span>
                  </div>
                  {project.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Team Size:</span>
                      <span className="font-medium">{project.teamSize}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium capitalize">{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};