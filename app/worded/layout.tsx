import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./worded.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-worded-display",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-worded-body",
});

export const metadata: Metadata = {
  title: "Worded — Quickfire word battles",
  description:
    "Race the clock to build the highest-scoring word from scrambled letter tiles. Challenge friends, play online, or take on the daily puzzle. Support for Worded.",
  icons: {
    icon: "/worded-icon.png",
  },
  openGraph: {
    title: "Worded — Quickfire word battles",
    description:
      "Race the clock to build the highest-scoring word from scrambled letter tiles. Download free and play today’s puzzle.",
    images: ["/worded-hero.png"],
  },
};

export default function WordedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fredoka.variable} ${nunito.variable} worded-root`}>
      {children}
    </div>
  );
}
