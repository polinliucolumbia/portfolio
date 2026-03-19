/**
 * Design tokens as TypeScript constants.
 *
 * These mirror the CSS custom properties defined in globals.css @theme.
 * Use them in component logic, inline styles, or Framer Motion values
 * where you can't reach a Tailwind class.
 */

// ─── Colors ──────────────────────────────────────────────────────────────────

export const colors = {
  ink:       "#0C0C0B",   // primary text, dark elements
  parchment: "#F5F3EE",   // page background
  surface:   "#FFFFFF",   // card / elevated surface
  muted:     "#797570",   // secondary text, captions
  subtle:    "#EDEBE5",   // tinted section backgrounds
  border:    "#D8D4C9",   // dividers, card borders
  warm:      "#C5A97A",   // single accent — muted editorial gold
} as const;

export type ColorToken = keyof typeof colors;

// ─── Spacing ─────────────────────────────────────────────────────────────────

export const spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  24,
  6:  32,
  7:  48,
  8:  64,
  9:  96,
  10: 128,
  11: 160,
  12: 200,
} as const satisfies Record<number, number>;

/** Returns pixel value as string, e.g. px(5) → "24px" */
export const px = (step: keyof typeof spacing): string =>
  `${spacing[step]}px`;

export type SpacingStep = keyof typeof spacing;

// ─── Typography ───────────────────────────────────────────────────────────────

export const fontFamily = {
  display: "var(--font-instrument-serif), Georgia, serif",
  sans:    "var(--font-geist-sans), system-ui, sans-serif",
  mono:    "var(--font-geist-mono), 'Courier New', monospace",
} as const;

export const fontSize = {
  display: "clamp(4.5rem, 9vw, 9rem)",
  h1:      "clamp(3rem, 6vw, 6rem)",
  h2:      "clamp(2rem, 4vw, 3.5rem)",
  h3:      "clamp(1.25rem, 2vw, 1.75rem)",
  lead:    "clamp(1.0625rem, 1.5vw, 1.125rem)",
  body:    "1rem",
  sm:      "0.875rem",
  label:   "0.6875rem",
} as const;

export const lineHeight = {
  display: 1.05,
  heading: 1.12,
  snug:    1.3,
  body:    1.7,
} as const;

export const letterSpacing = {
  label:   "0.12em",
  heading: "-0.02em",
  tight:   "-0.03em",
} as const;

// ─── Border radius ────────────────────────────────────────────────────────────

export const radii = {
  sm:   "4px",
  md:   "8px",
  lg:   "16px",
  xl:   "24px",
  pill: "9999px",
} as const;

export type RadiusToken = keyof typeof radii;

// ─── Shadows ─────────────────────────────────────────────────────────────────

export const shadows = {
  sm: "0 1px 3px rgba(12, 12, 11, 0.06), 0 1px 2px rgba(12, 12, 11, 0.04)",
  md: "0 4px 16px rgba(12, 12, 11, 0.08), 0 2px 6px rgba(12, 12, 11, 0.05)",
  lg: "0 16px 48px rgba(12, 12, 11, 0.12), 0 4px 12px rgba(12, 12, 11, 0.06)",
} as const;

export type ShadowToken = keyof typeof shadows;

// ─── Containers ──────────────────────────────────────────────────────────────

export const containers = {
  xs:      480,
  sm:      640,
  content: 1040,
  wide:    1280,
  full:    1440,
} as const;

export type ContainerWidth = keyof typeof containers;

// ─── Breakpoints ─────────────────────────────────────────────────────────────

export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;
