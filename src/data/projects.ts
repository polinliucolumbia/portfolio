// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectCategory = "Art" | "Engineering";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLinks {
  /** Primary live URL (demo, app store, etc.) */
  primary?: string;
  github?: string;
  [key: string]: string | undefined;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  /** One-sentence description shown on cards and in metadata */
  summary: string;
  roles: string[];
  tools: string[];
  /** Show on home "Selected Work" section */
  featured: boolean;
  /** Path under /public — swap with real assets when ready */
  thumbnail: string;
  hero: string;
  gallery?: GalleryImage[];
  links?: ProjectLinks;
  // ── Art-specific optional fields ──────────────────────────────────────────
  /** e.g. "Illustration, Risograph" or "Generative, p5.js" */
  medium?: string;
  /** e.g. "A2, 420 × 594 mm" or "Variable" */
  dimensions?: string;
  /** Parent series name when a project belongs to a body of work */
  series?: string;
  /** Site-specific or exhibition location */
  location?: string;
  // ── Optional page-content fields ────────────────────────────────────────────
  /** Paragraphs for the "Context / Background" section. Omit to hide. */
  context?: string[];
  /** Paragraphs for the "What I Did / Contribution" section. Omit to hide. */
  contribution?: string[];
  /** Paragraphs for the "Outcome / Result" section. Omit to hide. */
  outcome?: string[];
  /** Short descriptor shown below the hero content. Omit to hide. */
  subtitle?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// picsum.photos returns a consistent photo for a given seed + dimensions.
// Replace any URL with a real asset path when production images are ready.
const p = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PROJECTS: Project[] = [
  {
    slug: "run-with-me",
    title: "Run With Me",
    category: "Engineering",
    year: 2026,
    summary: "A simpler way to coordinate runs.",
    roles: ["Product Design", "Full-Stack Development", "UX Research", "Business Strategy"],
    tools: ["React Native + Expo", "TypeScript", "Supabase", "Next.js", "Vercel"],
    featured: true,
    thumbnail: "/images/projectthumbnail/rwm-logo-vid.mp4",
    hero:      "/images/hero/rwm-mock1.svg",
   /*  
    gallery: [
      { src: p("rwm-g1", 800, 600), alt: "Onboarding flow",       caption: "Onboarding" },
      { src: p("rwm-g2", 800, 600), alt: "Route matching screen", caption: "Route Matching" },
      { src: p("rwm-g3", 800, 600), alt: "Live run view",         caption: "Live Run" },
      { src: p("rwm-g4", 800, 600), alt: "Post-run summary",      caption: "Run Summary" },
    ], */
    links: {
      primary: "https://runwme.vercel.app/",
    },
    subtitle: "Designed and built the mobile app and landing page end-to-end using AI-assisted development (Cursor + Claude), including product design, user flows, and backend infrastructure.",
  },
  
  {
    slug: "robotics",
    title: "Mojo Popo",
    category: "Engineering",
    year: 2025,
    summary:
      "A fully custom 3D printed walking robot designed for organic movement and inspired by Mojo Jojo. Built end-to-end through mechanical design, electronics integration, and motion programming — from initial sketch to walking prototype.",
      roles: ["Mechanical Design", "CAD Modeling", "3D Printing", "Electronics & Wiring", "Motion Programming"],
      tools: ["Fusion 360", "Raspberry Pi", "Python", "Servomotors", "3D Printer"],
    featured: true,
    thumbnail: "/images/projectthumbnail/robot.jpg",
    hero:      "/images/hero/Robotvid.mp4",
    gallery: [
      { src: "/images/project/mojojojo/mojo-jojo-inspo.webp", alt: "Inspiration", caption: "Concept" },
      { src: "/images/project/mojojojo/mojojojo-sketches.jpg", alt: "Early sketches and design concepts", caption: "Design & Ideation" },
      { src: "/images/project/mojojojo/mojojojo-cad.jpg", alt: "CAD model of robot body and mounts", caption: "CAD Modeling" },
      { src: "/images/project/mojojojo/mojojojo-prototyping.svg", alt: "3D printed joints and fit testing",   caption: "Prototyping & Assembly" },
      { src: "/images/project/mojojojo/mojojojo-code.svg", alt: "Motor wiring and gait programming",   caption: "Gait Programming" },
      { src: "/images/project/mojojojo/mojojojo-final.mp4", alt: "Robot walking in real-world test",    caption: "Optimization & Polish" },
    ],
    subtitle: `Specifications:\nUp to 8 serial bus revolute servomotors (240° range)\nRaspberry Pi single-board computer as controller\nRechargeable battery power supply\nHands-free autonomous locomotion\nOrganic, nature-inspired exoskeleton\n3D printed body`,
    },
  
  
    {
      slug: "menu-whisperer",
      title: "AI Agent: Menu Whisperer",
      category: "Engineering",
      year: 2026,
      summary:
        "A real-time AI travel companion that sees any foreign-language menu through your camera and talks you through it like a knowledgeable local friend.",
      subtitle: `Columbia × Google Hackathon — March 2026\nBuilt in ~3 hours with a 2-person team\nGemini 2.5 Flash Live API (vision + voice simultaneously)\nReal-time audio/video via WebSocket bidi-streaming\nPersonalized dietary profiles · pronunciation coaching · local dish recommendations`,
      roles: [
        "AI Product Design",
        "Frontend Development",
        "Prompt Engineering",
        "Real-Time Systems",
      ],
      tools: [
        "Gemini 2.5 Flash Live API",
        "React + Tailwind",
        "WebSocket",
        "TypeScript",
        "Google Antigravity IDE",
      ],
      featured: true,
      thumbnail: "/images/projectthumbnail/menu-whisperer-thumbnail.svg",
      hero:      "/images/hero/menu-whisperer.svg",
      
      context: [
        "Google Translate gives you words. Menu Whisperer gives you confidence.",
        "Our agent uses Gemini's Live API to see any foreign-language menu through your camera and explain it in real time — with context from your calendar, maps, Beli, and more.",
        "It's like having a knowledgeable local friend, who knows all about you and your dietary needs and preferences.",
        "Menu is scene one — the same architecture extends to transit maps, street signs, and live conversations. The natural convergence of Google Translate + Maps + Assistant, unified through Gemini.",
      ],
      links: {
        primary: "https://menu-whisperer-545043514736.us-central1.run.app/",
      },
    },
    
    ];
