import { GraduationCap } from "lucide-react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  const { education } = site;
  const hasCoursework = education.coursework.length > 0;
  const hasAchievements = education.achievements.length > 0;

  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="A focused computer science foundation, with room to add university details, coursework, and achievements."
        />
      </FadeIn>
      <FadeIn className="mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        <ol className="relative border-l border-zinc-200 pl-8 dark:border-zinc-800">
          <li>
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500/40 bg-white text-teal-700 dark:bg-zinc-950 dark:text-teal-300">
              <GraduationCap className="h-3.5 w-3.5" />
            </span>
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{education.graduationYear}</p>
              <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">{education.degree}</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{education.university}</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Relevant coursework</h4>
                  {hasCoursework ? (
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
                      {education.coursework.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-zinc-500">Add coursework in lib/site.ts when you are ready.</p>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Academic achievements</h4>
                  {hasAchievements ? (
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
                      {education.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-zinc-500">
                      Add achievements in lib/site.ts. Nothing is listed until you provide it.
                    </p>
                  )}
                </div>
              </div>
            </article>
          </li>
        </ol>
      </FadeIn>
    </section>
  );
}
