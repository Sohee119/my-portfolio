"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { ExternalLink, FolderGit2 } from "lucide-react";

const USERNAME = site.githubUsername || "Sohee119";

interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
}

export function GitHubActivity() {
  return (
    <section
      id="github"
      className="relative flex min-h-screen items-center justify-center bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#080d0a]"
    >
      <div className="w-full max-w-5xl">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="GITHUB"
            title="GitHub Repositories"
            description="Explore my latest open-source code and projects."
          />
        </FadeIn>

        <div className="mt-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-[#f8f9fa] p-6 shadow-xs transition-colors dark:border-[#1e2820] dark:bg-[#111813]">
              
              {/* Profile Header */}
              <div className="flex items-center justify-between border-b border-gray-200/60 pb-6 dark:border-[#1e2820]">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://github.com/${USERNAME}.png`}
                    alt={USERNAME}
                    className="h-14 w-14 rounded-full border-2 border-emerald-500/30 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      @{USERNAME}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      GitHub Developer
                    </p>
                  </div>
                </div>

                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1e3323] px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-700 hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub profile
                </a>
              </div>

              {/* Repositories Grid Section */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Featured Repositories
                </h4>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {site.githubRepos.map((repo: Repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between rounded-xl border border-gray-200/60 bg-white p-5 transition-all hover:border-emerald-500/50 hover:shadow-md dark:border-[#1e2820] dark:bg-[#0b100d] dark:hover:border-emerald-500/40"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <FolderGit2 className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            <h5 className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                              {repo.name}
                            </h5>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                        </div>
                        <p className="mt-2.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                          {repo.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100 dark:border-[#1e2820]">
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                          {repo.language}
                        </span>
                        <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                          View →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}