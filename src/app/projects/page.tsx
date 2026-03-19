import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardBody,
  CardFooter,
  CardLabel,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work spanning digital products, creative installations, and design systems.",
};

const projects = [
  {
    num: "001",
    category: "Web Development",
    title: "Interactive Typography System",
    description:
      "A generative type engine that responds to cursor movement, building dynamic editorial layouts in real time.",
  },
  {
    num: "002",
    category: "Creative Technology",
    title: "Spatial Audio Web Experience",
    description:
      "Browser-based 3D soundscape built with Web Audio API and Three.js — no plugins required.",
  },
  {
    num: "003",
    category: "Design Systems",
    title: "Design System at Scale",
    description:
      "A component library and token architecture adopted across a suite of 12 product surfaces.",
  },
  {
    num: "004",
    category: "Web Development",
    title: "Editorial News Platform",
    description:
      "A content-first publishing platform optimised for long-form reading, accessibility, and offline use.",
  },
  {
    num: "005",
    category: "Art Direction",
    title: "Brand Identity System",
    description:
      "Visual identity for an independent cultural institution — spanning print, web, and environmental signage.",
  },
  {
    num: "006",
    category: "Creative Technology",
    title: "Generative Installation",
    description:
      "A large-scale projection mapping piece that responds to ambient sound in the gallery space.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <Section aria-label="Projects header">
        <Container>
          <FadeIn inView={false}>
            <p className="text-label mb-6">( Work )</p>
            <h1 className="text-h1 mb-6">Projects.</h1>
            <p className="text-lead max-w-lg">
              A selection of work spanning digital products, creative
              installations, and design systems.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Project grid ─────────────────────────────────────────────────── */}
      <Section tinted aria-label="Project grid">
        <Container>
          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ num, category, title, description }) => (
              <FadeIn key={num} direction="up">
                <Card
                  variant="elevated"
                  className="h-full hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                >
                  <CardBody>
                    <CardLabel className="mb-4">
                      ( {num} ) — {category}
                    </CardLabel>
                    <CardTitle className="mb-3">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardBody>
                  <CardFooter divided className="mt-2">
                    <Button variant="ghost" size="sm">View project →</Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section aria-label="Contact CTA">
        <Container className="text-center">
          <FadeIn>
            <p className="text-label mb-4">( Get in touch )</p>
            <h2 className="text-h2 mb-8">Have a project in mind?</h2>
            <Link href="mailto:hello@polinliu.com">
              <Button variant="solid" size="lg">Say hello</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
