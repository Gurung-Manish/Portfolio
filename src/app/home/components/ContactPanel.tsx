import { FiArrowUpRight } from "react-icons/fi";

interface ContactPanelProps {
  onClick?: () => void;
}

export default function ContactPanel({ onClick }: ContactPanelProps) {
  return (
    <div
      className="flex flex-col justify-between h-full w-full p-4 md:p-6 cursor-pointer"
      onClick={onClick} // <-- handle opening panel
    >
      {/* Top text */}
      <h2 className="text-gray-200 text-sm lg:text-lg">
        Have some <br /> questions?
      </h2>

      {/* Bottom row: text left, arrow right */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-5xl lg:text-6xl text-white transition-colors duration-300">
          <span className="font-semibold">Contact </span>
          <span className="italic">me</span>
        </h1>

        <div className="text-white text-3xl transition-colors duration-300">
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
}
