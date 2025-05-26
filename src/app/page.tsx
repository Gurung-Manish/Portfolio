import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#111010] text-white h-screen w-screen flex flex-col overflow-hidden px-4 sm:px-6 py-4">
      {/* Header */}
      <header className="bg-[#e5dbc4] text-black px-4 rounded-xl sm:px-6 py-3 flex justify-between items-center">
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
      {/* Content Grid */}
      <main className="flex-1 mt-4 h-full">
        <div className="grid grid-cols-[2fr_1fr] gap-4 h-full">
          {/* Left column with uneven grid */}
          <div className="h-full flex flex-col gap-4">
            {/* Top row grid: 2 columns, 2fr and 1fr */}
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "2fr 1fr",
                height: "60%", // or 1.5fr of total height
              }}
            >
              {/* Big Intro */}
              <div className="bg-[#e5dbc4] text-black p-4 rounded-xl flex flex-col justify-between">
                <h2 className="text-2xl font-bold leading-tight">
                  Let’s build clean & <em>smart</em> software together.
                </h2>
                <p className="text-sm mt-4">
                  Experienced in crafting frontend and backend apps with real
                  value.
                </p>
              </div>

              {/* Profile Image */}
              <div className="bg-[#2e2d2b] rounded-xl overflow-hidden relative">
                <Image
                  src="/vercel.svg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom row grid: 2 equal columns */}
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "1fr 1fr",
                height: "40%", // or 1fr of total height
              }}
            >
              {/* Bio Block */}
              <div className="bg-[#e5dbc4] text-black p-4 rounded-xl">
                <p className="text-sm">
                  Software Engineer blending design & logic to craft
                  user-focused solutions. Based in London.
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-[#2e2d2b] p-4 rounded-xl flex flex-col justify-between">
                <p className="text-gray-400 text-sm">Have questions?</p>
                <h3 className="text-xl font-semibold mt-4">Contact me →</h3>
              </div>
            </div>
          </div>

          {/* Right column with taller container + footer */}
          <div className="flex flex-col justify-between h-full gap-4">
            {/* Portfolio Categories (taller container) */}
            <div className="bg-[#e5dbc4] text-black rounded-xl p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-semibold">Portfolio Projects</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <p>• Web Apps</p>
                  <p>• Mobile Apps</p>
                  <p>• Backend APIs</p>
                </div>
              </div>
              <div className="text-right text-xs underline cursor-pointer">
                View All →
              </div>
            </div>

            {/* Footer Buttons (smaller footer) */}
            <div className="bg-[#e5dbc4] text-black p-4 rounded-xl flex items-center justify-between text-sm font-medium">
              <button>GitHub</button>
              <button>LinkedIn</button>
              <button>Email</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
