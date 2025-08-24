import Header from "@/app/home/components/Header";
import HeroText from "@/app/home/components/HeroText";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2 min-h-screen p-4 md:grid-cols-8 md:grid-rows-9">
      {/* Top Header */}
      <div
        className="flex items-center justify-center rounded col-span-1 md:col-span-8"
        style={{ background: "var(--containerBackground)" }}
      >
        <Header />
      </div>

      {/* Panel top left */}
      <div
        className="flex items-center justify-center rounded col-span-1 md:col-span-4 md:row-span-5 md:row-start-2"
        style={{ background: "var(--containerBackground)" }}
      >
        <HeroText />
      </div>

      {/* Panel top right Profile Image */}
      <div className="bg-gray-500 flex items-center justify-center rounded col-span-1 md:col-span-2 md:col-start-5 md:row-span-5 md:row-start-2">
        12
      </div>

      {/* Panel bottom left */}
      <div
        className="flex items-center justify-center rounded col-span-1 md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-7"
        style={{ background: "var(--containerBackground)" }}
      >
        13
      </div>

      {/* Panel bottom right contact */}
      <div className="bg-gray-700 flex items-center justify-center rounded col-span-1 md:col-span-3 md:col-start-4 md:row-span-3 md:row-start-7">
        14
      </div>

      {/* Panel right sidebar project container */}
      <div
        className="flex items-center justify-center rounded col-span-1 md:col-span-2 md:col-start-7 md:row-span-7 md:row-start-2 text-white"
        style={{ background: "var(--containerBackground)" }}
      >
        15
      </div>

      {/* Panel bottommost right, social links */}
      <div
        className="flex items-center justify-center rounded col-span-1 md:col-span-2 md:col-start-7 md:row-start-9 text-white"
        style={{ background: "var(--containerBackground)" }}
      >
        16
      </div>
    </div>
  );
}
