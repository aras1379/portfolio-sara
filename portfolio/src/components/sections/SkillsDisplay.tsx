"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  mySkills, 
  type Skill, 
  type SkillCategory,
  getAverageProficiencyByCategory,
  getOverallAverageProficiency
} from "@/lib/skills";

// ============================================
// INDIVIDUAL SKILL COMPONENTS
// ============================================

interface SkillBarProps {
  skill: Skill;
  color: string;
  isVisible: boolean;
}

export const SkillBar = ({ skill, color, isVisible }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.proficiency), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.proficiency]);

  return (
    <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.label}</span>
        <span className="text-xs font-semibold text-gray-500">{width}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

interface SkillCircleProps {
  skill: Skill;
  color: string;
  isVisible: boolean;
}

export const SkillCircle = ({ skill, color, isVisible }: SkillCircleProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.proficiency), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.proficiency]);

  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (width / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-24 h-24">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={color.replace('bg-', 'text-')}
            style={{ transition: 'stroke-dashoffset 1s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-700">{width}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-gray-700 text-center">{skill.label}</span>
    </div>
  );
};

// ============================================
// CATEGORY AVERAGE BAR (with skill tags)
// ============================================

interface CategoryAverageBarProps {
  category: SkillCategory;
  isVisible: boolean;
  showSkillTags?: boolean;
}

export const CategoryAverageBar = ({ category, isVisible, showSkillTags = true }: CategoryAverageBarProps) => {
  const [width, setWidth] = useState(0);
  const avgProficiency = getAverageProficiencyByCategory(category.label);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(avgProficiency), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, avgProficiency]);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{category.label}</h3>
        <span className="text-sm font-medium text-gray-600">{avgProficiency}%</span>
      </div>
      
      {/* Skill Tags */}
      {showSkillTags && (
        <div className="flex flex-wrap gap-2 mb-3">
          {category.skills.map((skill) => (
            <span 
              key={skill.id}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {skill.label}
            </span>
          ))}
        </div>
      )}

      {/* Average Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${category.color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

// ============================================
// FULL CATEGORY SECTION (with individual skills)
// ============================================

interface SkillCategorySectionProps {
  category: SkillCategory;
  isVisible: boolean;
  displayMode?: 'bar' | 'circle';
  showAverage?: boolean;
}

export const SkillCategorySection = ({ 
  category, 
  isVisible, 
  displayMode = 'bar',
  showAverage = true 
}: SkillCategorySectionProps) => {
  const avgProficiency = getAverageProficiencyByCategory(category.label);
  
  return (
    <div className="mb-10 bg-muted p-5 rounded-lg shadow-sm ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center">
          <span className={`w-1 h-8 ${category.color} rounded mr-3`}></span>
          {category.label}
        </h3>
        {showAverage && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Average:</span>
            <span className="text-xl font-bold text-gray-800">{avgProficiency}%</span>
          </div>
        )}
      </div>
      
      {displayMode === 'circle' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {category.skills.map((skill) => (
            <SkillCircle
              key={skill.id}
              skill={skill}
              color={category.color}
              isVisible={isVisible}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.skills.map((skill) => (
            <SkillBar
              key={skill.id}
              skill={skill}
              color={category.color}
              isVisible={isVisible}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================
// SUMMARY STATS COMPONENT
// ============================================

interface SkillsSummaryStatsProps {
  showTotalSkills?: boolean;
  showCategories?: boolean;
  showOverallAvg?: boolean;
}

export const SkillsSummaryStats = ({ 
  showTotalSkills = true,
  showCategories = true,
  showOverallAvg = true
}: SkillsSummaryStatsProps) => {
  const totalSkills = mySkills.reduce((acc, cat) => acc + cat.skills.length, 0);
  const overallAvg = getOverallAverageProficiency();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {showTotalSkills && (
        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
          <div className="text-4xl font-bold text-gray-800">{totalSkills}</div>
          <div className="text-sm text-gray-600 mt-2">Total Technologies</div>
        </div>
      )}
      {showCategories && (
        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
          <div className="text-4xl font-bold text-gray-800">{mySkills.length}</div>
          <div className="text-sm text-gray-600 mt-2">Skill Categories</div>
        </div>
      )}
      {showOverallAvg && (
        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
          <div className="text-4xl font-bold text-gray-800">{overallAvg}%</div>
          <div className="text-sm text-gray-600 mt-2">Overall Proficiency</div>
        </div>
      )}
    </div>
  );
};

// ============================================
// MAIN FULL DISPLAY (with all options)
// ============================================

interface SkillsFullDisplayProps {
  displayMode?: 'bar' | 'circle';
  showToggle?: boolean;
  showCategoryAverage?: boolean;
  showSummaryStats?: boolean;
}

export default function SkillsFullDisplay({ 
  displayMode: initialMode = 'bar',
  showToggle = false,
  showCategoryAverage = true,
  showSummaryStats = true
}: SkillsFullDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayMode, setDisplayMode] = useState<'bar' | 'circle'>(initialMode);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      
      <div className="max-w-6xl mx-auto px-4 bg-background p-8 rounded-lg shadow-md">

        <div className="flex flex-col items-center mb-12">
     
            <h4 className="text-3xl font-semibold text-secondary-foreground mb-4 text-center">
            Skills and Techniques
          </h4>
            <p className="text-primary-foreground text-center">
              My proficiency across different technology domains
            </p>
        
          
          {showToggle && (
            <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setDisplayMode('bar')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  displayMode === 'bar'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Bars
              </button>
              <button
                onClick={() => setDisplayMode('circle')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  displayMode === 'circle'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Circles
              </button>
            </div>
          )}
        </div>

        <div className="space-y-12 ">
          {mySkills.map((category, index) => (
            <SkillCategorySection
              key={index}
              category={category}
              isVisible={isVisible}
              displayMode={displayMode}
              showAverage={showCategoryAverage}
            />
          ))}
        </div>

        {showSummaryStats && (
          <div className="mt-12">
            <SkillsSummaryStats />
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================
// COMPACT VERSION (category averages only)
// ============================================

interface SkillsCompactDisplayProps {
  showSkillTags?: boolean;
}

export function SkillsCompactDisplay({ showSkillTags = true }: SkillsCompactDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="max-w-4xl mx-auto">
        {mySkills.map((category, index) => (
          <CategoryAverageBar
            key={index}
            category={category}
            isVisible={isVisible}
            showSkillTags={showSkillTags}
          />
        ))}
      </div>
    </section>
  );
}




