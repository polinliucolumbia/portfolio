"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink/95" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-chalk/60 hover:text-chalk"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <span className="absolute top-6 left-6 text-sm text-chalk/40">
        {activeIndex + 1} / {images.length}
      </span>

      <button onClick={onPrev} className="absolute left-2 p-3 text-chalk/50 hover:text-chalk">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <motion.img
        key={activeIndex}
        src={images[activeIndex]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] object-contain"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      />

      <button onClick={onNext} className="absolute right-2 p-3 text-chalk/50 hover:text-chalk">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </motion.div>
  );
}

export function ArtGallery({ images = [] }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  const colCount = 3;
  const columns: string[][] = Array.from({ length: colCount }, () => []);
  images.forEach((src, i) => columns[i % colCount].push(src));

  if (!images || images.length === 0) return null;

  const renderImageCard = (src: string, idx: number) => (
    <div
      key={src}
      role="button"
      tabIndex={0}
      onClick={() => setActiveIndex(idx)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIndex(idx); } }}
      className="group min-w-0 overflow-hidden rounded-xl cursor-pointer"
      style={{ width: '100%' }}
    >
      <img
        src={src}
        alt=""
        className="h-auto transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ width: '100%' }}
        loading={idx < 6 ? "eager" : "lazy"}
      />
    </div>
  );

  return (
    <>
      {/* Mobile: flat sequential list */}
      <div className="flex flex-col gap-4 sm:hidden">
        {images.map((src, i) => renderImageCard(src, i))}
      </div>

      {/* sm+: masonry columns */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4 min-w-0">
            {col.map((src) => renderImageCard(src, images.indexOf(src)))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            images={images}
            activeIndex={activeIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  );
}