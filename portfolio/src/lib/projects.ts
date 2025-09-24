// PROJECTS 

import {Project} from '@/types/project'

const projects: Project[] = [
  {
    id: '1',
    slug: 'mower-hva',
    title: 'Mower with Application',
    description: 'Backend communication between App and Embedded, and Mobile application to steer robot.',
    fullDescription: 'Project in collaboration with Husqvarna where we developed a lawn-mower. I worked in both mobile- and backend to enable communication between robot and app, as well as image processing. ',
    techStack: [
      {
        category: 'frontend',
        name: 'Swift',
        purpose: 'Mobile Application with controller, both front- and backend'
      },
      {
        category: 'backend',
        name: 'Python',
        purpose: 'Backend with WebSockets communication, Image handeling and AI (API) processing of images from camera on the mower.'
      },
    ],
    features: [
      'Mobile Application Development',
      'Backend communication Embedded - Mobile',
      'Agile group work',
      'Testing'
    ],
    challenges: [
      'Implementing real-time updates without performance issues',

    ],
    learnings: [
      'Testing whole chain from robot to mobile app',
      'More knowledge in WebSockets and live stream communication',
    ],
    demoUrl: 'https://demo.dashboard.com',
    githubUrl: 'https://github.com/IMS2025/G2_main',
    imageUrl: '/images/projects/mower-start.png',
    gallery: ['/images/projects/mower-start.png', '/images/projects/mower-controller.png'],
    status: 'completed',
    startDate: '2024-03-01',
    endDate: '2024-05-30',
    duration: '2 months',
    teamSize: 7,
    category: 'fullstack',
    featured: true
  },
  {
    id: '2',
    slug: 'fem-food-app',
    title: 'Women Health Food App',
    description: 'Backend communication between App and Embedded, and Mobile application to steer robot.',
    fullDescription: 'Project in collaboration with Husqvarna where we developed a lawn-mower. I worked in both mobile- and backend to enable communication between robot and app, as well as image processing. ',
    techStack: [
      {
        category: 'frontend',
        name: 'React Native',
        purpose: 'Mobile App'
      },
      {
        category: 'backend',
        name: 'TypeScript',
        purpose: 'Backend with API calls, LLM communication.'
      },
      {
        category: 'backend',
        name: 'Llama 3',
        purpose: 'Local LLM for security and managability.'
      },
      {
        category: 'database',
        name: 'SQLite',
        purpose: 'Database'
      },
      {
        category: 'testing',
        name: 'Testing',
        purpose: 'CI/CD testing pipeline.'
      },
    ],
    features: [
      'Mobile Application Development',
      'Backend communication Embedded - Mobile',
      'Agile group work',
      'Testing'
    ],
    challenges: [
      'Implementing real-time updates without performance issues',

    ],
    learnings: [
      'Testing whole chain from robot to mobile app',
      'More knowledge in WebSockets and live stream communication',
    ],
    demoUrl: 'https://demo.dashboard.com',
    githubUrl: 'https://github.com/IMS2025/G2_main',
    imageUrl: '/images/projects/fem-app.png',
    gallery: ['/images/projects/fem-app.png', '/images/projects/fem-app.png'],
    status: 'in-progress',
    startDate: '2024-06-01',
    endDate: '-',
    duration: 'Ongoing',
    teamSize: 1,
    category: 'fullstack',
    featured: true
  }

];

export async function getProjects(): Promise<Project[]>{
    return projects; 
}

export async function getProject(slug: string): Promise<Project | undefined>{
    return projects.find(project=>project.slug==slug);
}