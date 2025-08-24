export default function Header() {
  return (
    <div className={`w-full flex justify-between items-center px-4 py-3 `}>
      {/* Left: Name */}
      <h1 className={`text-3xl font-semibold`}>
        Manish <span className="font-light italic">Gurung</span>
      </h1>

      {/* Right: Nav Links */}
      <nav className="space-x-6 text-md">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </div>
  );
}
