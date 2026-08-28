"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface Repository {
  readonly id: number;
  readonly name: string;
  readonly description: string | null;
  readonly language: string | null;
  readonly html_url: string;
  readonly stargazers_count: number;
  readonly forks_count: number;
}

interface UserProfile {
  readonly avatar_url: string;
  readonly name: string;
  readonly public_repos: number;
  readonly followers: number;
  readonly following: number;
}

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

export function GitHubActivity() {
  const username = site.githubUsername || "Sohee119";
  const profileUrl = site.socials.github || `https://github.com/${username}`;

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]);

  return (
    <section
      id="github"
      className="relative flex min-h-screen items-center justify-center bg-[#f8f9fa] px-6 py-20 transition-colors duration-300 dark:bg-[#0a0f0d]"
    >
      <div className="w-full max-w-5xl">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="GITHUB"
            title="Coding activity"
            description="Live open-source contributions, repositories, and GitHub statistics."
          />
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mt-10">
          <div className="rounded-2xl border border-gray-100 bg-[#f3f4f6]/60 p-6 shadow-xs dark:border-[#1e2820] dark:bg-[#111813]">
            {/* Profile Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                {profile?.avatar_url && (
                  <img
                    src={profile.avatar_url}
                    alt={username}
                    className="h-12 w-12 rounded-full border border-gray-200 dark:border-gray-700"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    @{username}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {profile?.name || "GitHub Developer"}
                  </p>
                </div>
              </div>

              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-[#2d4829] dark:hover:bg-[#385a33]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub profile
              </a>
            </div>

            {/* Contribution Activity Graph */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                Contribution activity
              </h4>
              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200/60 bg-white p-4 dark:border-[#1e2820] dark:bg-[#162019]">
                <img
                  src={`https://ghchart.rshah.org/2d4829/${username}`}
                  alt={`${username}'s Github Contribution Chart`}
                  className="w-full min-w-[650px] dark:invert dark:hue-rotate-180"
                />
              </div>
            </div>

            {/* Repositories Grid */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                Repositories
              </h4>

              {loading ? (
                <div className="mt-4 text-xs text-gray-500">Loading repositories...</div>
              ) : repos.length > 0 ? (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {repos.map((repo) => (
                    <div
                      key={repo.id}
                      className="group flex flex-col justify-between rounded-xl border border-gray-200/60 bg-white/70 p-4 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#162019] dark:hover:border-emerald-500/40 dark:hover:bg-[#1c2920] dark:hover:shadow-emerald-950/20"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                            {repo.name}
                          </span>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition-colors hover:text-gray-700 dark:hover:text-gray-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                        {repo.description && (
                          <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                            {repo.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-2 text-[11px] text-gray-500 dark:border-[#223023] dark:text-gray-400">
                        {repo.language ? (
                          <span className="font-medium text-emerald-700 dark:text-emerald-400">
                            ● {repo.language}
                          </span>
                        ) : (
                          <span />
                        )}

                        <div className="flex items-center gap-3">
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" /> {repo.stargazers_count}
                            </span>
                          )}
                          {repo.forks_count > 0 && (
                            <span className="flex items-center gap-1">
                              <GitFork className="h-3 w-3" /> {repo.forks_count}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 text-xs text-gray-500">No public repositories found.</div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}