"use client";

import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// ─── Constants ────────────────────────────────────────────────────────────────

/**
 * Target scroll speed in px/sec. Keeping this constant means duration scales
 * automatically when the image count or tile size changes.
 * ~40 px/sec → ~20 s for 3 images at the lg slot (284 px each).
 */
const SPEED_PX_PER_SEC = 18;

/**
 * SSR/initial-render estimate uses the lg tile slot (260 + 24 = 284 px).
 * The ResizeObserver corrects this on the client before the first paint.
 */
const BASE_SLOT_PX = 284;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroTickerImage {
  src: string;
  alt: string;
}

export interface HeroTickerProps {
  images: HeroTickerImage[];
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroTicker({ images, className }: HeroTickerProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Duplicate the array so the track contains [A B C | A B C].
  // Animating x from 0% → -50% moves exactly one full set, making
  // the loop seamless when Framer Motion restarts from 0%.
  const loopImages = useMemo(() => {
    const copies = Math.max(2, Math.ceil(10 / images.length) * 2);
    return Array.from({ length: copies }, () => images).flat();
  }, [images]);
  // Duration is derived from the actual rendered track width so it stays
  // correct at every viewport size and for any number of images.
  const trackRef = useRef<HTMLDivElement>(null);
  const [animDuration, setAnimDuration] = useState(
    () => (images.length * BASE_SLOT_PX) / SPEED_PX_PER_SEC
  );

  // useLayoutEffect runs before paint on the client, preventing a flicker
  // where the wrong duration is briefly in effect.
  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // scrollWidth covers both sets; half = one full set = the distance
    // the track must travel before the loop resets.
    const update = () => {
      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0) setAnimDuration(halfWidth / SPEED_PX_PER_SEC);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [images.length]);

  // Pause when the browser tab is hidden (visibility API).
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (images.length === 0) return null;

  // Triple duration for reduced-motion: still ambient, never stopped.
  const effectiveDuration = shouldReduceMotion
    ? animDuration * 3
    : animDuration;

  return (
    /*
     * overflow-hidden clips the track.
     * mask-image softens both edges so tiles fade in/out gracefully —
     * 12%/88% is wider than a hard clip but narrower than a full vignette.
     */
    <div
      className={cn("relative overflow-hidden", className)}
      aria-hidden="true"
      style={{
        width: '100%',
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      {/*
       * The track is a flex row wider than the viewport.
       * mr-6 (not CSS gap) is used on every tile — including the last —
       * so each tile occupies a consistent (W + 24 px) slot. This makes
       * the track width exactly 2N × slot, and -50% of that is exactly
       * N × slot = one full image set. No visual jump on loop restart.
       */}
      <motion.div
        ref={trackRef}
        className="flex"
        style={{ width: "max-content" }}
        animate={paused ? false : { x: ["0%", "-50%"] }}
        transition={{
          duration: effectiveDuration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopImages.map((image, index) => {
          const isVideo = /\.(mp4|webm)$/i.test(image.src);

          return (
            <div
              key={index}
              className={cn(
                "relative shrink-0 mr-3 transform-gpu",
                "w-[120px] sm:w-[156px] lg:w-[192px]",
                "aspect-[1/2]",
                "overflow-hidden",
                index % 2 === 0
                  ? "rounded-tl-[var(--radius-xl)] rounded-br-[var(--radius-xl)]"
                  : "rounded-tr-[var(--radius-xl)] rounded-bl-[var(--radius-xl)]",
                "border border-border",
                "transition-transform duration-300 ease-out hover:scale-[1.02]"
              )}
              style={{ backfaceVisibility: "hidden" }}
            >
              {isVideo ? (
                <video
                  src={image.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
                />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default HeroTicker;
