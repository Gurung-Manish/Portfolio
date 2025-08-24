interface Project {
  id: string;
  title: string;
  images: string[];
  background: string;
  details: string;
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
  if (!project) return null;

  return (
    <div className="absolute inset-0 bg-white p-6 overflow-y-auto">
      <button
        onClick={onClose}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        Close
      </button>

      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="mb-4">{project.background}</p>
      <p className="mb-4">{project.details}</p>

      <ul className="list-disc pl-6 mb-4">
        {project.work.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {project.images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={project.title}
          className="mb-4 rounded-xl"
        />
      ))}

      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Live Demo
        </a>
      )}
    </div>
  );
}
