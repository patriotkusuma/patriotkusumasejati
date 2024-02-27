import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Backend Developer ? Patriot Kusuma Sejati ??",
  description:
    "I am software engineer with almost 2 years. I specialize in the backend develpment.",
  authors: { name: "Patriot Kusuma Sejati" },
  keywords: "Backend, Backend Developer, Web Developer, Hire Me, Laravel, PHP",
  creator: "Patriot Kusuma Sejati",
  publisher: "Patriot Kusuma Sejati",
  icons: {
    icon: "/img/iot.jpg",
    shortcut: "/img/iot.jpg",
    apple: "/img/iot.jpg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/iot.jpg",
    },
  },
  openGraph: {
    title: "Need Backend Developer ? Patriot Kusuma Sejati?",
    description:
      "I am software engineer with almost 2 years. I specialize in the backend develpment.",
    url: "https://patriotkusuma.my.id",
    type: "website",
    images: {
      url: "https://patriotkusuma.my.id/img/iot.jpg",
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row gap-y-5  justify-between md:px-10 mx-auto   p-6 md:gap-x-5">
      <div className="md:basis-1/4 basis-full dark:bg-gray-800 bg-gray-200 filter-blur-5 md:py-12 hover:shadow-white/20 backdrop-blur-sm  flex items-start md:px-3 p-4 rounded-3xl hover:shadow-2xl duration-500 ease-in-out">
        <Profile />
      </div>
      <div className="md:basis-3/4 basis-full flex flex-col flex-wrap overflow-hidden relative gap-y-5">
        <AboutMe />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
