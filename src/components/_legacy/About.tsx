const stats = [
  { value: "5+", label: "Years experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "15+", label: "Happy clients" },
  { value: "99%", label: "Client satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <p className="text-sm font-medium tracking-widest text-violet-400 uppercase mb-3">
          About me
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white leading-snug">
              I build things for the web,{" "}
              <span className="gradient-text">with purpose</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              I&apos;m a full-stack developer based in Berlin with over 5 years of
              experience building scalable web applications. I specialise in
              React, Next.js, Node.js, and cloud infrastructure.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My focus is on writing clean, maintainable code and delivering
              exceptional user experiences. When I&apos;m not coding, you&apos;ll
              find me hiking, reading sci-fi, or contributing to open-source.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-800 border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-700 hover:border-zinc-600 transition-all"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-violet-500/40 transition-colors"
              >
                <span className="text-4xl font-bold gradient-text">{stat.value}</span>
                <span className="text-sm text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
