"use client";
import React from "react";
import { BorderBeam } from "@stianlarsen/border-beam";
import { cn } from "@/lib/utils";

type BorderBeamButtonF = {
  borderRadius?: string;
  duration?: number; // durée en secondes
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BorderBeamButtonF({
  borderRadius = "1.75rem",
  duration = 10,
  containerClassName,
  borderClassName,
  className,
  children,
  ...buttonProps
}: BorderBeamButtonF) {
  return (
    <button
      {...buttonProps}
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] text-xl md:col-span-2",
        containerClassName,
        className
      )}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <BorderBeam
          size={100}
          duration={duration}
          className={borderClassName}
        />
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl"
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </button>
  );
}