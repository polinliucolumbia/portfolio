import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

export type ProjectCardVariant = "default" | "featured";

export interface ProjectCardProps {
  project: Project;
  variant?: ProjectCardVariant;
  className?: string;
}

export function ProjectCard({
  project,
  variant = "default",
  className,
}: ProjectCardProps) {
  const isVideo = /\.(mp4|webm)$/i.test(project.thumbnail);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block focus-visible:outline-none", className)}
      aria-label={`View project: ${project.title}`}
    >
      {/* ── Thumbnail ──────────────────────────────────────────────── */}
      <div
        className={cn(
          "relative overflow-hidden bg-subtle",
          "aspect-square",
          "rounded-2xl",
          "transition-transform duration-300",
          "group-hover:scale-[0.98]"
        )}
      >
        {isVideo ? (
          <video
            src={project.thumbnail}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {/* ── Label row ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-3 px-1">
        <span className="text-sm text-ink font-medium uppercase tracking-wide">
          {project.title}
        </span>
        <span className="text-sm text-muted">
          _{project.year}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;