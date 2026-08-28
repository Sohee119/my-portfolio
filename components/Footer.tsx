import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-zinc-500">© 2026 {site.name}. Built with passion and code.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
