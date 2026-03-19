import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Software products, hardware builds, and systems work — projects from concept through production.",
};

const engineeringProjects = PROJECTS.filter((p) => p.category === "Engineering");

export default function EngineeringPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <Section aria-label="Engineering header" className="!pb-[var(--space-4)]">
        <Container>
          <FadeIn inView={false}>
            <p className="text-label mb-6">( Engineering )</p>
            <h1 className="text-h1 mb-6">Engineering.</h1>
            <p className="text-lead max-w-lg">
              Software products, hardware builds, and systems work — projects
              where ideas become real things.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Project grid ─────────────────────────────────────────────────── */}
      <Section tinted aria-label="Engineering projects" className="!pt-[var(--space-4)]">
        <Container>
          <ProjectGrid projects={engineeringProjects} />
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section aria-label="Contact CTA">
        <Container className="text-center">
          <FadeIn>
            <p className="text-label mb-4">( Get in touch )</p>
            <h2 className="text-h2 mb-8">Building something interesting?</h2>
            <Link href="mailto:hello@polinliu.com">
              <Button variant="solid" size="lg">Say hello</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
