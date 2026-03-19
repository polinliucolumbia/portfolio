import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "Polin Liu — creative technologist working at the intersection of design, engineering, and creative practice.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ────────────────────────────────────────────────────────── */}
      <Section aria-label="Introduction">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <FadeIn inView={false}>
                <h1 className="text-display italic mb-10 max-w-2xl">
                  Polin Liu.
                </h1>
              </FadeIn>

              <FadeIn inView={false} delay={0.15}>
                <div className="max-w-xl space-y-5">
                  <p className="text-lead">
                  Hi, I&apos;m Polin <span className="text-muted">(like tram-POLIN-e)</span> 🙂
                    I was born and raised in Austria to a Taiwanese family. I grew up learning six languages — 
                    German, Mandarin, English, Spanish, Taiwanese, and Latin — yet still find myself struggling to find the right words.
                  </p>
                  <p className="text-lead">
                  In my free time, I love to tinker and build the apps, art, and projects you see on this site, run half-marathons (not full ones), explore wellness in all its forms, and discover the world through food. Thanks for stopping by!
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn inView={false} delay={0.2} direction="none" className="self-start">
              <Image
                src="/images/hero/polin-mochi.svg"
                alt="Polin Liu"
                width={800}
                height={600}
                priority
                className="h-auto rounded-[var(--radius-lg)]"
                style={{ width: '100%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Contact CTA ──────────────────────────────────────────────────── */}
      <Section tinted aria-label="Contact">
        <Container className="text-center">
          <FadeIn>
            <p className="text-label mb-4">( Say hello )</p>
            <h2 className="text-h2 mb-3">Let&apos;s work together.</h2>
            <p className="text-lead mb-10 max-w-md mx-auto">
              Whether you have a project in mind or just want to talk, my
              inbox is always open.
            </p>
            <a href="mailto:hello@polinliu.com">
              <Button variant="solid" size="lg">Send an email</Button>
            </a>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
