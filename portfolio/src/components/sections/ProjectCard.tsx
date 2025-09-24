import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Get main technologies 
  const mainTech = project.techStack
    .filter(tech => tech.category === 'frontend' || tech.category === 'backend')
    .slice(0, 3);

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <div className="relative">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 text-xs rounded-full ${
              project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* tech stack previow */}
          <div className="flex flex-wrap gap-2 mb-4">
            {mainTech.map(tech => (
              <span key={tech.name} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {tech.name}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-gray-500 text-sm">+{project.techStack.length - 3} more</span>
            )}
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{project.duration}</span>
            <span className="capitalize">{project.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}