// Skills

export interface SkillCategory {
  label: string;
  proficiency: number;
  technologies: string[];
  color: string;
  projects?: string[];
}

export const mySkills: SkillCategory[] = [
  {
    label: 'Frontend',
    proficiency: 40, 
    technologies: [
      'React', 
      'Next.js', 
      'Node.js',
      'TypeScript', 
      'Tailwind CSS', 
      'Svelte',
      'CSS'
    ],
    color: 'rgba(59, 130, 246, 0.6)', 
    projects: [
      'Personal Portfolio Website',
      'Jönköpings City Website',
      'Earlier portfolios',

    ]
  },
  {
    label: 'Backend',
    proficiency: 50,
    technologies: [
        'Python', 
        'C++',
        'TypeScript',
        'JavaScript',
        'Node.js', 
        'Express.js', 
        'FastAPI',
        'REST APIs',
        'WebSockets',
    ],
    color: 'rgba(16, 185, 129, 0.6)', 
    projects: [
      'Thesis with statistical analysis in Python',
      'Inventory API',
      'Real-time communication robot-mobile',
      'Tic Tac Toe game'
    ]
  },
  {
    label: 'Database',
    proficiency: 30,
    technologies: [
      'SQLite', 
      'MongoDB', 
    ],
    color: 'rgba(245, 158, 11, 0.6)', 
    projects: [
      'Inventory database',
      'Analytics Dashboard',
      'User Data Analytics'
    ]
  },
  {
    label: 'DevOps',
    proficiency: 35,
    technologies: [
      'Docker', 
      'Locust', 
      'Selenium', 
      'GitHub Actions', 
      'CI/CD Pipelines',
      'Kubernetes',
    ],
    color: 'rgba(239, 68, 68, 0.6)', 
    projects: [
      'Automated Deployment Pipeline',
      'Cloud Infrastructure Setup',
      'Container Orchestration',
      'Performance Monitoring'
    ]
  },
  {
    label: 'Mobile',
    proficiency: 60,
    technologies: [
      'React Native', 
      'Expo', 
      'Flutter', 
      'iOS Development', 
      'Android',
    ],
    color: 'rgba(168, 85, 247, 0.6)', 
    projects: [
        'Recipe App with AI integration',
        'Cross-platform Mobile App',
        'Native Feature Integration',
        'Mobile game with real users gameplay',
        'Recipe App with AI integration',
        'Electric Car Charging App for whole working system'
    ]
  },
  {
    label: 'Design & UI/UX',
    proficiency: 40,
    technologies: [
      'Figma', 
      'UI/UX Design', 
      'Prototyping', 
      'User Research',
      'Accessibility',
      'Design Systems'
    ],
    color: 'rgba(236, 72, 153, 0.6)', 
    projects: [
      'Flowchart and design for University Project (Knowit)',
      'User Experience Research',
      'Mobile App Redesign',
      'Accessibility Improvements'
    ]
  }
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

// Helper function to get skills by proficiency level
export const getSkillsByLevel = (minLevel: number = 80) => {
  return mySkills.filter(skill => skill.proficiency >= minLevel);
};

// Helper function to get all technologies
export const getAllTechnologies = () => {
  return mySkills.reduce((acc, skill) => {
    return [...acc, ...skill.technologies];
  }, [] as string[]);
};