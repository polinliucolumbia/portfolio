"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroRotatorProps {
  images: HeroImage[];
  /** Auto-advance interval in ms. Defaults to 3000. */
  intervalMs?: number;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroRotator({
  images,
  intervalMs = 3000,
  className,
}: HeroRotatorProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Slower interval when user prefers reduced motion
  const effectiveInterval = shouldReduceMotion ? 6000 : intervalMs;

  const advance = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  // Auto-advance
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(advance, effectiveInterval);
    return () => clearInterval(id);
  }, [paused, advance, images.length, effectiveInterval]);

  // Pause when browser tab is not visible
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (images.length === 0) return null;

  const nextIndex = (index + 1) % images.length;

  return (
    /*
     * Base styles are intentionally minimal — no border, shadow, or rounded corners.
     * The caller controls decoration via className (e.g. "border-y border-border
     * rounded-[var(--radius-xl)] shadow-[var(--shadow-md)]").
     * Default aspect is 16:9; override with e.g. "lg:aspect-[21/9]" for desktop.
     */
    <div
      className={cn(
        "relative aspect-video overflow-hidden bg-subtle",
        className
      )}
      style={{ width: '100%' }}
    >
      {/* ── Crossfading images ──────────────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.7, ease: "easeInOut" },
            // Slow Ken-Burns zoom-out over the full display period.
            // Disabled entirely when prefers-reduced-motion is set.
            scale: {
              duration: shouldReduceMotion ? 0 : effectiveInterval / 1000 + 0.7,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            sizes="100vw"
            // Only the initial frame is above-the-fold
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Silent preload — keeps next image warm in the browser cache ──── */}
      {images.length > 1 && (
        <div className="absolute inset-0 opacity-0 pointer-events-none" aria-hidden="true">
          <Image
            src={images[nextIndex].src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* ── Progress bar — 2px warm underline, resets each slide ────────── */}
      {images.length > 1 && (
        <motion.div
          key={`bar-${index}`}
          className="absolute bottom-0 inset-x-0 h-[2px] bg-warm/50 origin-left pointer-events-none"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: effectiveInterval / 1000,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

export default HeroRotator;
