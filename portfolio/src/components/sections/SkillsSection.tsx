"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { mySkills, type SkillCategory } from "@/lib/skills";

import SkillsRadarChart from "./SkillsChart";

interface SkillsSectionProps {
  title?: string;
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "Technical Skills Radar",
  className = "",
}) => {
  const router = useRouter();

  const handleSkillClick = (skill: SkillCategory) => {
    console.log("Skill clicked:", skill);
    router.push(`/projects?skill=${skill.label.toLowerCase()}`);
  };

  try {
    return (
      <section className={`py-16 px-4 bg-white ${className}`}>
        <div className="max-w-6xl mx-auto">
          <SkillsRadarChart
            skills={mySkills}
            title={title}
            onSkillClick={handleSkillClick}
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error("SkillsSection error:", error);
    return (
      <section className={`py-16 px-4 bg-red-100 ${className}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-800">
            Error Loading Skills
          </h2>
          <p className="text-red-600">Check console for details</p>
        </div>
      </section>
    );
  }
};

export default SkillsSection;
