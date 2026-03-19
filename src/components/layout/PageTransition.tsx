"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : -6,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default PageTransition;
