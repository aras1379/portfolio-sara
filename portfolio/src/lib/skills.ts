// Skills

export interface Skill{
  id: string;
  label: string;
  proficiency: number;

}
export interface SkillCategory {
  label: string;
  color: string;
  skills: Skill[];
  projects?: string[];
}

// /data/skills.ts

export const mySkills: SkillCategory[] = [
  {
    label: 'Frontend',
    color: 'bg-blue-500',
    skills: [
      { id: 'react', label: 'React', proficiency: 40 },
      { id: 'next-js', label: 'Next.js', proficiency: 45 },
      { id: 'typescript', label: 'TypeScript', proficiency: 35 },
      { id: 'tailwind-css', label: 'Tailwind CSS', proficiency: 45 },
      { id: 'swift', label: 'Swift', proficiency: 55 }, // Added from your project
    ],
  },
  {
    label: 'Backend',
    color: 'bg-green-500',
    skills: [
      { id: 'node-js', label: 'Node.js', proficiency: 40 },
      { id: 'python', label: 'Python', proficiency: 55 },
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




// Skills grouped by category
export const skillCategories = {
  technical: mySkills.filter(skill => 
    ['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile'].includes(skill.label)
  ),
  creative: mySkills.filter(skill => 
    skill.label === 'Design & UI/UX'
  ),
  tools: [
    'VS Code', 'Git', 'Figma', 'Docker', 'Scrum', 'Jira',
  ]
};

const allSkills = mySkills.flatMap((category) => category.skills);

export const SKILLS_MAP = new Map<string, Skill>(
  allSkills.map((skill) => [skill.id, skill])
);

// Helper function to easily get a skill's data by its ID
export const getSkillById = (id: string): Skill | undefined => {
  return SKILLS_MAP.get(id);
};

// Helper function to get the average proficiency for a skill category
export const getAverageProficiencyByCategory = (categoryLabel: string): number => {
  const category = mySkills.find(cat => cat.label === categoryLabel);
  if (!category || category.skills.length === 0) {
    return 0;
  }

  const totalProficiency = category.skills.reduce((sum, skill) => sum + skill.proficiency, 0);
  return Math.round(totalProficiency / category.skills.length);
};