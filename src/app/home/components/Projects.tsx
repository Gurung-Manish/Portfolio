import { FiArrowRight } from "react-icons/fi";
import projects from "@/app/data/projects.json";

export default function Projects({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) {
  return (
    <div className="w-full h-full flex flex-col p-4">
      <h2 className="text-xl text-black font-bold mb-4">Projects</h2>

      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelect(project.id)}
            className="flex text-black font-semibold items-center justify-between border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4b4941] transition"
          >
            <h2>{project.title}</h2>
            <FiArrowRight className="text-lg" />
          </button>
        ))}
      </div>
    </div>
  );
}
