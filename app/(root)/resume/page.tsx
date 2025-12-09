import { Bitcount_Grid_Single } from "next/font/google";

const btc = Bitcount_Grid_Single({
  weight: "500",
});

export default function Page() {
  return (
    <div className="mt-20 flex justify-center">
      <div className=" flex flex-col items-center bg-[#EFF8E2] p-4 border rounded-2xl md:w-5xl">
        <div className={`text-3xl md:text-6xl ${btc.className} `}>
          manan nayak
        </div>
        <div className="text-lg pt-3 text-center">
          full stack developer with MERN stack experience, seeking to build
          scalable web apps and grow expertise in JavaScript technologies.
          actively exploring opportunities to learn and build!
        </div>
        <div className={`text-xl md:text-4xl ${btc.className} `}>education</div>
      </div>
    </div>
  );
}
