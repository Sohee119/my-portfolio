"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Send, CheckCircle2 } from "lucide-react";

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#080d0a]"
    >
      <div className="w-full max-w-5xl">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="CONTACT"
            title="Get In Touch"
            description="Feel free to reach out if you have opportunities, questions, or just want to connect."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <FadeIn direction="up" delay={0.1}>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#f8f9fa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/40 dark:hover:bg-[#162019] dark:hover:shadow-emerald-950/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Email
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                    {site.email}
                  </p>
                </div>
              </a>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#f8f9fa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/40 dark:hover:bg-[#162019] dark:hover:shadow-emerald-950/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    LinkedIn
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                    linkedin.com/in/paolo-espion
                  </p>
                </div>
              </a>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#f8f9fa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/40 dark:hover:bg-[#162019] dark:hover:shadow-emerald-950/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                  <FacebookIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Facebook
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                    facebook.com/paoloespion
                  </p>
                </div>
              </a>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#f8f9fa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/40 dark:hover:bg-[#162019] dark:hover:shadow-emerald-950/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-[#1e3323] dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Instagram
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                    instagram.com/paoloespion
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Contact Form Card */}
          <FadeIn direction="up" delay={0.3} className="md:col-span-3">
            <div className="rounded-2xl border border-gray-100 bg-[#f8f9fa] p-6 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl dark:border-[#1e2820] dark:bg-[#111813] dark:hover:border-emerald-500/30 dark:hover:shadow-emerald-950/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="mt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                    Message Sent!
                  </h4>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-[#1e2820] dark:bg-[#162019] dark:text-gray-100 dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-[#1e2820] dark:bg-[#162019] dark:text-gray-100 dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-[#1e2820] dark:bg-[#162019] dark:text-gray-100 dark:focus:border-emerald-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-[#2d4829] dark:hover:bg-[#385a33]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}