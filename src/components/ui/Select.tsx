import type { SelectHTMLAttributes } from "react";

export function Select({ className = "", ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`focus-ring h-12 w-full appearance-none rounded-xl border border-grayx-200 bg-white px-4 font-body text-sm text-navy-800 ${className}`}
      {...props}
    />
  );
}
