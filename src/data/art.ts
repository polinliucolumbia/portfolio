// Art portfolio data
// Categories: Illustration, Digital, Sketchbook, CAD

export type ArtCategory = "Illustration" | "Digital" | "Sketchbook" | "CAD";

export interface ArtPiece {
  slug: string;
  title: string;
  category: ArtCategory;
  year: number;
  medium: string;
  dimensions?: string; // e.g., "18 x 24 in" or "1920 x 1080 px"
  series?: string; // optional grouping for related pieces
  thumbnail: string; // path relative to public folder, e.g., "/images/art/piece-name.jpg"
}

export const artworks: ArtPiece[] = [
  // ============================================
  // ILLUSTRATION
  // ============================================
  {
    slug: "illustration-example-1",
    title: "Example Illustration Title",
    category: "Illustration",
    year: 2024,
    medium: "Procreate on iPad",
    dimensions: "3000 x 4000 px",
    thumbnail: "/images/art/illustration/example-1.jpg",
  },

  // ============================================
  // DIGITAL
  // ============================================
  {
    slug: "digital-example-1",
    title: "Example Digital Title",
    category: "Digital",
    year: 2023,
    medium: "Photoshop",
    thumbnail: "/images/art/digital/example-1.jpg",
  },

  // ============================================
  // SKETCHBOOK
  // ============================================
  {
    slug: "sketchbook-example-1",
    title: "Example Sketch Title",
    category: "Sketchbook",
    year: 2023,
    medium: "Graphite on paper",
    dimensions: "9 x 12 in",
    thumbnail: "/images/art/sketchbook/example-1.jpg",
  },

  // ============================================
  // CAD
  // ============================================
  {
    slug: "cad-example-1",
    title: "Example CAD Title",
    category: "CAD",
    year: 2022,
    medium: "SolidWorks",
    series: "Mechanical Design Studies",
    thumbnail: "/images/art/cad/example-1.jpg",
  },
];

// Helper functions for filtering
export const getArtByCategory = (category: ArtCategory): ArtPiece[] =>
  artworks.filter((art) => art.category === category);

export const getArtBySeries = (series: string): ArtPiece[] =>
  artworks.filter((art) => art.series === series);

export const getArtByYear = (year: number): ArtPiece[] =>
  artworks.filter((art) => art.year === year);

export const getArtBySlug = (slug: string): ArtPiece | undefined =>
  artworks.find((art) => art.slug === slug);