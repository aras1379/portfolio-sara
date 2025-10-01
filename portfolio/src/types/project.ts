// PROJECT DATA

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string; 
  techStack: string[];
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