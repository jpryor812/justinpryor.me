import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Justin Pryor | Product Designer",
  description: "Frontend Developer and UX Designer passionate about creating delightful user experiences. Founder of nufriends and User Journeys. Looking for a new role.",
  icons: {
    icon: '/JP-Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="bg-slate-50 text-slate-900">
      {children}
      </body>
    </html>
  );
}
