import { Award } from "lucide-react";
import { site } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  const certifications = site.certifications;

  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials"
          description="Industry certifications will appear here as they are earned."
        />
      </FadeIn>
      <FadeIn className="mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        {certifications.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-10 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <Award className="mx-auto h-8 w-8 text-teal-700 dark:text-teal-300" />
            <p className="mt-4 text-base text-zinc-700 dark:text-zinc-300">
              Currently working toward industry-recognized certifications.
            </p>
            <p className="mt-2 text-sm text-zinc-500">Add entries in lib/site.ts to display them here.</p>
          </div>
        ) : (
          <ul className="grid gap-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{cert.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {cert.organization} · {cert.date}
                </p>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-teal-800 dark:text-teal-300"
                  >
                    View credential
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </FadeIn>
    </section>
  );
}
