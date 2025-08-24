export default function Header() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3">
      {/* Left: Name */}
      <div className="text-lg font-semibold">Manish Gurung</div>

      {/* Right: Nav Links */}
      <nav className="space-x-6 text-sm">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a href="#projects" className="hover:underline">
          Something
        </a>
      </nav>
    </div>
  );
}
