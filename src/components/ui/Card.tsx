import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-grayx-200 bg-white p-7 shadow-card transition-shadow duration-300 ${className}`}
      {...props}
    />
  );
}
