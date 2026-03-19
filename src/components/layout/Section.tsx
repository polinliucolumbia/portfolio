import * as React from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Apply the --color-subtle tinted background */
  tinted?: boolean;
}

/**
 * Standard section wrapper.
 * Applies `section-spacing` (160px top/bottom) and optional subtle tint.
 * Always pair with <Container> inside for horizontal constraints.
 */
export function Section({ tinted = false, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("section-spacing", tinted && "bg-subtle", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
