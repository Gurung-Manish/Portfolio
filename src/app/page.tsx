import Header from "@/app/home/components/Header";
import SocialLinks from "@/app/home/components/SocialLinks";
import HeroText from "@/app/home/components/HeroText";
import ContactPanel from "@/app/home/components/ContactPanel";
import Image from "next/image";
export default function Home() {
  return (
    <div
      className="grid grid-cols-1 gap-3 min-h-screen p-4 md:grid-cols-8"
      style={{
        gridTemplateRows: "auto 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr", // flexible row heights
        height: "100vh", // full viewport height
      }}
    >
      {/* Top Header */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-8"
        style={{ background: "var(--containerBackground)" }}
      >
        <Header />
      </div>

      {/* Panel top left */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-4 md:row-span-5 md:row-start-2 min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        <HeroText />
      </div>

      {/* Panel top right Profile Image */}
      <div
        className="relative flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-5 md:row-span-5 md:row-start-2 overflow-hidden w-full h-full"
        style={{ background: "#4b4941" }}
      >
        <Image
          src="/profile_image.png"
          alt="Manish Gurung"
          fill
          className="object-cover"
        />
      </div>

      {/* Panel bottom left */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-7 p-4 md:p-8"
        style={{ background: "var(--containerBackground)" }}
      >
        <p className="text-left text-gray-800 leading-relaxed text-sm sm:text-sm md:text-sm lg:text-lg xl:text-sm">
          Hi, I’m <span className="font-bold">Manish Gurung!</span> a{" "}
          <span className="font-bold">Software Engineer</span> who loves turning
          ideas into real, usable software. Whether it’s designing a lovely UI,
          crafting a smooth frontend, building a robust backend, or connecting
          everything with clean code, I enjoy solving problems that make life
          easier for users. I’m curious, collaborative, and always eager to
          learn new technologies—coding isn’t just my job, it’s my way of
          creating impact.
        </p>
      </div>

      {/* Panel bottom right contact */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-3 md:col-start-4 md:row-span-3 md:row-start-7 min-h-0"
        style={{ background: "#4b4941" }}
      >
        <ContactPanel />
      </div>

      {/* Panel right sidebar project container */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-7 md:row-span-7 md:row-start-2 text-white min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        15
      </div>

      {/* Panel bottommost right, social links */}
      <div
        className="flex items-center justify-center rounded-xl col-span-1 md:col-span-2 md:col-start-7 md:row-start-9 text-white min-h-0"
        style={{ background: "var(--containerBackground)" }}
      >
        <SocialLinks />
      </div>
    </div>
  );
}
