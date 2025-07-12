import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const nameRef = useRef(null);
  const labelRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current) return;

    const text = nameRef.current;

    // 1. Initially HIDE all letters (critical for clean start)
    gsap.set(text.querySelectorAll("span"), {
      opacity: 0,
      y: 30,
    });

    // 2. Animate letters one-by-one
    gsap.to(text.querySelectorAll("span"), {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.05,
      ease: "back.out(1.7)",
      delay: 0.2, // Optional slight delay before animation starts
    });

    gsap.set([buttonsRef.current, paraRef.current, labelRef.current], {
      opacity: 0,
    });
    gsap.to([buttonsRef.current, paraRef.current, labelRef.current], {
      delay: 1.5,
      opacity: 1,
      duration: 1,
    });
    gsap.set([buttonsRef.current, paraRef.current], {
      y: 200,
    });
    gsap.to([buttonsRef.current, paraRef.current], {
      delay: 1,
      y: 0,
      duration: 1,
    });

    return () => gsap.killTweensOf(text.querySelectorAll("span"));
  }, []);

  return (
    <section
      id="home"
      className="hero-container min-h-screen flex justify-center items-center relative"
    >
      <div className="black-overlay bg-black/50 absolute z-0 min-h-screen min-w-full"></div>
      <div className="image-container fixed -z-10 top-0 w-full h-full">
        <img
          src="/assets/hero-bg.jpg"
          alt="hero-img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-container text-white relative z-10 max-w-6xl px-4 md:px-8 lg:px-16 flex flex-col items-start gap-8">
        <label
          ref={labelRef}
          className="text-[21px] p-1 px-3 font-semibold bg-amber-700 -mb-8"
        >
          Know about
        </label>
        <h1
          ref={nameRef}
          className="text-5xl md:text-6xl lg:text-7xl font-[600] leading-tight"
        >
          {"Dr. Devanshi Sharma".split("").map((char, i) => (
            <span key={i} style={{ display: "inline-block" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg max-w-2xl" ref={paraRef}>
          Dr. Devanshi Sharma has received MBBS & MD qualifications from the
          prestigious institute of Adesh Medical College. She has served as an
          Assistant Professor in the Department of Medicine
        </p>
        <div className="flex flex-wrap gap-4" ref={buttonsRef}>
          <a
            href="#appointment"
            className="bg-teal-700 text-white py-3 px-6 rounded-lg font-bold hover:bg-teal-900 transition-colors duration-300"
          >
            Book Appointment
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-bold hover:bg-white hover:text-gray-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
