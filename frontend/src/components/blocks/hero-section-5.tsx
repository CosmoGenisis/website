import React from "react";
import { useScroll } from "framer-motion";
import Navbar from '../ui/nav';

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
      <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-6 sm:mb-8 leading-tight">
          {heading}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 text-center mb-8 sm:mb-10 max-w-2xl">
          {subheading}
        </p>
        <button
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-300 to-green-200 text-black text-base sm:text-xl font-medium shadow hover:from-blue-400 hover:to-green-300 transition w-full max-w-xs sm:max-w-sm"
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