import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { HeroTicker } from "@/components/home/HeroTicker";

export const metadata: Metadata = {
  title: "Polin Liu — Creative Technologist",
};

const heroImages = [
  { src: "/images/ticker/grapefruit-hero.jpeg", alt: "" },
  { src: "/images/ticker/frogs.jpg", alt: "" },
  { src: "/images/ticker/flower-pastels.jpg", alt: "" },
  { src: "/images/ticker/squiggles-hero-vid.mp4", alt: "" },
  { src: "/images/ticker/cloudy-pastels.jpg", alt: "" },
  { src: "/images/ticker/spirited-away-compressed.jpg", alt: "" },
  { src: "/images/ticker/eggplant.jpg", alt: "" },
];

// Get all featured projects, mixed together
const featuredProjects = PROJECTS.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* ── Continuous scrolling image ticker ────────────────────────────── */}
      <FadeIn inView={false} delay={0.1} direction="none" style={{ width: '100%' }}>
        <HeroTicker
          images={heroImages}
          className="pb-4 sm:pb-8"
        />
      </FadeIn>

    {/* ── Top fade overlay ───────────────────────────────────────────── */}
<div
  className="fixed top-0 left-0 right-0 h-16 sm:h-32 z-40 pointer-events-none"
  style={{
    background: "linear-gradient(to bottom, var(--color-chalk), transparent)"
  }}
/>

      {/* ── Hero text ─────────────────────────────────────────────────────── */}
      <Section
        className="!pt-[var(--space-4)] !pb-[var(--space-4)]"
        aria-label="Introduction"
      >
        <Container className="flex flex-col items-center text-center">
          <FadeIn inView={false} delay={0.2}>
            <h1 className="text-display mb-0">
              Polin Liu.
            </h1>
          </FadeIn>

          <FadeIn inView={false} delay={0.3}>
            <p className="text-lead mb-0">
              welcome / willkommen / 歡迎
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── All projects ─────────────────────────────────────────────────── */}
      <Section aria-label="Projects" className="!pt-8">
        <Container>
          <ProjectGrid projects={featuredProjects} variant="featured" />
        </Container>
      </Section>
    </>
  );
}