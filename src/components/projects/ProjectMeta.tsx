import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectMetaProps {
  project: Project;
  className?: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Chip({
  children,
  mono = false,
  className,
}: {
  children: React.ReactNode;
  mono?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "border border-border rounded-[var(--radius-pill)]",
        "px-3 py-1 leading-none",
        // font
        mono
          ? "font-mono text-[0.6875rem] tracking-[0.06em] text-muted"
          : "text-label",
        className
      )}
    >
      {children}
    </span>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ProjectMeta({ project, className }: ProjectMetaProps) {
  const roles = project.roles.slice(0, 3);
  const tools = project.tools.slice(0, 5);
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* ── Year + Category ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3">
        <Chip mono>{project.year}</Chip>
        <span className="text-label">{project.category}</span>
      </div>

      {/* ── Medium + Dimensions (Art) ────────────────────────────────────── */}
      {(project.medium || project.dimensions) && (
        <div className="flex flex-wrap items-center gap-2" aria-label="Medium">
          {project.medium && <Chip>{project.medium}</Chip>}
          {project.dimensions && (
            <Chip mono>{project.dimensions}</Chip>
          )}
          {project.location && (
            <Chip mono>{project.location}</Chip>
          )}
        </div>
      )}

      {/* ── Roles ────────────────────────────────────────────────────────── */}
      {roles.length > 0 && (
        <div className="flex flex-wrap gap-2" aria-label="Roles">
          {roles.map((role) => (
            <Chip key={role}>{role}</Chip>
          ))}
        </div>
      )}

      {/* ── Tools ────────────────────────────────────────────────────────── */}
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-2" aria-label="Tools">
          {tools.map((tool) => (
            <Chip key={tool} mono>
              {tool}
            </Chip>
          ))}
        </div>
      )}

    </div>
  );
}

export default ProjectMeta;
