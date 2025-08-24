// app/home/components/ContactPanel.tsx
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export default function ContactPanel() {
  return (
    <div className="flex flex-col justify-between h-full w-full p-4 md:p-6">
      {/* Top text */}
      <h2 className="text-md text-gray-200 mb-2">
        Have some <br /> questions?
      </h2>
      {/* Bottom row: text left, arrow right */}
      <Link
        href="/contact"
        className="group flex items-center justify-between w-full cursor-pointer"
      >
        <h1 className="text-6xl text-white transition-colors duration-300 group-hover:text-gray-300">
          <span className="font-semibold">Contact </span>
          <span className="italic">me</span>
        </h1>

        <div className="text-white text-3xl transition-colors duration-300 group-hover:text-gray-300">
          <FiArrowUpRight />
        </div>
      </Link>
    </div>
  );
}
