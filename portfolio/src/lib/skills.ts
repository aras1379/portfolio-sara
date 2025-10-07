// SKILLS DATA

export interface Skill {
  id: string;
  label: string;
  proficiency: number;
}

export interface SkillCategory {
  label: string;
  color: string;
  skills: Skill[];
}

export const mySkills: SkillCategory[] = [
  {
    label: 'Frontend',
    color: 'bg-blue-500',
    skills: [
      { id: 'react', label: 'React', proficiency: 40 },
      { id: 'next-js', label: 'Next.js', proficiency: 45 },
      { id: 'typescript', label: 'TypeScript', proficiency: 35 },
      { id: 'tailwind-css', label: 'Tailwind CSS', proficiency: 45 },
      { id: 'swift', label: 'Swift', proficiency: 55 },
      { id: 'react-native', label: 'React Native', proficiency: 50 },
    ],
  },
  {
    label: 'Backend',
    color: 'bg-green-500',
    skills: [
      { id: 'node-js', label: 'Node.js', proficiency: 40 },
      { id: 'python', label: 'Python', proficiency: 55 },
      { id: 'sqlite', label: 'SQLite', proficiency: 50 },
    ],
  },
  {
    label: 'Tools & DevOps',
    color: 'bg-gray-500',
    skills: [
      { id: 'git', label: 'Git & GitHub', proficiency: 70 },
      { id: 'docker', label: 'Docker', proficiency: 35 },
      { id: 'figma', label: 'Figma', proficiency: 60 },
    ],
  },
];

// Create a flat map of all skills
const allSkills = mySkills.flatMap((category) => category.skills);
export const SKILLS_MAP = new Map<string, Skill>(
  allSkills.map((skill) => [skill.id, skill])
);


// Helper to get skill by ID
export const getSkillById = (id: string): Skill | undefined => {
  return SKILLS_MAP.get(id);
};

// Helper to get skills for a project
export const getSkillsForProject = (skillIds: string[]): Skill[] => {
  return skillIds
    .map(id => SKILLS_MAP.get(id))
    .filter((skill): skill is Skill => skill !== undefined);
};

// Helper to get projects using a specific skill
export const getProjectsUsingSkill = (skillId: string, projects: any[]): any[] => {
  return projects.filter(project => 
    project.techStack.includes(skillId)
  );
};

// Get average proficiency for a skill category
export const getAverageProficiencyByCategory = (categoryLabel: string): number => {
  const category = mySkills.find(cat => cat.label === categoryLabel);
  if (!category || category.skills.length === 0) {
    return 0;
  }
  const totalProficiency = category.skills.reduce((sum, skill) => sum + skill.proficiency, 0);
  return Math.round(totalProficiency / category.skills.length);
};

// Get overall average proficiency across all skills
export const getOverallAverageProficiency = (): number => {
  const total = mySkills.reduce((sum, category) => {
    return sum + getAverageProficiencyByCategory(category.label);
  }, 0);
  return Math.round(total / mySkills.length);
};