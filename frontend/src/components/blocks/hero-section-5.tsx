import React from "react";
import Navbar from "../ui/nav";

interface HeroSectionProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
}

export function HeroSection({
  heading,
  subheading,
  buttonText,
  onButtonClick,
}: HeroSectionProps) {
  return (
    <>
      <HeroHeader />
      <section className="min-h-screen flex flex-col items-center  bg-white px-[4%] py-[24vh]">
        <h1 className="font-bold text-black text-center mb-[3vh] leading-tight text-[max(5vw,2rem)]">
          {heading}
        </h1>
        <p className="text-gray-500 text-center mb-[5vh] max-w-[60ch] text-[max(1.4vw,1rem)]">
          {subheading}
        </p>
        <button
          className="rounded-full bg-gradient-to-r from-blue-300 to-green-200 text-black font-medium shadow hover:from-blue-400 hover:to-green-300 transition w-full max-w-[280px] sm:max-w-[340px] px-[2vw] py-[1vh] text-[max(1.1vw,0.95rem)]"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </section>
    </>
  );
}

export const HeroHeader = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};
