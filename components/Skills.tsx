import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use"
          description="A focused stack for web applications, data work, and AI-assisted tools."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {site.skillCategories.map((category) => (
            <article
              key={category.name}
              className="h-full rounded-2xl border border-zinc-200/80 bg-zinc-100/50 p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-500/40 dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg bg-zinc-200/70 px-2.5 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}