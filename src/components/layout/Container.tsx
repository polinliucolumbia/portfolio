import * as React from "react";
import { cn } from "@/lib/cn";

type ContainerWidth = "xs" | "sm" | "content" | "wide" | "full";

const widthMap: Record<ContainerWidth, string> = {
  xs:      "max-w-[var(--container-xs)]",
  sm:      "max-w-[var(--container-sm)]",
  content: "max-w-[var(--container-content)]",
  wide:    "max-w-[var(--container-wide)]",
  full:    "max-w-[var(--container-full)]",
};

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max-width constraint. Defaults to "content" (1040px). */
  width?: ContainerWidth;
  /** Render as a different HTML element */
  as?: React.ElementType;
}

export function Container({
  width = "content",
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto px-[var(--container-gutter)]",
        widthMap[width],
        className
      )}
      style={{ width: '100%' }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Container;
