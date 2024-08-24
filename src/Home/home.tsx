import { useEffect } from "react";
import { useAnimate } from "../hook/animate/useAnimate";
import { useMyContext } from "../hook/useContext";

export default function Home() {
  const { animate, containerRef } = useAnimate();
  const { setActiveIndex } = useMyContext();

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className="w-full" ref={containerRef}>
      <div className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gray-700 before:absolute before:bottom-0 before:left-4 before:h-1 before:w-9 before:bg-blue-600">
        <div className="flex items-center">
          <div>
            <h1 className="text-5xl sm:text-7xl leading-none font-black mb-5">
              Your next <br /> interactive <br /> experience
            </h1>
            <button
              className="relative group flex items-center gap-2"
              onClick={() => setActiveIndex(4)}
            >
              <p className="relative z-10 text-xl">Hire Us</p>
              <img src="/arrow.svg" alt="arrow" className="z-10  w-5 h-5" />
              <span className="absolute top-0 right-0 bg-blue-600 h-7 w-16 z-0 group-hover:w-full transition-width duration-300"></span>
            </button>
          </div>
          <img
            src="/introduction-visual.png"
            alt="cos"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="justify-between hidden md:flex">
        <div className="p-4 opacity-15 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <h2 className="mb-2 text-2xl">Metiew & Smith</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          </p>
        </div>
        <div className="p-4 opacity-15 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <h2 className="mb-2 text-2xl">Fantasy interactive</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          </p>
        </div>
        <div className="p-4 opacity-15 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <h2 className="mb-2 text-2xl">Paul & shark</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          </p>
        </div>
      </div>
    </div>
  );
}
