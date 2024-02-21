import AboutMe from "@/components/AboutMe";
import Profile from "@/components/Profile";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  return {
    title: "Backend Developer ? Patriot Kusuma Sejati ??",
    description: "I am software engineer with almost 2 years. I specialize in the backend develpment.",
    authors: {name: "Patriot Kusuma Sejati"},
    keywords: "Backend, Backend Developer, Web Developer, Hire Me, Laravel, PHP",
    creator: "Patriot Kusuma Sejati",
    publisher: "Patriot Kusuma Sejati",
    icons: {
      icon: "https://avatars.githubusercontent.com/u/39677773?v=4",
      shortcut: "https://avatars.githubusercontent.com/u/39677773?v=4",
      apple: "https://avatars.githubusercontent.com/u/39677773?v=4",
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: 'https://avatars.githubusercontent.com/u/39677773?v=4'
      }
    },
    openGraph: {
      title: "Need Backend Developer ? Patriot Kusuma Sejati?",
      description: "I am software engineer with almost 2 years. I specialize in the backend develpment.",
      url: "https://patriotkusuma.my.id",
      type: 'website',
      images: {
        url: "https://avatars.githubusercontent.com/u/39677773?v=4",
        alt: "Patriot Kusuma Sejati"
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index:true,
        follow: true,
      }
    },
    category: 'Software Engineer'
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row md:items-center justify-between md:p-24 p-6 md:gap-x-12" >
      <div className="md:basis-1/4 basis-full dark:bg-gray-800 bg-gray-200 filter-blur-5 md:py-12 hover:shadow-white/20 backdrop-blur-sm  flex items-center md:px-8 p-4 rounded-3xl hover:shadow-2xl duration-500 ease-in-out">
        <Profile/>
      </div>
      <div className="md:basis-3/4 basis-full dark:bg-gray-800 bg-gray-200 backdrop-blur-xl md:py-12 hover:shadow-white/20 flex items-center md:px-8 p-4 rounded-2xl hover:shadow-2xl duration-500 ease-in-out">
        <AboutMe/>
      </div>
    </main>
  );
}
