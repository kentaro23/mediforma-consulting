import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`focus-ring h-12 w-full rounded-xl border border-grayx-200 bg-white px-4 font-body text-sm text-navy-800 placeholder:text-grayx-400 ${className}`}
      {...props}
    />
  );
}
