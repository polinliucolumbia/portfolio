const projects = [
  {
    title: "DevFlow",
    description:
      "A real-time collaborative code editor with syntax highlighting, live cursors, and multi-language support. Built for remote pair-programming sessions.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Monaco Editor"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    title: "Shopify Analytics Dashboard",
    description:
      "A custom analytics platform aggregating Shopify store metrics. Features funnel analysis, cohort reports, and real-time revenue tracking.",
    tags: ["React", "Node.js", "PostgreSQL", "Recharts"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    title: "AI Image Enhancer",
    description:
      "Web app that upscales and enhances images using a serverless AI pipeline. Processes images in the cloud and streams back results.",
    tags: ["Next.js", "Python", "AWS Lambda", "Sharp"],
    github: "https://github.com",
    live: null,
    featured: true,
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "CLI Task Manager",
    description:
      "A terminal-based task management tool with Markdown support, tags, priorities, and project grouping.",
    tags: ["Node.js", "TypeScript", "Ink", "SQLite"],
    github: "https://github.com",
    live: null,
    featured: false,
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "React Component Library",
    description:
      "An accessible, themeable component library published on npm with full TypeScript types and Storybook documentation.",
    tags: ["React", "TypeScript", "Storybook", "Rollup"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    gradient: "from-orange-600 to-amber-600",
  },
  {
    title: "Personal Blog",
    description:
      "A blazing-fast blog built with Next.js App Router and MDX, featuring syntax highlighting, dark mode, and an RSS feed.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    gradient: "from-zinc-600 to-slate-600",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="text-sm font-medium tracking-widest text-violet-400 uppercase mb-3">
          My work
        </p>
        <h2 className="text-4xl font-bold text-white mb-3">
          Featured projects
        </h2>
        <p className="text-zinc-500 max-w-xl mb-12">
          A selection of projects I&apos;ve built — from side experiments to
          production systems serving real users.
        </p>

        {/* Featured grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  featured: boolean;
  gradient: string;
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 ${
        compact ? "gap-3" : "gap-4"
      }`}
    >
      {/* Gradient stripe */}
      <div
        className={`absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      <div className="flex items-start justify-between">
        <div className={`rounded-lg bg-gradient-to-br ${project.gradient} p-2.5`}>
          <svg
            className={`text-white ${compact ? "h-4 w-4" : "h-5 w-5"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label={`${project.title} on GitHub`}
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-300 transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className={`font-semibold text-white mb-1 ${compact ? "text-base" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className={`text-zinc-500 leading-relaxed ${compact ? "text-xs" : "text-sm"}`}>
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
