import Link from "next/link";
import { PATHROUTES } from "./helpers/navItems";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 rounded-full border-8 border-gray-800 relative">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-gray-700"
              style={{
                width: `${90 - i * 10}%`,
                height: `${90 - i * 10}%`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-burnt-orange rounded-full"></div>
        </div>
      </div>

      <div className="z-10 text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          Be welcome to <span className="text-custume-orange">Spinify</span>
        </h1>

        <h3 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-8">
          Are you ready to spin your head?
        </h3>
        <Link href={PATHROUTES.HOME} className="m-4">
          <button className="bg-custume-orange text-white font-bold py-4 px-8 rounded-full text-xlduration-300 transform hover:scale-105 hover:bg-burnt-orange">
            Let´s spin
          </button>
        </Link>
      </div>
    </div>
  );
}
