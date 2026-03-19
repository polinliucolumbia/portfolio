import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArtGallery } from "@/components/art/ArtGallery";

export const metadata: Metadata = {
  title: "Art",
  description: "Visual experiments and artwork.",
};

function getArtImages(): string[] {
  const artDir = path.join(process.cwd(), "public/images/art");
  
  if (!fs.existsSync(artDir)) {
    return [];
  }

  const files = fs.readdirSync(artDir);
  
  return files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .sort()
    .map((file) => `/images/art/${file}`);
}

const artImages = getArtImages();

export default function ArtPage() {
  return (
    <>
      <Section aria-label="Art header" className="!pb-[var(--space-4)]">
        <Container>
          <FadeIn inView={false}>
            <h1 className="text-h1 mb-6">Art.</h1>
            <p className="text-lead max-w-lg">
              Visual experiments and artwork.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section aria-label="Art gallery" className="!pt-[var(--space-4)]">
        <Container>
          <ArtGallery images={artImages} />
        </Container>
      </Section>
    </>
  );
}