import { useEffect } from "react";
import styles from "./about.module.css";
import { useAnimate } from "../hook/animate/useAnimate";

export function About() {
  const { animate, containerRef } = useAnimate();

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className="w-full" ref={containerRef}>
      <div
        className={`${styles.aboutBanner} relative flex justify-between mb-8`}
      >
        <h2
          className={`${styles.aboutTitle} text-4xl md:text-7xl leading-none font-black mb-5 pt-11 relative`}
        >
          We <br />
          believe in <br />
          passionate <br />
          people
        </h2>
        <img
          src="/about-visual.png"
          alt="about"
          className="z-10 absolute top-0 right-0 hidden md:block"
        />
      </div>
      <div className="flex items-start gap-2 mb-12 cursor-pointer hover:gap-4 transition-all">
        <h3 className="text-1xl font-black mb-5">CAREER</h3>
        <img src="/arrow.svg" alt="arrow" className="z-10 w-5 h-5" />
      </div>
      <div className=" md:flex hidden gap-14">
        <div className={styles.aboutImage}>
          <img
            src="/about-winners.jpg"
            alt="winners"
            className="object-cover w-full h-full"
          />
          <h3>WINNERS</h3>
        </div>
        <div className={styles.aboutImage}>
          <img
            src="/about-philosophy.jpg"
            alt="philosophy"
            className="object-cover w-full h-full"
          />
          <h3>PHILOSOPHY</h3>
        </div>
        <div className={styles.aboutImage}>
          <img
            src="/about-history.jpg"
            alt="history"
            className="object-cover w-full h-full"
          />
          <h3>HISTORY</h3>
        </div>
      </div>
    </div>
  );
}
