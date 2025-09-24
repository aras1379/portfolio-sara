// PROJECT DATA
export interface TechStack {
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'design' | 'testing';
  name: string;
  version?: string;
  purpose: string; 
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string; 
  techStack: TechStack[];
  features: string[];
  challenges: string[];
  learnings: string[];
  
  // URLs and images
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  gallery?: string[];
  
  // Metadata
  status: 'completed' | 'in-progress';
  startDate: string;
  endDate?: string;
  duration: string; 
  teamSize?: number;
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'fullstack';
  featured: boolean;
}