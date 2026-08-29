"use client";

import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ArrowUpRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#080d0a]">
      {/* 1. Background Animation Layer */}
      <AnimatedBackground />

      {/* 2. Main Hero Content Layer */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              ACTIVELY SEEKING FOR ENTRY-LEVEL AND TECHNICAL ROLES
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Hi, I'm Paolo Espion.
            </h1>

            <p className="mt-4 text-lg font-semibold text-emerald-600 dark:text-emerald-400 sm:text-xl">
              Computer Science Graduate | Aspiring Software Engineer & AI Engineer
            </p>

            <p className="mt-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
              I am a Computer Science graduate passionate about software development, data analytics, artificial intelligence, and building practical technology solutions. I enjoy learning new technologies, solving problems, and turning ideas into functional applications. I am currently building my skills and portfolio while looking for opportunities to start my professional career in IT.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                View My Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-[#1e2820] dark:bg-[#111813] dark:text-gray-300 dark:hover:bg-[#162019]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Code Block Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-200/80 bg-[#111813] p-6 shadow-xl dark:border-[#1e2820]">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="h-3 w-3 rounded-full bg-gray-600" />
                  <span className="h-3 w-3 rounded-full bg-gray-600" />
                </div>
                <span className="text-xs font-mono text-gray-400">paolo.ts</span>
              </div>

              <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-emerald-400">
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
      </div>
    </section>
  );
}