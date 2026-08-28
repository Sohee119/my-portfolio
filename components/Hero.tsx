import { ArrowDownRight, Download, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50/80 dark:bg-transparent">
      {/* Background Grids & Radial Overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.04),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-20"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          {/* Status Badge */}
          <p className="inline-flex items-center rounded-full border border-teal-600/20 bg-teal-100/70 px-3 py-1 text-xs font-semibold tracking-wide text-teal-900 uppercase dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300">
            Open to internships and junior roles
          </p>

          {/* Greeting / Title */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {site.hero.greeting}
          </h1>

          {/* Job Title Subtitle */}
          <p className="mt-4 text-lg font-semibold text-slate-800 sm:text-xl dark:text-slate-200">
            {site.title}
          </p>

          {/* Description Paragraph */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
            {site.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              View My Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href={site.resumePath}
              download="ESPION_RESUME.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-100/80 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-500 hover:bg-slate-200/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-teal-300"
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              <span className="ml-2 font-mono text-xs text-slate-400">paolo.ts</span>
            </div>
            <pre className="overflow-x-auto font-mono text-[13px] leading-6 text-slate-100">
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