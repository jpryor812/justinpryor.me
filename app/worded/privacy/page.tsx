import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Worded",
  description: "Privacy Policy for the Worded iOS app.",
};

export default function WordedPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 16, 2026">
      <p>
        This Privacy Policy explains how Worded (“the App”) handles information
        when you use the App. Worded is a word game. We do not show ads, and we
        do not sell your personal information.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        1. Information we collect
      </h2>
      <p>
        <strong className="text-white">Account information.</strong> If you sign
        in with Sign in with Apple, we receive an identifier from Apple so we
        can keep you signed in. Apple may provide a name or email depending on
        the options you choose in Apple’s Sign in with Apple sheet. You also
        choose a username (and optionally a country) in the App.
      </p>
      <p>
        <strong className="text-white">Gameplay data.</strong> We store
        game-related data needed to run the App, such as match results, daily
        challenge scores, leaderboard entries, lives/streaks, badge progress,
        friendships, friend requests, and friend challenge state. If online
        features are enabled, this data may be stored on our cloud database
        (Supabase) associated with your account. A rough “last active”
        timestamp may be stored so friends can see when you are online in the
        App.
      </p>
      <p>
        <strong className="text-white">Device preferences.</strong> Settings you
        choose in the App (for example notification, sound, and haptic
        preferences) are stored on your device.
      </p>
      <p>
        <strong className="text-white">Notifications.</strong> If you allow
        notifications, the App may schedule local reminders on your device and,
        with your permission, may send remote push notifications for social
        events such as friend challenges and friend requests.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        2. How we use information
      </h2>
      <p>We use this information to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>create and maintain your account and username;</li>
        <li>operate matches, daily challenges, leaderboards, and related features;</li>
        <li>restore your progress across sessions;</li>
        <li>send the notifications you enable;</li>
        <li>maintain security and prevent abuse;</li>
        <li>improve the App.</li>
      </ul>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        3. Sign in with Apple
      </h2>
      <p>
        Worded uses Sign in with Apple for authentication. We do not receive or
        store your Apple ID password. We do not use your Apple account for
        advertising.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        4. Sharing
      </h2>
      <p>
        We do not sell personal information. We do not share personal
        information with advertisers. We may use service providers that process
        data on our behalf to host the App’s backend (currently Supabase) and
        deliver the App through Apple. Other players may see limited public
        game information, such as your username, leaderboard scores, and badges
        shown in match intros.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        5. Data retention &amp; your choices
      </h2>
      <p>
        We keep account and gameplay data while your account is active and as
        needed to operate the App. You can delete your account in the App under
        Settings → Delete Account. You can also control notification preferences
        in the App or in iOS Settings, and sign out at any time.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        6. Children’s privacy
      </h2>
      <p>
        Worded is not directed to children under 13. If you believe we have
        collected personal information from a child under 13, contact us and we
        will take appropriate steps to delete it.
      </p>

      <h2 className="worded-display text-xl font-bold text-white pt-2">
        7. Contact
      </h2>
      <p>
        For privacy questions or account deletion requests, contact{" "}
        <a
          href="mailto:jpryor812@gmail.com?subject=Worded%20Privacy"
          className="text-[var(--worded-orange)] underline underline-offset-4"
        >
          jpryor812@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
