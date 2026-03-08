import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Size = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const variantClass: Record<Variant, string> = {
  primary:
    "border border-teal-500 bg-teal-500 text-white hover:bg-teal-400 hover:border-teal-400 hover:scale-[1.02]",
  secondary:
    "border border-white/70 bg-transparent text-white hover:border-teal-300 hover:text-teal-300",
  ghost:
    "border border-grayx-200 bg-white text-navy-800 hover:border-teal-500 hover:text-teal-500"
};

const sizeClass: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base"
};

const baseClass =
  "focus-ring inline-flex items-center justify-center rounded-full font-english font-medium tracking-wide transition duration-300 ease-out";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const styles = `${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  );
}
