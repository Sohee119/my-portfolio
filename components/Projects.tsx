import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="A selection of software and web development projects I've built."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {site.projects.map((project) => (
            <article
              key={project.slug}
              className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-100/50 p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-500/40 dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-200/70 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    View Code &rarr;
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}