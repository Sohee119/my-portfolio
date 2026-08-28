"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormState>;

const initialState: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please write a message of at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} <${values.email.trim()}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  // Format LinkedIn display text by removing https:// or trailing slashes
  const linkedinDisplay = site.socials.linkedin
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Recruiters and hiring managers can reach me directly. The form opens your email client so no secrets are stored in the site."
        />
      </FadeIn>
      <FadeIn className="mx-auto mt-12 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Mail className="h-5 w-5 text-teal-700 dark:text-teal-300" />
            <span>
              <span className="block text-sm text-zinc-500">Email</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-50">{site.email}</span>
            </span>
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <GitHubIcon className="h-5 w-5 text-teal-700 dark:text-teal-300" />
            <span>
              <span className="block text-sm text-zinc-500">GitHub</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-50">{site.githubUsername}</span>
            </span>
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <LinkedInIcon className="h-5 w-5 text-teal-700 dark:text-teal-300" />
            <span>
              <span className="block text-sm text-zinc-500">LinkedIn</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-50">{linkedinDisplay}</span>
            </span>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Name</span>
              <input
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2.5 outline-none focus:border-teal-500 dark:border-zinc-700"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              ) : null}
            </label>
            <label className="block">
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2.5 outline-none focus:border-teal-500 dark:border-zinc-700"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              ) : null}
            </label>
            <label className="block">
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Message</span>
              <textarea
                name="message"
                rows={5}
                value={values.message}
                onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
                className="mt-2 w-full resize-y rounded-xl border border-zinc-300 bg-transparent px-3 py-2.5 outline-none focus:border-teal-500 dark:border-zinc-700"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              ) : null}
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Send Message
          </button>
          {submitted ? (
            <p className="mt-3 text-sm text-teal-800 dark:text-teal-300" role="status">
              Your email client should open with the message. If it does not, email {site.email} directly.
            </p>
          ) : null}
        </form>
      </FadeIn>
    </section>
  );
}