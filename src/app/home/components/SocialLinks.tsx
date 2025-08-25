// app/home/components/SocialLinks.tsx
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {/* GitHub */}
      <a
        href="https://github.com/Gurung-Manish"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-2xl p-2  hover:text-[#4b4941] transition"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/-manish-gurung/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-2xl p-2  hover:text-[#4b4941] transition"
      >
        <FaLinkedin />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@_manish_gurung_" // replace with your channel URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-2xl p-2 hover:text-[#4b4941] transition-colors"
      >
        <FaYoutube />
      </a>

      {/* Email */}
      <a
        href="mailto:manishgrg496@gmail.com"
        className="text-black text-2xl p-2 hover:text-[#4b4941] transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
