"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Code2, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // Sync state with local storage or system preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-[#1e2820] dark:bg-[#080d0a]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Brand Name with Icon */}
        <Link 
          href="/" 
          className="group flex items-center gap-2.5 text-base font-bold text-gray-900 transition-colors hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100/80 text-emerald-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
            <Code2 className="h-4 w-4" />
          </div>
          <span>Paolo Espion</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex dark:text-gray-300">
          <Link href="#about" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            About
          </Link>
          <Link href="#skills" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Skills
          </Link>
          <Link href="#projects" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Projects
          </Link>
          <Link href="#education" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Education
          </Link>
          <Link href="#certifications" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Certifications
          </Link>
          <Link href="#github" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            GitHub
          </Link>
          <Link href="#resume" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Resume
          </Link>
          <Link href="#contact" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100 dark:border-gray-800 dark:text-yellow-400 dark:hover:bg-gray-800/60"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="rounded-full bg-gray-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>

      </div>
    </header>
  );
}