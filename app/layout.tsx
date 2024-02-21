import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Backend Developer ? Patriot Kusuma Sejati ??",
  description:
    "I am software engineer with almost 2 years. I specialize in the backend develpment.",
  authors: { name: "Patriot Kusuma Sejati" },
  keywords: "Backend, Backend Developer, Web Developer, Hire Me, Laravel, PHP",
  creator: "Patriot Kusuma Sejati",
  publisher: "Patriot Kusuma Sejati",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/39677773?v=4",
    shortcut: "https://avatars.githubusercontent.com/u/39677773?v=4",
    apple: "https://avatars.githubusercontent.com/u/39677773?v=4",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://avatars.githubusercontent.com/u/39677773?v=4",
    },
  },
  openGraph: {
    title: "Need Backend Developer ? Patriot Kusuma Sejati?",
    description:
      "I am software engineer with almost 2 years. I specialize in the backend develpment.",
    url: "https://patriotkusuma.my.id",
    type: "website",
    images: {
      url: "https://avatars.githubusercontent.com/u/39677773?v=4",
      alt: "Patriot Kusuma Sejati",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
