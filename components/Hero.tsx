"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FBF9F5] transition-colors duration-200 dark:bg-[#0F1410]">
      {/* Background Grids & Subtle Atmospheric Radial Overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,160,120,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(120,130,100,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(88,110,79,0.25),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(28,38,29,0.4),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(100,90,80,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,90,80,0.08)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-20 dark:[background-image:linear-gradient(to_right,rgba(180,200,160,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,200,160,0.08)_1px,transparent_1px)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          {/* Badge */}
          <FadeIn delay={0.1}>
            <p className="inline-flex items-center rounded-full border border-stone-300 bg-stone-200/60 px-3 py-1 text-xs font-semibold tracking-wide text-stone-800 uppercase dark:border-emerald-800/40 dark:bg-emerald-950/60 dark:text-emerald-300">
              Open to internships and junior roles
            </p>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.25}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-100">
              {site.hero.greeting}
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.35}>
            <p className="mt-4 text-lg font-semibold text-stone-800 sm:text-xl dark:text-emerald-200/90">
              {site.title}
            </p>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.45}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700 dark:text-stone-300">
              {site.hero.description}
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.55}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 shadow-sm transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-emerald-700 dark:text-emerald-50 dark:hover:bg-emerald-600 dark:shadow-emerald-950/50"
              >
                View My Projects
                <ArrowDownRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={site.resumePath}
                download="ESPION_RESUME.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-stone-100/90 px-5 py-3 text-sm font-medium text-stone-900 shadow-sm transition-colors hover:border-stone-400 hover:bg-stone-200/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-emerald-800/60 dark:bg-[#141A15] dark:text-stone-200 dark:hover:border-emerald-600 dark:hover:bg-[#1A231C]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>

              <motion.a
                href={`mailto:${site.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-stone-800 transition-colors hover:bg-stone-200/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </motion.a>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.65}>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </FadeIn>
        </div>

        {/* Terminal Window Widget */}
        <FadeIn delay={0.4}>
          <div className="relative">
            <div className="rounded-2xl border border-stone-300 bg-[#F3EFE6] p-5 shadow-xl dark:border-emerald-900/60 dark:bg-[#090D0A] dark:shadow-emerald-950/40">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-400 dark:bg-stone-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-400 dark:bg-stone-700" />
                <span className="ml-2 font-mono text-xs text-stone-600 dark:text-emerald-400/80">paolo.ts</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[13px] leading-6 text-stone-800 dark:text-emerald-100/90">
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
        </FadeIn>
      </div>
    </section>
  );
}