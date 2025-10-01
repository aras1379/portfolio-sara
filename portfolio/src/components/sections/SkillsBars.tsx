"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { mySkills, type SkillCategory, getAverageProficiencyByCategory, Skill } from "@/lib/skills";

import SkillsRadarChart from "./SkillsChart";


interface SkillBarProps {
  category: SkillCategory;
  isVisible: boolean;
}

const SkillBar = ({ category, isVisible }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const avgProficiency = getAverageProficiencyByCategory(category.label);
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(avgProficiency);
      }, 100);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">{category.label}</h3>
        <span className="text-sm font-medium text-white">{avgProficiency}%</span>
      </div>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-3">
        {category.skills.slice(0, 10).map((skill, index) => (
          <span 
            key={index}
            className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
          >
            {skill.label}
          </span>
        ))}
        {category.skills.length > 9 && (
          <span className="text-xs text-emerald-600">
            +{category.skills.length - 9} more
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${category.color}`}
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
};

export default function SkillsBars() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="py-20 relative z-[0]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Skills & Expertise
        </h2>
        <p className="text-center text-white mb-12">
          My proficiency across different technology domains
        </p>

        <div className="space-y-6 text-white">
          {mySkills.map((skill, index) => (
            <SkillBar key={index} category={skill} isVisible={isVisible} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-white">
              {mySkills.reduce((acc, category) => acc + category.skills.length, 0)}
            </div>
            <div className="text-sm text-white">Technologies</div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-900">
              {mySkills.length}
            </div>
            <div className="text-sm text-emerald-700">Skill Areas</div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-900">
              {Math.round(mySkills.reduce((total, category) => {
                const categoryAvg = getAverageProficiencyByCategory(category.label);
                return total + categoryAvg;
              }, 0) / mySkills.length)}%
            </div>
            <div className="text-sm text-emerald-700">Avg Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
}