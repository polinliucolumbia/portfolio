import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { ProjectCard, type ProjectCardVariant } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

export interface ProjectGridProps {
  projects: Project[];
  variant?: ProjectCardVariant;
  className?: string;
}

export function ProjectGrid({
  projects,
  variant = "default",
  className,
}: ProjectGridProps) {
  if (projects.length === 0) return null;

  return (
    <FadeInStagger
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
        className
      )}
    >
      {projects.map((project) => (
        <FadeIn key={project.slug} direction="up">
          <ProjectCard project={project} variant={variant} />
        </FadeIn>
      ))}
    </FadeInStagger>
  );
}

export default ProjectGrid;