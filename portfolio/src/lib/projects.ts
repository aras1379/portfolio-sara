// PROJECTS 

import {Project} from '@/types/project'

const projects: Project[] = [
  {
    id: '1',
    slug: 'mower-hva',
    title: 'Mower with Application',
    description: 'Backend communication between App and Embedded, and Mobile application to steer robot.',
    fullDescription: 'Project in collaboration with Husqvarna where we developed a lawn-mower. I worked in both mobile- and backend to enable communication between robot and app, as well as image processing. ',

    techStack: ['swift', 'python'], // <-- Reference skills by ID
    features: [
      'Mobile Application Development',
      'Backend communication between Embedded and Mobile',
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

    fullDescription: 'App tracking menstrual cycle with local LLM for secure recommendations.',
        techStack: ['react-native', 'typescript', 'sqlite'], // <-- Use the IDs
     
    






    features: [
      'Mobile Application Development',
      'Backend communication between Embedded and Mobile',
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
};