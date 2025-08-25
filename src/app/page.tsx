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
import ContactPage from "@/app/home/components/ContactPage";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactClosing, setIsContactClosing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const project = projectsData.find((p) => p.id === selectedProject);
  const handleContactOpen = () => setIsContactOpen(true);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 500);
  };

  const handleContactClose = () => {
    setIsContactClosing(true);
    setTimeout(() => {
      setIsContactOpen(false);
      setIsContactClosing(false);
    }, 500);
  };

  return (
    <div
      className="grid grid-cols-1 gap-6 md:gap-3 min-h-screen p-4 md:grid-cols-8"
      style={{
        gridTemplateRows: "auto 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr",
        height: "100vh", // keeps laptop/tablet full viewport
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-8"
        style={{ background: "var(--containerBackground)" }}
      >
        <Header onContactClick={handleContactOpen} />
      </div>

      {/* Middle panels wrapper */}
      <div className="relative col-span-1 md:col-span-6 md:row-start-2 md:row-span-8 overflow-visible md:overflow-hidden">
        <div className="w-full h-full md:static md:grid md:grid-cols-6 md:grid-rows-8 gap-6 md:gap-3">
          {/* HeroText panel */}
          <div
            className={`flex items-center justify-center rounded-xl col-span-4 row-span-5 min-h-[150px] md:min-h-0 transition-all duration-500 transform 
            ${
              selectedProject || isClosing || isContactOpen || isContactClosing
                ? "scale-0 md:translate-x-[-50%] opacity-0"
                : ""
            }`}
            style={{ background: "var(--containerBackground)" }}
          >
            <HeroText />
          </div>

          {/* Profile Image panel */}
          <div
            className={`relative flex items-center justify-center rounded-xl col-span-2 row-span-5 overflow-hidden w-full h-[200px] md:h-full transition-all duration-500 transform ${
              selectedProject || isClosing || isContactOpen || isContactClosing
                ? "scale-0 md:translate-y-[-50%] opacity-0"
                : ""
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
            className={`flex items-center justify-center rounded-xl col-span-1 md:col-span-3 row-span-1 md:row-span-3 p-4 md:p-8 transition-all duration-500 transform ${
              selectedProject || isClosing || isContactOpen || isContactClosing
                ? "scale-0 md:translate-x-[50%] opacity-0"
                : ""
            }`}
            style={{ background: "var(--containerBackground)" }}
          >
            <p className="text-left text-gray-800 leading-relaxed text-xs lg:text-sm break-words w-full max-w-full">
              “ Hi, I’m <span className="font-bold">Manish Gurung!</span> a{" "}
              <span className="font-bold">Software Engineer</span> who loves
              turning ideas into real, usable software. I enjoy collaborating
              with teams, building scalable applications, and constantly
              learning new technologies to improve workflows and user
              experiences. ”
            </p>
          </div>

          {/* Contact Panel */}
          <div
            className={`flex items-center justify-center rounded-xl col-span-1 md:col-span-3 row-span-1 md:row-span-3 min-h-[100px] md:min-h-0 transition-all duration-500 transform ${
              selectedProject || isClosing || isContactOpen || isContactClosing
                ? "scale-0 md:translate-y-[-50%] opacity-0"
                : ""
            }`}
            style={{ background: "#4b4941" }}
          >
            <ContactPanel onClick={() => setIsContactOpen(true)} />
          </div>
        </div>

        {/* Project Detail panel */}
        {selectedProject && project && (
          <div
            className={`absolute inset-0 rounded-xl shadow-lg overflow-auto 
          ${isClosing ? "animate-slide-out" : "animate-slide-in"}`}
          >
            <ProjectDetail project={project} onClose={handleClose} />
          </div>
        )}

        {/* Contact panel expanded */}
        {isContactOpen && (
          <ContactPage
            onClose={handleContactClose}
            animationClass={
              isContactClosing ? "animate-slide-out" : "animate-slide-in"
            }
          />
        )}
      </div>

      {/* Right sidebar Projects */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-7 md:row-span-7 md:row-start-2 text-white min-h-[100px] md:min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        <Projects onSelect={(id) => setSelectedProject(id)} />
      </div>

      {/* Social Links */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-7 md:row-start-9 text-white min-h-[50px] md:min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        <SocialLinks />
      </div>
    </div>
  );
}
