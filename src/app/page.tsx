import Header from "@/app/home/components/Header";
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2 min-h-screen p-4 md:grid-cols-8 md:grid-rows-9">
      {/* Top Header */}
      <div className="bg-gray-300 flex items-center justify-center rounded col-span-1 md:col-span-8">
        <Header />
      </div>

      {/* Panel top left */}
      <div className="bg-gray-400 flex items-center justify-center rounded  col-span-1 md:col-span-4 md:row-span-5 md:row-start-2">
        2
      </div>

      {/* Panel top right Profile Image */}
      <div className="bg-gray-500 flex items-center justify-center rounded col-span-1 md:col-span-2 md:col-start-5 md:row-span-5 md:row-start-2">
        12
      </div>

      {/* panel bottom left */}
      <div className="bg-gray-600 flex items-center justify-center rounded col-span-1 md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-7">
        13
      </div>

      {/* panel bottom right contact */}
      <div className="bg-gray-700 flex items-center justify-center rounded  col-span-1 md:col-span-3 md:col-start-4 md:row-span-3 md:row-start-7">
        14
      </div>

      {/* panel right sidebar project container */}
      <div className="bg-gray-800 text-white flex items-center justify-center rounded col-span-1 md:col-span-2 md:col-start-7 md:row-span-7 md:row-start-2">
        15
      </div>

      {/* panel bottommost right, social links */}
      <div className="bg-gray-900 text-white flex items-center justify-center rounded col-span-1 md:col-span-2 md:col-start-7 md:row-start-9">
        16
      </div>
    </div>
  );
}
