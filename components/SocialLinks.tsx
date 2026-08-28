import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

const links = [
  {
    href: site.socials.github,
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: site.socials.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: `mailto:${site.email}`,
    label: "Email",
    icon: Mail,
  },
] as const;

export function SocialLinks({ className = "", iconClassName = "h-5 w-5" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-teal-500/40 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-teal-300"
            >
              <Icon className={iconClassName} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
