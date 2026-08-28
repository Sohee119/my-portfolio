import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">Page not found</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">The page you requested does not exist.</p>
      <Link href="/" className="mt-6 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-zinc-950">
        Back home
      </Link>
    </main>
  );
}
