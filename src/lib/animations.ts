/**
 * Framer Motion animation tokens.
 *
 * Import these in any component that uses motion.* elements.
 * All values are coordinated with the design system's timing philosophy:
 * deliberate, unhurried, with an editorial expo-out feel on entrances.
 */
import type { Transition, Variants } from "framer-motion";

// ─── Easing curves ────────────────────────────────────────────────────────────

export const ease = {
  /** Standard CSS ease — default interactions */
  smooth:    [0.25, 0.1, 0.25, 1.0] as const,
  /** Decelerate — items coming to rest */
  out:       [0.0,  0.0, 0.2,  1.0] as const,
  /** Accelerate — items leaving */
  in:        [0.4,  0.0, 1.0,  1.0] as const,
  /** Expo-out — premium, editorial entrance feel */
  editorial: [0.16, 1.0, 0.3,  1.0] as const,
  /** Gentle spring-like curve */
  gentle:    [0.34, 1.56, 0.64, 1.0] as const,
} as const;

// ─── Duration constants (seconds) ────────────────────────────────────────────

export const duration = {
  instant: 0.0,
  fast:    0.15,
  normal:  0.3,
  slow:    0.5,
  slower:  0.8,
  crawl:   1.2,
} as const;

export type DurationToken = keyof typeof duration;

// ─── Reusable transitions ─────────────────────────────────────────────────────

export const transition: Record<string, Transition> = {
  fast: {
    duration: duration.fast,
    ease: ease.smooth,
  },
  normal: {
    duration: duration.normal,
    ease: ease.smooth,
  },
  editorial: {
    duration: duration.slow,
    ease: ease.editorial,
  },
  slow: {
    duration: duration.slower,
    ease: ease.editorial,
  },
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  springGentle: {
    type: "spring",
    stiffness: 150,
    damping: 20,
  },
};

// ─── Animation variants ───────────────────────────────────────────────────────

/** Simple opacity fade */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.editorial,
  },
};

/** Fade up — primary entrance for content blocks */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.editorial,
  },
};

/** Fade down */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.editorial,
  },
};

/** Slide in from the left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.editorial,
  },
};

/** Slide in from the right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.editorial,
  },
};

/** Scale up from slightly smaller — buttons, cards, modals */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.editorial,
  },
};

/** Scale up from center — modal/overlay entrances */
export const scaleInCenter: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.springGentle,
  },
};

/**
 * Stagger container — wrap a list with this and use any child variant.
 * Children will animate in sequence with 0.1s offset.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slower stagger — for larger grids or more dramatic reveals
 */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Reveal line — for editorial text reveals where each line slides up
 * from a clipped container.
 */
export const revealLine: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: duration.slow,
      ease: ease.editorial,
    },
  },
};

// ─── Viewport defaults ────────────────────────────────────────────────────────

/**
 * Default whileInView viewport settings.
 * Use with: <motion.div whileInView="visible" viewport={viewport.once} />
 */
export const viewport = {
  once: { once: true, margin: "-80px" },
  repeat: { once: false, margin: "-80px" },
  lazy: { once: true, margin: "-120px" },
} as const;
