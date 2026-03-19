import * as React from "react";
import { cn } from "@/lib/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize    = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as a child element (e.g. wrap an <a> tag). Pass a single child. */
  asChild?: boolean;
  /** Show a loading spinner and disable the button */
  loading?: boolean;
}

// ─── Style maps ───────────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  /**
   * Solid — ink fill, parchment text.
   * Primary action. Lifts slightly on hover.
   */
  solid: [
    "bg-ink text-chalk border border-ink",
    "hover:bg-[#2a2a28] hover:-translate-y-px",
    "active:translate-y-0 active:bg-[#1a1a17]",
    "disabled:bg-[#4a4a48] disabled:border-[#4a4a48] disabled:cursor-not-allowed",
  ].join(" "),

  /**
   * Outline — transparent with ink border.
   * Secondary action. Fills with ink on hover.
   */
  outline: [
    "bg-transparent text-ink border border-ink",
    "hover:bg-ink hover:text-chalk hover:-translate-y-px",
    "active:translate-y-0",
    "disabled:border-border disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-muted disabled:hover:translate-y-0",
  ].join(" "),

  /**
   * Ghost — no border, no background.
   * Tertiary / subtle action.
   */
  ghost: [
    "bg-transparent text-ink border border-transparent",
    "hover:bg-subtle hover:-translate-y-px",
    "active:translate-y-0 active:bg-[#E0DDD5]",
    "disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:translate-y-0",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8  px-3   text-[0.8125rem] gap-1.5 rounded-[var(--radius-md)]",
  md: "h-10 px-5   text-sm          gap-2   rounded-[var(--radius-md)]",
  lg: "h-12 px-7   text-[0.9375rem] gap-2.5 rounded-[var(--radius-md)]",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      size = "md",
      asChild = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      "inline-flex items-center justify-center whitespace-nowrap",
      "font-sans font-medium tracking-[0.01em]",
      "transition-all duration-150",
      "cursor-pointer select-none",
      "focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-3",
    ].join(" ");

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      (loading || disabled) && "pointer-events-none",
      className
    );

    const content = loading ? (
      <>
        <Spinner size={size} />
        <span className="opacity-60">{children}</span>
      </>
    ) : (
      children
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
        {
          className: cn(classes, (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props.className),
        }
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

// ─── Spinner sub-component ────────────────────────────────────────────────────

function Spinner({ size }: { size: ButtonSize }) {
  const spinnerSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return (
    <svg
      className={cn("animate-spin shrink-0", spinnerSize)}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export { Button };
export default Button;
