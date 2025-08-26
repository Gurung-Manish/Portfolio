interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <div className={`w-full flex justify-between items-center px-4 py-3 `}>
      {/* Left: Name */}
      <h1 className={`text-xl md:text-3xl font-semibold`}>
        Manish <span className="font-light italic">Gurung</span>
      </h1>

      {/* Right: Nav Links */}
      <nav className="text-sm md:text-md space-x-2 md:space-x-6 ">
        <a href="#about" className="font-semibold hover:underline">
          About
        </a>
        <button
          onClick={onContactClick}
          className="font-semibold hover:underline"
        >
          Contact
        </button>
      </nav>
    </div>
  );
}
