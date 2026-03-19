const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "tRPC"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions", "Terraform"],
  },
  {
    category: "Testing",
    icon: "🧪",
    skills: ["Jest", "Vitest", "Playwright", "React Testing Library", "Cypress"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "Figma", "VS Code", "Postman", "Linear", "Notion"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-widest text-violet-400 uppercase mb-3">
          Toolkit
        </p>
        <h2 className="text-4xl font-bold text-white mb-3">
          Skills &amp; technologies
        </h2>
        <p className="text-zinc-500 max-w-xl mb-12">
          Technologies and tools I work with daily to build, ship, and scale
          modern web applications.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 hover:border-violet-500/50 hover:text-violet-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
