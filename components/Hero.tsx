import { ArrowDownRight, Download, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background Grids & Radial Overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(24,24,27,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.08)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-20"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          {/* Status Badge */}
          <p className="inline-flex items-center rounded-full border border-teal-600/30 bg-teal-100/80 px-3 py-1 text-xs font-semibold tracking-wide text-teal-900 uppercase dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300">
            Open to internships and junior roles
          </p>

          {/* Greeting / Title */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            {site.hero.greeting}
          </h1>

          {/* Job Title Subtitle */}
          <p className="mt-4 text-lg font-semibold text-zinc-800 sm:text-xl dark:text-zinc-200">
            {site.title}
          </p>

          {/* Description Paragraph */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
            {site.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View My Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href={site.resumePath}
              download="ESPION_RESUME.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-500 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-teal-300 dark:hover:bg-teal-500/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* Terminal Window Widget */}
        <div className="relative">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              <span className="ml-2 font-mono text-xs text-zinc-400">paolo.ts</span>
            </div>
            <pre className="overflow-x-auto font-mono text-[13px] leading-6 text-zinc-100">
              <code>
                {`const paolo = {
  role: "Software & AI Engineer",
  education: "BS Computer Science",
  stack: ["Python", "TypeScript", "SQL"],
  focus: ["Apps", "Data", "AI"],
  status: "Open to opportunities",
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}