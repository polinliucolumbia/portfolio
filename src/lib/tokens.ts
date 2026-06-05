/**
 * Design tokens as TypeScript constants.
 *
 * These mirror the CSS custom properties defined in globals.css @theme.
 * Use them in component logic, inline styles, or Framer Motion values
 * where you can't reach a Tailwind class.
 */

// ─── Colors ──────────────────────────────────────────────────────────────────

export const colors = {
  ink:         "#0C0C0C",   // dark bg / light-mode primary text
  chalk:       "#FFFFFF",   // light bg / dark-mode primary text
  muted:       "#6B6B6B",   // secondary text, captions, labels
  border:      "#E5E5E5",   // dividers, card outlines
  surface:     "#F5F5F3",   // card / tinted section bg (light)
  surfaceDark: "#1A1A1A",   // card / tinted section bg (dark)
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
  display: "var(--font-big-shoulders), sans-serif",
  sans:    "var(--font-nunito), system-ui, sans-serif",
  mono:    "var(--font-roboto-mono), 'Courier New', monospace",
} as const;

export const fontSize = {
  display: "clamp(4rem,    10vw, 10rem)",
  h1:      "clamp(3rem,    7vw,  6rem)",
  h2:      "clamp(2rem,    4vw,  3.5rem)",
  h3:      "clamp(1.25rem, 2vw,  1.75rem)",
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
  xl:   "60px",
  pill: "9999px",
} as const;

export type RadiusToken = keyof typeof radii;

// ─── Shadows ─────────────────────────────────────────────────────────────────

export const shadows = {
  sm: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.07)",
  lg: "0 16px 48px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.09)",
} as const;

export type ShadowToken = keyof typeof shadows;

// ─── Transitions ──────────────────────────────────────────────────────────────

export const transitions = {
  fast:   "150ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
  normal: "300ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
  slow:   "500ms cubic-bezier(0.16, 1, 0.3, 1.0)",
} as const;

export type TransitionToken = keyof typeof transitions;

// ─── Containers ──────────────────────────────────────────────────────────────

export const containers = {
  xs:      480,
  sm:      640,
  content: 1040,
  wide:    1280,
  full:    1440,
} as const;

export const containerGutter = "clamp(20px, 5vw, 80px)";

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
