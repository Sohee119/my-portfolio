import { FadeIn } from "@/components/FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <FadeIn delay={0.1}>
        <p className="text-xs font-bold tracking-widest text-[#2d4829] uppercase dark:text-[#4ade80]">
          {eyebrow}
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1c221a] sm:text-4xl dark:text-[#ffffff]">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#3d453b] dark:text-[#a0aaa0]">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}