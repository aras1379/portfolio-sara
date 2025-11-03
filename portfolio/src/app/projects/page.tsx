//PROJECTS AND TECHNIQUES 
import { getProjects } from "@/lib/projects";
import SkillsFullDisplay from "@/components/sections/SkillsDisplay";
import ClientGradientWrapper from "@/components/sections/WrapperClient";
import ProjectPageClient from "./ProjectPageClient";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectPageClient projects={projects} />;
}