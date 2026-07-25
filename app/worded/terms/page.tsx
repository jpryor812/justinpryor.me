import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Terms of Service — Worded",
  description: "Terms of Service for the Worded iOS app.",
};

export default function WordedTermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 16, 2026">
      <p>
        These Terms of Service (“Terms”) govern your use of Worded (the “App”).
        By downloading or using the App, you agree to these Terms. If you do
        not agree, do not use the App.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        1. The App
      </h2>
      <p>
        Worded is a mobile word game that may include daily challenges, online
        matches, friend challenges, optional in-app purchases (such as premium
        access or day passes), and related features. Features may change over
        time.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        2. Eligibility
      </h2>
      <p>
        You must be at least 13 years old (or the minimum age required in your
        country) to use the App.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        3. Accounts
      </h2>
      <p>
        You may need to sign in (including with Sign in with Apple) and choose
        a username. You are responsible for activity under your account.
        Usernames must not be offensive, infringing, or impersonating others.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        4. License
      </h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        license to use the App for entertainment on devices you own or control,
        subject to these Terms and Apple’s App Store terms. You may not cheat,
        automate, or interfere with matchmaking, scoring, leaderboards, or
        other users.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        5. Virtual items and purchases
      </h2>
      <p>
        The App may offer lives, streaks, premium access, day passes, or other
        virtual features. These have no cash value, are not transferable, and
        may be modified or discontinued. Purchases are processed by Apple.
        Refund requests are handled under Apple’s refund policies.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        6. Online play and community
      </h2>
      <p>
        Online features require an internet connection and may be unavailable
        at times. Be respectful. We may suspend or terminate access for abuse,
        cheating, or violations of these Terms.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        7. Disclaimer &amp; liability
      </h2>
      <p>
        THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT
        PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED. TO
        THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER OF WORDED WILL NOT
        BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES ARISING FROM YOUR USE OF THE APP.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        8. Apple’s role
      </h2>
      <p>
        These Terms are between you and the developer of Worded, not Apple.
        Apple is not responsible for the App or its content, and has no
        obligation to provide maintenance or support for the App.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        9. Contact
      </h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a
          href="mailto:jpryor812@gmail.com?subject=Worded%20Terms"
          className="text-[var(--worded-orange)] underline underline-offset-4"
        >
          jpryor812@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
