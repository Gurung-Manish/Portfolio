"use client";
import { useState } from "react";
import Header from "@/app/home/components/Header";
import SocialLinks from "@/app/home/components/SocialLinks";
import HeroText from "@/app/home/components/HeroText";
import ContactPanel from "@/app/home/components/ContactPanel";
import Projects from "@/app/home/components/Projects";
import ProjectDetail from "@/app/home/components/ProjectDetail";
import Image from "next/image";
import projectsData from "@/app/data/projects.json";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const project = projectsData.find((p) => p.id === selectedProject);

  return (
    <div
      className="grid grid-cols-1 gap-3 min-h-screen p-4 md:grid-cols-8"
      style={{
        gridTemplateRows: "auto 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr",
        height: "100vh",
      }}
    >
      {/* Header (always visible) */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-8"
        style={{ background: "var(--containerBackground)" }}
      >
        <Header />
      </div>

      {/* Middle panels wrapper */}
      <div className="relative col-span-1 md:col-span-6 md:row-start-2 md:row-span-8 overflow-hidden">
        {/* Original panels */}
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-6 grid-rows-8 gap-3 h-full">
            {/* HeroText panel */}
            <div
              className={`flex items-center justify-center rounded-xl col-span-4 row-span-5 min-h-0 transition-all duration-500 transform ${
                selectedProject ? "scale-90 translate-x-[-20%] opacity-50" : ""
              }`}
              style={{ background: "var(--containerBackground)" }}
            >
              <HeroText />
            </div>

            {/* Profile Image panel */}
            <div
              className={`relative flex items-center justify-center rounded-xl col-span-2 row-span-5 overflow-hidden w-full h-full transition-all duration-500 transform ${
                selectedProject ? "scale-90 translate-x-[20%] opacity-50" : ""
              }`}
              style={{ background: "#4b4941" }}
            >
              <Image
                src="/profile_image.png"
                alt="Manish Gurung"
                fill
                className="object-cover"
              />
            </div>

            {/* Short intro panel */}
            <div
              className={`flex items-center justify-center rounded-xl col-span-3 row-span-3 p-4 md:p-8 transition-all duration-500 transform ${
                selectedProject ? "scale-90 translate-y-[-20%] opacity-50" : ""
              }`}
              style={{ background: "var(--containerBackground)" }}
            >
              <p className="text-left text-gray-800 leading-relaxed text-sm sm:text-sm md:text-sm lg:text-lg xl:text-sm">
                Hi, I’m <span className="font-bold">Manish Gurung!</span> a{" "}
                <span className="font-bold">Software Engineer</span> who loves
                turning ideas into real, usable software...
              </p>
            </div>

            {/* Contact Panel */}
            <div
              className={`flex items-center justify-center rounded-xl col-span-3 row-span-3 min-h-0 transition-all duration-500 transform ${
                selectedProject ? "scale-90 translate-y-[20%] opacity-50" : ""
              }`}
              style={{ background: "#4b4941" }}
            >
              <ContactPanel />
            </div>
          </div>
        </div>

        {/* Project Detail panel */}
        {selectedProject && project && (
          <div className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-auto animate-slide-in">
            <ProjectDetail
              project={project}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        )}
      </div>

      {/* Right sidebar Projects */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-7 md:row-span-7 md:row-start-2 text-white min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        <Projects onSelect={(id) => setSelectedProject(id)} />
      </div>

      {/* Social Links (always visible) */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-7 md:row-start-9 text-white min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        <SocialLinks />
      </div>
    </div>
  );
}
