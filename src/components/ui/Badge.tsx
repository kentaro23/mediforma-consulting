import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-english text-[11px] font-medium uppercase tracking-[0.14em] text-teal-500 ${className}`}
      {...props}
    />
  );
}
