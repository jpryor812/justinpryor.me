"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const CONTACT_HREF =
  "mailto:jpryor812@gmail.com?subject=Worded%20Support";

const howToPlay = [
  "Flip a rack of letter tiles",
  "Build the best word you can before time runs out",
  "Lock it in — or keep searching for a higher score",
  "Win rounds. Win the match.",
];

const playYourWay = [
  {
    title: "Daily Challenge",
    detail: "A fresh word puzzle every day",
  },
  {
    title: "The Ladder",
    detail: "Push through tougher racks",
  },
  {
    title: "Play Online",
    detail: "Quick matches against real players",
  },
  {
    title: "Challenge Friends",
    detail: "Send a match in seconds",
  },
  {
    title: "Play the Computer",
    detail: "Practice anytime, any difficulty",
  },
];

const levelUp = [
  "Earn badges and build win streaks",
  "Track your stats and climb daily leaderboards",
  "Reveal top words after you play",
  "Go Premium for unlimited games and full daily reveals",
];

export default function WordedPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/worded-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-110 sm:scale-100"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--worded-teal-deep)] via-[var(--worded-teal-deep)]/75 to-[var(--worded-teal)]/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--worded-teal-deep)]/80 via-transparent to-transparent"
          aria-hidden
        />

        <span
          className="worded-spark absolute top-[14%] right-[12%] text-[var(--worded-orange)] text-2xl select-none z-[1]"
          aria-hidden
        >
          ✦
        </span>
        <span
          className="worded-spark worded-spark-delay absolute top-[32%] left-[8%] text-[var(--worded-cream)] text-lg select-none z-[1]"
          aria-hidden
        >
          ✦
        </span>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-24 sm:px-10 lg:px-16 lg:pb-20">
          <motion.h1
            className="worded-display text-[clamp(3.75rem,14vw,7.5rem)] leading-[0.88] font-bold tracking-tight text-white max-w-4xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            WORDED
          </motion.h1>

          <motion.p
            className="mt-5 text-xl sm:text-2xl font-bold text-[var(--worded-cream)] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Quickfire word battles
          </motion.p>

          <motion.p
            className="mt-3 text-base sm:text-lg text-[var(--worded-cream)]/75 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            Race the clock to build the highest-scoring word from scrambled
            letter tiles.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <a href={CONTACT_HREF} className="worded-contact">
              <Mail className="w-5 h-5" aria-hidden />
              Contact
            </a>
            <a
              href="#support"
              className="text-[var(--worded-cream)]/85 font-semibold underline-offset-4 hover:underline hover:text-white transition-colors"
            >
              Support
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            className="mx-auto w-full max-w-[240px] worded-phone"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
          >
            <Image
              src="/worded-app-screenshot.png"
              alt="Worded home screen showing Quick Match and Daily Challenges"
              width={603}
              height={1311}
              className="w-full h-auto rounded-[2rem]"
            />
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="worded-display text-3xl sm:text-4xl font-bold text-white">
              Smart choices beat long words.
            </h2>
            <p className="mt-4 text-lg text-[var(--worded-cream)]/80 leading-relaxed mx-auto max-w-lg">
              Points come from the tiles you play — so the highest-scoring word
              wins, not always the longest one.
            </p>
            <p className="mt-4 text-lg text-[var(--worded-cream)]/80 leading-relaxed mx-auto max-w-lg">
              Challenge friends, jump into online matchmaking, or sharpen your
              skills against the computer. Then come back for a new daily puzzle
              and climb the leaderboard.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 lg:px-16 border-t border-white/10">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="worded-display text-3xl sm:text-4xl font-bold text-white">
            How to play
          </h2>
          <ol className="mt-8 space-y-4">
            {howToPlay.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 text-lg text-[var(--worded-cream)]/85 leading-relaxed"
              >
                <span className="worded-display shrink-0 text-[var(--worded-orange)] font-bold tabular-nums">
                  {index + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 lg:px-16 border-t border-white/10">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="worded-display text-3xl sm:text-4xl font-bold text-white">
            Play your way
          </h2>
          <p className="mt-3 text-lg text-[var(--worded-cream)]/70 max-w-xl">
            Fast, addictive word battles you can play in minutes.
          </p>
          <ul className="mt-8 space-y-5">
            {playYourWay.map((mode) => (
              <li key={mode.title} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <p className="worded-display text-xl font-bold text-[var(--worded-orange)]">
                  {mode.title}
                </p>
                <p className="mt-1 text-lg text-[var(--worded-cream)]/80">
                  {mode.detail}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 lg:px-16 border-t border-white/10">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="worded-display text-3xl sm:text-4xl font-bold text-white">
            Level up
          </h2>
          <ul className="mt-8 space-y-4">
            {levelUp.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-lg text-[var(--worded-cream)]/85 leading-relaxed"
              >
                <span className="text-[var(--worded-orange)]" aria-hidden>
                  ◆
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-[var(--worded-cream)]/80 leading-relaxed max-w-2xl">
            Whether you love word puzzles, anagrams, or competitive multiplayer,
            Worded is built for fast, addictive word battles you can play in
            minutes. Download free and play today&apos;s puzzle.
          </p>
        </motion.div>
      </section>

      <section
        id="support"
        className="relative px-6 py-20 sm:px-10 lg:px-16 border-t border-white/10"
      >
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="worded-display text-3xl sm:text-4xl font-bold text-white">
            Support
          </h2>
          <p className="mt-4 text-lg text-[var(--worded-cream)]/80 leading-relaxed">
            Questions, feedback, bug reports, or account help — email and
            you&apos;ll hear back as soon as possible.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={CONTACT_HREF} className="worded-contact">
              <Mail className="w-5 h-5" aria-hidden />
              Contact
            </a>
          </div>
          <p className="mt-5 text-[var(--worded-cream)]/60">
            <a
              href={CONTACT_HREF}
              className="underline underline-offset-4 hover:text-[var(--worded-cream)]"
            >
              jpryor812@gmail.com
            </a>
          </p>
        </motion.div>
      </section>

      <footer className="px-6 pb-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--worded-cream)]/50">
          <div className="flex items-center gap-3">
            <Image
              src="/worded-icon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="worded-display font-semibold tracking-wide text-[var(--worded-cream)]/70">
              WORDED
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/worded/privacy"
              className="hover:text-[var(--worded-cream)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/worded/terms"
              className="hover:text-[var(--worded-cream)] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="hover:text-[var(--worded-cream)] transition-colors"
            >
              justinpryor.me
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
