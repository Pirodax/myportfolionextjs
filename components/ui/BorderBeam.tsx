"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "rgb(168, 85, 247)",
  colorTo = "rgb(147, 51, 234)",
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--angle": "0deg",
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // Mask setup
        "[background:linear-gradient(transparent,transparent)_padding-box,conic-gradient(from_var(--angle),transparent_0deg,var(--color-from)_90deg,var(--color-to)_180deg,transparent_270deg)_border-box]",
        // Animation
        "animate-border-beam",
        className
      )}
    />
  );
};
