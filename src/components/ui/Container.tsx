import * as React from "react";
import { cn } from "@/lib/cn";
import type { ContainerWidth } from "@/lib/tokens";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * xs      — 480px   narrow text column / pull-quotes
   * sm      — 640px   small editorial content
   * content — 1040px  default page column (most sections)
   * wide    — 1280px  full-width layouts, hero sections
   * full    — 1440px  edge-to-edge maximum
   */
  width?: ContainerWidth;
  /**
   * When true the container fills its parent width without max-width
   * (useful for full-bleed sections that still need gutter padding)
   */
  fluid?: boolean;
  /** Skip default horizontal gutter padding */
  noGutter?: boolean;
  /** Render as a different HTML element */
  as?: React.ElementType;
}

// ─── Max-width map ────────────────────────────────────────────────────────────

const widthClasses: Record<ContainerWidth, string> = {
  xs:      "max-w-[var(--container-xs)]",
  sm:      "max-w-[var(--container-sm)]",
  content: "max-w-[var(--container-content)]",
  wide:    "max-w-[var(--container-wide)]",
  full:    "max-w-[var(--container-full)]",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      width = "content",
      fluid = false,
      noGutter = false,
      as: Tag = "div",
      className,
      children,
      ...props
    },
    ref
  ) => (
    <Tag
      ref={ref}
      className={cn(
        "w-full mx-auto",
        !fluid && widthClasses[width],
        !noGutter && "px-[var(--container-gutter)]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
);

Container.displayName = "Container";

// ─── Section ─────────────────────────────────────────────────────────────────

/**
 * Section wrapper: vertical spacing + optional background tint.
 * Always pairs with <Container> inside for horizontal constraints.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Apply the --color-subtle background tint */
  tinted?: boolean;
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ tinted = false, className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "section-spacing",
        tinted && "section-subtle",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = "Section";

// ─── SectionLabel ─────────────────────────────────────────────────────────────

/**
 * Editorial section label — small uppercase tracked text above a heading.
 * Styled like Bungee's `( 001 )` counter labels.
 */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Wrap label in parentheses: ( LABEL ) */
  bracketed?: boolean;
}

const SectionLabel = React.forwardRef<HTMLParagraphElement, SectionLabelProps>(
  ({ bracketed = false, className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-label mb-4", className)}
      {...props}
    >
      {bracketed ? <>( {children} )</> : children}
    </p>
  )
);

SectionLabel.displayName = "SectionLabel";

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Container, Section, SectionLabel };
export default Container;
