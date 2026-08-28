"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Code, Database, Layout, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout className="h-5 w-5" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    title: "Database & Storage",
    icon: <Database className="h-5 w-5" />,
    skills: ["PostgreSQL", "Supabase", "MySQL"],
  },
  {
    title: "Tools & Focus Areas",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Excel",
      "Data Analytics",
      "Python for Data",
      "AI APIs",
      "Machine Learning fundamentals",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen items-center justify-center bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#080d0a]"
    >
      <div className="w-full max-w-5xl">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="SKILLS"
            title="Technical Expertise"
            description="Technologies, languages, and tools I actively use and build solutions with."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} direction="up" delay={0.1 * (index + 1)}>
              <div className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#f8f9fa] p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/40 dark:hover:bg-[#162019] dark:hover:shadow-emerald-950/20">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-xl border border-gray-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-xs dark:border-[#1e2820] dark:bg-[#162019] dark:text-gray-300 dark:hover:border-emerald-500/50 dark:hover:bg-[#1e3323] dark:hover:text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}