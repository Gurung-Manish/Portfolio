// app/home/components/HeroText.tsx
export default function HeroText() {
  return (
    <div className="flex flex-col justify-end pb-5 w-full h-full md:pl-8">
      {/* Heading */}
      <h1 className="text-left text-xl p-4 md:p-0 md:text-4xl font-semibold mb-0 md:mb-6 leading-tight">
        From coffee to code <br />— let’s{" "}
        <span className="font-normal italic">build</span> <br />
        something <span className="font-normal italic">amazing</span>.
      </h1>

      {/* Download CV Button */}
      <a
        href="/cv/Manish_Gurung.pdf"
        download
        className="ml-4 md:ml-0 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base text-white font-medium rounded hover:bg-[#3a372f] transition w-max bg-black"
      >
        Get CV
      </a>
    </div>
  );
}
