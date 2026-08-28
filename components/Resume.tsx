import { Download } from "lucide-react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 px-6 py-12 text-center dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:px-12">
          <p className="text-sm font-medium tracking-wide text-teal-700 uppercase dark:text-teal-400">Resume</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Download my resume to learn more about my education, skills, and projects.
          </p>
          <a
            href={site.resumePath}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
