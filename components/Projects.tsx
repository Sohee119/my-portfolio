import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { site, type Project } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { GitHubIcon } from "@/components/BrandIcons";

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (status === "in-progress") {
    return (
      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
        In Progress
      </span>
    );
  }
  if (status === "featured") {
    return (
      <span className="rounded-full bg-teal-100 px-2.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-400/15 dark:text-teal-300">
        Featured
      </span>
    );
  }
  return null;
}

function ProjectActions({ project }: { project: Project }) {
  const githubDisabled = !project.githubUrl;
  const liveDisabled = !project.liveUrl;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {githubDisabled ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm text-zinc-400 dark:border-zinc-800">
          <GitHubIcon className="h-4 w-4" />
          GitHub soon
        </span>
      ) : (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-800 transition hover:border-teal-500/40 dark:border-zinc-700 dark:text-zinc-100"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      )}
      {liveDisabled ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm text-zinc-400 dark:border-zinc-800">
          <ExternalLink className="h-4 w-4" />
          Demo soon
        </span>
      ) : (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-800 transition hover:border-teal-500/40 dark:border-zinc-700 dark:text-zinc-100"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      )}
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        View Details
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-16/10 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image src={project.image} alt={`${project.name} thumbnail`} fill className="object-cover" unoptimized />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.name}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="Applications I have been building"
          description="Selected work that shows how I approach real product problems, from case management to data and AI-assisted tools."
        />
      </FadeIn>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
        {site.projects.map((project, index) => (
          <FadeIn key={project.slug} delayMs={index * 80}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
