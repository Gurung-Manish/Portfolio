import { useState, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  images: string[];
  background: string;
  details: string;
  techStack: string[];
  work: string[];
  liveDemo?: string;
}

interface ProjectDetailProps {
  project: Project | null | undefined;
  onClose: () => void;
}

export default function ProjectDetail({
  project,
  onClose,
}: ProjectDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!project) return null;

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const prevImage = () => scrollToIndex(Math.max(currentIndex - 1, 0));
  const nextImage = () =>
    scrollToIndex(Math.min(currentIndex + 1, project.images.length - 1));

  return (
    <div className="absolute inset-0 bg-[#4b4941] p-6 overflow-hidden text-white">
      {/* Top bar: title + X */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <button
          onClick={onClose}
          className="text-white text-2xl font-bold hover:text-gray-300 transition"
        >
          ×
        </button>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project background */}
      <p className="mb-6">{project.background}</p>

      {/* Main content: left details (60%), right images (40%) */}
      <div className="flex gap-6">
        {/* Left column: 60% */}
        <div className="flex-1 max-w-[60%]">
          <p className="mb-4">{project.details}</p>
          <h2 className="text-xl mb-4">Project Contributions</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.work.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right column: 40% */}
        <div className="flex-1 max-w-[40%] relative">
          {/* Carousel buttons */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded hover:bg-opacity-60 z-10"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded hover:bg-opacity-60 z-10"
          >
            ›
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth touch-pan-x hide-scrollbar"
          >
            {project.images.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl overflow-hidden"
                style={{ height: "250px", width: "auto" }} // height fixed, width adapts
              >
                <Image
                  src={img}
                  alt={project.title}
                  width={600} // original image width
                  height={400} // original image height
                  quality={100}
                  className="h-full w-auto object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Live demo link */}
      {project.liveDemo && (
        <Link
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col mt-4 text-white group"
        >
          <span className="inline-flex items-center px-4 py-2 transition group-hover:text-gray-300">
            View Live Demo <FiArrowUpRight className="ml-2" />
          </span>
          <span className="block h-[2px] w-full bg-white mt-1 group-hover:bg-gray-300 transition"></span>
        </Link>
      )}
    </div>
  );
}
