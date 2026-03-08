import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`focus-ring w-full rounded-xl border border-grayx-200 bg-white px-4 py-3 font-body text-sm text-navy-800 placeholder:text-grayx-400 ${className}`}
      {...props}
    />
  );
}
