import AboutMe from "@/components/AboutMe";
import Profile from "@/components/Profile";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

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
