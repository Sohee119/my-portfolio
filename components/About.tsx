import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="About"
          title="A recent graduate building practical software skills"
          description="Confident in the fundamentals, realistic about experience, and focused on shipping useful applications."
        />
      </FadeIn>
      <FadeIn className="mx-auto mt-12 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
            Currently developing
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.about.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
