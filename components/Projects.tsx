"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24 bg-[#F5F2EB] dark:bg-[#0B0F0C] transition-colors duration-200">
      {/* Section Header */}
      <FadeIn direction="up">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work & Side Projects"
          description="A showcase of full-stack web applications, tools, and technical experiments."
        />
      </FadeIn>

      {/* Staggered Grid of Project Cards */}
      <StaggerContainer className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2">
        {site.projects.map((project) => (
          <StaggerItem key={project.name}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-300/80 bg-[#FAF8F3] p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-emerald-900/50 dark:bg-[#121914]"
            >
              <div>
                {/* Project Header / Badges */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-wider text-stone-700 uppercase dark:text-emerald-400">
                    {project.status?.replace("-", " ") ?? "featured"}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-emerald-300"
                        aria-label={`GitHub repo for ${project.name}`}
                      >
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-emerald-300"
                        aria-label={`Live demo for ${project.name}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="mt-4 text-xl font-bold text-stone-900 group-hover:text-stone-700 dark:text-stone-100 dark:group-hover:text-emerald-300">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                  {project.summary || project.description}
                </p>
              </div>

              {/* Technologies Tags */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-stone-200 dark:border-emerald-900/30">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-full border border-stone-300/70 bg-[#EFECE6] px-2.5 py-1 text-xs font-medium text-stone-800 shadow-xs dark:border-emerald-800/40 dark:bg-[#1A241D] dark:text-emerald-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}