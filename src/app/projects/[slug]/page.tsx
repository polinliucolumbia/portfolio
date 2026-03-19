import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { ProjectMeta } from "@/components/projects/ProjectMeta";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Polin Liu`,
      description: project.summary,
      type: "article",
      // Set metadataBase in layout.tsx (e.g. https://polinliu.com) to resolve
      // this relative path into a valid absolute URL for social previews.
      images: [{ url: project.hero, width: 1600, height: 900, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Polin Liu`,
      description: project.summary,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const hasLinks =
    project.links &&
    Object.values(project.links).some((v) => typeof v === "string");

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Section aria-label="Project introduction" className="!pb-[var(--space-5)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: text */}
            <div>
              <FadeIn inView={false}>
                <p className="text-label mb-6">
                  ( {project.category} · {project.year} )
                </p>
              </FadeIn>

              <FadeIn inView={false} delay={0.08}>
                <h1 className="text-h1 mb-8">{project.title}</h1>
              </FadeIn>

              <FadeIn inView={false} delay={0.15}>
                <p className="text-lead max-w-xl mb-10">{project.summary}</p>
              </FadeIn>

              <FadeIn inView={false} delay={0.2}>
                <ProjectMeta project={project} className="mb-10" />
              </FadeIn>

              {hasLinks && (
                <FadeIn inView={false} delay={0.28}>
                  <div className="flex flex-wrap gap-3">
                    {project.links?.primary && (
                      <Button asChild variant="solid" size="lg">
                        <a
                          href={project.links.primary}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project ↗
                        </a>
                      </Button>
                    )}
                    {project.links?.github && (
                      <Button asChild variant="outline" size="lg">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      </Button>
                    )}
                  </div>
                </FadeIn>
              )}

              {project.subtitle && (
                <FadeIn inView={false} delay={0.32}>
                  <p className="text-sm text-muted mt-8 max-w-lg whitespace-pre-line">{project.subtitle}</p>
                </FadeIn>
              )}
            </div>

            {/* Right: hero image or video */}
            <FadeIn inView={false} delay={0.2} direction="none" className="self-start">
              {/\.(mp4|webm)$/i.test(project.hero) ? (
                <video
                  src={project.hero}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-auto rounded-[var(--radius-lg)]"
                  style={{ width: '100%' }}
                />
              ) : (
                <Image
                  src={project.hero}
                  alt={`${project.title} — hero image`}
                  width={800}
                  height={600}
                  priority
                  className="h-auto rounded-[var(--radius-lg)]"
                  style={{ width: '100%' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Context ───────────────────────────────────────────────────────── */}
      {project.context && project.context.length > 0 && (
        <Section aria-label="Context">
          <Container>
            <FadeIn>
              <p className="text-label mb-6">( Context )</p>
              <h2 className="text-h2 mb-8">Background.</h2>
              <div className="flex flex-col gap-5 text-lead">
                {project.context.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* ── What I did ────────────────────────────────────────────────────── */}
      {project.contribution && project.contribution.length > 0 && (
        <Section tinted aria-label="What I did">
          <Container width="sm">
            <FadeIn>
              <p className="text-label mb-6">( What I Did )</p>
              <h2 className="text-h2 mb-8">My contribution.</h2>
              <div className="flex flex-col gap-5 text-lead">
                {project.contribution.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* ── Outcome ───────────────────────────────────────────────────────── */}
      {project.outcome && project.outcome.length > 0 && (
        <Section aria-label="Outcome">
          <Container width="sm">
            <FadeIn>
              <p className="text-label mb-6">( Outcome )</p>
              <h2 className="text-h2 mb-8">Result.</h2>
              <div className="flex flex-col gap-5 text-lead">
                {project.outcome.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      {project.gallery && project.gallery.length > 0 && (() => {
        // Art projects: 2-col grid, portrait aspect for larger image presence
        const isArt = project.category === "Art";
        const gridCols = isArt
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        const aspect = isArt ? "aspect-[4/5]" : "aspect-[4/3]";
        const sizes = isArt
          ? "(max-width: 640px) 100vw, 50vw"
          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

        return (
          <Section tinted aria-label="Gallery" className="!pt-[var(--space-6)]">
            <Container>
              <FadeIn>
                <p className="text-label mb-3">( Gallery )</p>
                <h2 className="text-h2 mb-12">
                  {isArt ? "Works." : "Process & details."}
                </h2>
              </FadeIn>

              <FadeInStagger className={`grid gap-6 ${gridCols}`}>
                {project.gallery.map((image, i) => (
                  <FadeIn key={i} direction="up">
                    <figure className="flex flex-col gap-3">
                      <div
                        className={`relative ${aspect} overflow-hidden rounded-[var(--radius-lg)] bg-subtle`}
                      >
                        
                        {/\.(mp4|webm)$/i.test(image.src) ? (
                          <video
                            src={image.src}
                            controls
                            playsInline
                            preload="metadata"
                            className="absolute inset-0 h-full w-full object-cover rounded-[var(--radius-lg)]"
                          />
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes={sizes}
                          />
                        )}
                      </div>
                      {image.caption && (
                        <figcaption className="counter-label">
                          {String(i + 1).padStart(2, "0")} —{" "}
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </Container>
          </Section>
        );
      })()}
    </>
  );
}
