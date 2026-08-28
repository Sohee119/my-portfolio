import { Code2 } from "lucide-react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { GitHubIcon } from "@/components/BrandIcons";

const weeks = 52;
const days = 7;

export function GitHubActivity() {
  const technologies = site.skillCategories.flatMap((category) => category.skills).slice(0, 10);

  return (
    <section id="github" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="GitHub"
          title="Coding activity"
          description="Profile, repositories, and activity will connect here once a GitHub username is added."
        />
      </FadeIn>
      <FadeIn className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">@{site.githubUsername}</p>
              <p className="mt-1 text-sm text-zinc-500">Replace the placeholder username in lib/site.ts.</p>
            </div>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-zinc-950"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub profile
            </a>
          </div>

          <div className="mt-8 overflow-x-auto">
            <p className="mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">Contribution activity</p>
            <div
              className="grid w-max gap-1"
              style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {Array.from({ length: weeks }).map((_, week) => (
                <div key={week} className="grid gap-1" style={{ gridTemplateRows: `repeat(${days}, minmax(0, 1fr))` }}>
                  {Array.from({ length: days }).map((__, day) => (
                    <span
                      key={`${week}-${day}`}
                      className="h-2.5 w-2.5 rounded-[3px] bg-zinc-200 dark:bg-zinc-800"
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Activity visualization is a placeholder until a GitHub username is connected. No contribution counts are
              shown.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Repositories</h3>
            {site.githubRepos.length === 0 ? (
              <div className="mt-4 rounded-xl border border-dashed border-zinc-300 px-4 py-8 text-center dark:border-zinc-700">
                <Code2 className="mx-auto h-6 w-6 text-zinc-400" />
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Repository highlights will appear here after you add them in lib/site.ts.
                </p>
              </div>
            ) : (
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {site.githubRepos.map((repo) => (
                  <li key={repo.name} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                    <a href={repo.url} className="font-medium text-zinc-900 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{repo.description}</p>
                    <p className="mt-3 text-xs text-zinc-500">{repo.language}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Technologies used</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
