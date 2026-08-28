"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Camarines Sur Polytechnic Colleges",
    location: "San Miguel Nabua, Camarines Sur",
    period: "2026",
    description:
      "Focused on Software Engineering, Data Structures, Machine Learning and Artificial Intelligence fundamentals.",
    achievements: [
      "Completed Thesis Project focused on AI Development. A web-based machine translation application built with Streamlit and a fine-tuned mBART50 model from Hugging Face."
    ],
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative flex min-h-screen items-center justify-center bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#080d0a]"
    >
      <div className="w-full max-w-5xl">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="EDUCATION"
            title="Academic Background"
            description="My educational journey and formal qualifications in Computer Science."
          />
        </FadeIn>

        <div className="mt-12 flex flex-col gap-6">
          {educationData.map((item, index) => (
            <FadeIn key={index} direction="up" delay={0.1 * (index + 1)}>
              <div className="group rounded-2xl border border-gray-100 bg-[#f8f9fa] p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/40 dark:hover:bg-[#162019] dark:hover:shadow-emerald-950/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {item.institution}
                      </p>
                      
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {item.description && (
                  <p className="mt-4 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-[#1e2820]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Highlights & Achievements
                    </h4>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <Award className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}