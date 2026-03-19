"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  type DurationToken,
  duration as durationMap,
  ease,
} from "@/lib/animations";
import type { Variants } from "framer-motion";

// ─── Direction map ────────────────────────────────────────────────────────────

const directionVariants: Record<FadeInDirection, Variants> = {
  up:    fadeInUp,
  down:  fadeInDown,
  left:  slideInLeft,
  right: slideInRight,
  none:  fadeIn,
  scale: scaleIn,
};

export type FadeInDirection = "up" | "down" | "left" | "right" | "none" | "scale";

// ─── FadeIn ───────────────────────────────────────────────────────────────────

export interface FadeInProps extends Omit<MotionProps, "variants" | "initial" | "animate" | "whileInView"> {
  children: React.ReactNode;
  className?: string;
  /** Animation entrance direction */
  direction?: FadeInDirection;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Override animation duration token */
  duration?: DurationToken;
  /**
   * When true, animates once as the element enters the viewport.
   * When false, animates on mount immediately (for above-the-fold content).
   */
  inView?: boolean;
  /** Custom viewport margin before triggering (e.g. "-100px") */
  viewportMargin?: string;
  /** Repeat animation each time element enters viewport */
  repeat?: boolean;
}

function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration: durationToken = "slow",
  inView = true,
  viewportMargin = "-80px",
  repeat = false,
  ...motionProps
}: FadeInProps) {
  const variants = directionVariants[direction];
  const customTransition = {
    duration: durationMap[durationToken],
    ease: ease.editorial,
    delay,
  };

  const mergedVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...(variants.visible as object),
      transition: customTransition,
    },
  };

  if (inView) {
    return (
      <motion.div
        className={cn(className)}
        variants={mergedVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: !repeat, margin: viewportMargin }}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={mergedVariants}
      initial="hidden"
      animate="visible"
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

// ─── FadeInStagger ────────────────────────────────────────────────────────────

/**
 * Wraps a list of children and staggers their FadeIn animation.
 * Each direct child should have a FadeIn wrapper or be a motion element.
 *
 * Usage:
 *   <FadeInStagger>
 *     <FadeIn><Card /></FadeIn>
 *     <FadeIn><Card /></FadeIn>
 *   </FadeInStagger>
 */
export interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child (seconds) */
  stagger?: number;
  /** Initial delay before first child animates */
  delayChildren?: number;
  inView?: boolean;
  repeat?: boolean;
  viewportMargin?: string;
}

function FadeInStagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.05,
  inView = true,
  repeat = false,
  viewportMargin = "-80px",
}: FadeInStaggerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  if (inView) {
    return (
      <motion.div
        className={cn(className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: !repeat, margin: viewportMargin }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export { FadeIn, FadeInStagger };
export default FadeIn;
