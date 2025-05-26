import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#111010] text-white min-h-screen w-full flex flex-col overflow-hidden px-4 sm:px-6 py-4">
      {/* Header */}
      <header className="bg-[#e5dbc4] text-black px-4 rounded-xl sm:px-6 py-6 flex justify-between items-center">
        <div className="text-lg font-semibold">Manish Gurung</div>
        <nav className="space-x-6 text-sm">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Responsive Content */}
      <main className="flex-1 mt-4 h-full flex flex-col md:grid md:grid-cols-[3fr_1fr] md:gap-4">
        {/* Left column in desktop, stacked in mobile */}
        <div className="flex flex-col gap-4 order-1 md:order-none">
          {/* Top part with image and intro */}
          <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] md:gap-4 md:h-[60%]">
            {/* Big Intro */}
            <div className="bg-[#e5dbc4] text-black p-4 rounded-xl flex flex-col justify-between order-2 ">
              <h2 className="text-2xl font-bold leading-tight ">
                Let’s build clean & <em>smart</em> software together.
              </h2>
              <p className="text-sm mt-4">
                Experienced in crafting frontend and backend apps with real
                value.
              </p>
            </div>

            {/* Profile Image */}
            <div className="bg-[#2e2d2b] rounded-xl overflow-hidden relative order-1">
              <Image
                src="/vercel.svg"
                alt="Profile"
                height={100}
                width={20}
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom part with bio and contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[40%]">
            {/* Bio Block */}
            <div className="bg-[#e5dbc4] text-black p-4 rounded-xl order-3">
              <p className="text-sm">
                Software Engineer blending design & logic to craft user-focused
                solutions. Based in London.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-[#2e2d2b] p-4 rounded-xl flex flex-col justify-between order-4">
              <p className="text-gray-400 text-sm">Have questions?</p>
              <h3 className="text-xl font-semibold mt-4">Contact me →</h3>
            </div>
          </div>
        </div>

        {/* Right column in desktop, stacked below on mobile */}
        <div className="flex flex-col gap-4 order-2 md:order-none mt-4 md:mt-0">
          {/* Portfolio Projects */}
          <div className="bg-[#e5dbc4] text-black rounded-xl p-4 flex flex-col justify-between flex-grow order-5">
            <div>
              <h3 className="font-semibold">Portfolio Projects</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>• Web Apps</p>
                <p>• Mobile Apps</p>
                <p>• Backend APIs</p>
              </div>
            </div>
            <div className="text-right text-xs underline cursor-pointer mt-4">
              View All →
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="bg-[#e5dbc4] text-black p-4 rounded-xl flex items-center justify-between text-sm font-medium order-6">
            <button>GitHub</button>
            <button>LinkedIn</button>
            <button>Email</button>
          </div>
        </div>
      </main>
    </div>
  );
}
