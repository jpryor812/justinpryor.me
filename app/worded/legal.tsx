import Link from "next/link";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/worded"
          className="worded-display text-sm font-semibold tracking-wide text-[var(--worded-orange)] hover:underline"
        >
          ← Worded
        </Link>
        <h1 className="worded-display mt-6 text-3xl sm:text-4xl font-bold text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[var(--worded-cream)]/55">
          Last updated: {updated}
        </p>
        <div className="mt-8 space-y-5 text-[var(--worded-cream)]/85 leading-relaxed text-[15px] sm:text-base">
          {children}
        </div>
        <p className="mt-10 text-[var(--worded-cream)]/60">
          Contact:{" "}
          <a
            href="mailto:jpryor812@gmail.com?subject=Worded%20Support"
            className="text-[var(--worded-orange)] underline underline-offset-4"
          >
            jpryor812@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
