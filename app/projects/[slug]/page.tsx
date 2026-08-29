import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, site } from "@/lib/site";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { GitHubIcon } from "@/components/BrandIcons";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
          <Image src={project.image} alt={`${project.name} thumbnail`} fill className="object-cover" unoptimized />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">{project.name}</h1>
          {(project.status as string) === "in-progress" ? (
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
              In Progress
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <h2 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Technologies</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm dark:bg-zinc-800">
              {tech}
            </li>
          ))}
        </ul>
        <h2 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Features</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-zinc-950"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium dark:border-zinc-700"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}