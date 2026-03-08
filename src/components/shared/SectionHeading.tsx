import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleAs = "h2",
  children
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const TitleTag = titleAs;

  return (
    <header className={`max-w-3xl ${alignment} ${className}`.trim()}>
      {eyebrow ? (
        <p className="font-english text-xs font-medium uppercase tracking-[0.16em] text-teal-500">{eyebrow}</p>
      ) : null}
      <TitleTag className="mt-4 text-balance font-body text-[28px] font-bold leading-[1.3] text-navy-800 md:text-[36px] md:leading-[1.35]">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-5 text-balance font-body text-[15px] leading-[1.9] text-grayx-500 md:text-base">{description}</p>
      ) : null}
      {children}
    </header>
  );
}
