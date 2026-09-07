import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  crosshairs?: boolean;
}

export function Divider({ label, crosshairs = false, className, ...props }: DividerProps) {
  return (
    <div
      className={cn("relative w-full flex items-center justify-between my-8 md:my-12", className)}
      {...props}
    >
      <div className="flex-1 h-[1px] bg-[var(--border-subtle)]" />
      {label && (
        <span className="px-4 font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] select-none">
          {label}
        </span>
      )}
      {label && <div className="flex-1 h-[1px] bg-[var(--border-subtle)]" />}
      {crosshairs && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--text-muted)] font-mono text-[10px]">
          +
        </div>
      )}
    </div>
  );
}
