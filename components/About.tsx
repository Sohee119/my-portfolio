import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center bg-[#e3e3dc] px-6 py-16 transition-colors duration-300 dark:bg-[#0d120e]"
    >
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="About"
            title="A recent graduate building practical software skills"
            description="Confident in the fundamentals, realistic about experience, and focused on shipping useful applications."
          />
        </FadeIn>

        {/* Content Grid */}
        <FadeIn direction="up" delay={0.2} className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base leading-7 text-[#3d453b] dark:text-[#a0aaa0]">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-[#d2d2ca] bg-[#e8e8e2] p-6 shadow-xs dark:border-[#1b251d] dark:bg-[#070a08]">
            <h3 className="text-xs font-bold tracking-wider text-[#2d4829] uppercase dark:text-[#4ade80]">
              Currently developing
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.about.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#2d4829]/30 bg-[#e3e3dc] px-3.5 py-1.5 text-xs font-semibold text-[#1c221a] dark:border-[#223023] dark:bg-[#121a14] dark:text-[#f0f4f1]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}