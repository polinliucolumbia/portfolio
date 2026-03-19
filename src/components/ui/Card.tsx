import * as React from "react";
import { cn } from "@/lib/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CardVariant = "default" | "elevated" | "outlined";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * default  — parchment-tinted background with a subtle border. Sits flush
   *            with the page, ideal for grid items on a light section.
   * elevated — pure white surface with a warm shadow. Lifts above the page.
   * outlined — transparent background with a border only. Minimal / ghosted.
   */
  variant?: CardVariant;
  /** Remove default inner padding so you can control it per card */
  noPadding?: boolean;
}

// ─── Style maps ───────────────────────────────────────────────────────────────

const variantClasses: Record<CardVariant, string> = {
  default:  "bg-subtle border border-border rounded-[var(--radius-lg)]",
  elevated: "bg-surface border border-border rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]",
  outlined: "bg-transparent border border-border rounded-[var(--radius-lg)]",
};

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", noPadding = false, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        variantClasses[variant],
        !noPadding && "p-6",
        "transition-[border-color,box-shadow] duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

// ─── CardHeader ──────────────────────────────────────────────────────────────

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a bottom border divider between header and body */
  divided?: boolean;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ divided = false, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-1",
        divided && "border-b border-border pb-4 mb-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

// ─── CardTitle ───────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-h3 font-medium leading-snug text-ink",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

// ─── CardDescription ─────────────────────────────────────────────────────────

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  )
);
CardDescription.displayName = "CardDescription";

// ─── CardBody ─────────────────────────────────────────────────────────────────

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-3 flex-1", className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardBody.displayName = "CardBody";

// ─── CardFooter ───────────────────────────────────────────────────────────────

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a top border divider between body and footer */
  divided?: boolean;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ divided = false, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 mt-auto",
        divided && "border-t border-border pt-4 mt-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";

// ─── CardLabel ────────────────────────────────────────────────────────────────

/** Small uppercase label — used inside card headers for category/type markers */
const CardLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("text-label text-muted", className)}
      {...props}
    >
      {children}
    </span>
  )
);
CardLabel.displayName = "CardLabel";

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardLabel,
};
export default Card;
