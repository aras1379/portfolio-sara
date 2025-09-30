"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { motion, useInView } from "framer-motion";
import { mySkills, type SkillCategory } from "@/lib/skills";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillsRadarChartProps {
  skills: SkillCategory[];
  title?: string;
  onSkillClick?: (skill: SkillCategory) => void;
  className?: string;
}

export const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({
  skills = mySkills,
  title = "Skills & Expertise",
  onSkillClick,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [animatedData, setAnimatedData] = useState<number[]>(
    new Array(skills.length).fill(0)
  );
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(
    null
  );
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Animate the chart data when it comes into view
  useEffect(() => {
    if (isInView && !isAnimationComplete) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 fps
      const stepDuration = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Smooth easing

        setAnimatedData(
          skills.map((skill) => Math.round(skill.proficiency * easeOutQuart))
        );

        if (currentStep >= steps) {
          clearInterval(interval);
          setIsAnimationComplete(true);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isInView, skills, isAnimationComplete]);

  const chartData = {
    labels: skills.map((skill) => skill.label),
    datasets: [
      {
        label: "Proficiency Level",
        data: animatedData,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        pointBackgroundColor: skills.map((skill) => skill.color),
        pointBorderColor: skills.map((skill) =>
          skill.color.replace("0.6", "1")
        ),
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "rgba(156, 163, 175, 0.7)",
          font: {
            size: 12,
          },
          callback: function (value) {
            return value + "%";
          },
        },
        grid: {
          color: "rgba(156, 163, 175, 0.3)",
        },
        angleLines: {
          color: "rgba(156, 163, 175, 0.3)",
        },
        pointLabels: {
          color: "rgba(55, 65, 81, 1)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(59, 130, 246, 0.5)",
        borderWidth: 1,
        callbacks: {
          title: (context) => {
            const skillIndex = context[0].dataIndex;
            return skills[skillIndex].label;
          },
          label: (context) => {
            const skillIndex = context.dataIndex;
            const skill = skills[skillIndex];
            return [
              `Proficiency: ${skill.proficiency}%`,
              "",
              "Technologies:",
              ...skill.technologies.map((tech) => `• ${tech}`),
            ];
          },
        },
      },
    },
    onHover: (event, elements) => {
      if (elements.length > 0) {
        const skillIndex = elements[0].index;
        setSelectedSkill(skills[skillIndex]);
      } else {
        setSelectedSkill(null);
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const skillIndex = elements[0].index;
        const skill = skills[skillIndex];
        onSkillClick?.(skill);
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={`w-full ${className}`}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">
            Interactive visualization of my technical expertise
          </p>
        </motion.div>

        {/* Chart Container */}
        <div className="relative">
          <motion.div
            className="h-96 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Radar data={chartData} options={options} />
          </motion.div>

          {/* Animation Overlay */}
          {!isAnimationComplete && isInView && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Analyzing skills...</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Skill Details */}
        {selectedSkill && (
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {selectedSkill.label} - {selectedSkill.proficiency}%
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {selectedSkill.projects && (
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Related Projects:
                  </h4>
                  <ul className="space-y-1">
                    {selectedSkill.projects.map((project, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        • {project}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Legend */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => onSkillClick?.(skill)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: skill.color.replace("0.6", "1") }}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p>
            Hover over the chart points for details • Click skill areas to
            filter projects
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsRadarChart;
