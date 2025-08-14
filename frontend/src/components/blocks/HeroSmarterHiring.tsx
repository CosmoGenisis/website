import React from "react";

interface HeroSmarterHiringProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
  personImage: string;
}

export default function HeroSmarterHiring({
  title,
  subtitle,
  buttonText = "Get Started",
  onButtonClick,
  backgroundImage,
  personImage,
  dashboardImage,
}: HeroSmarterHiringProps) {
  return (
    <section
      className="w-full min-h-[400px] md:min-h-[700px] flex items-center justify-center relative overflow-hidden rounded-[24px] md:rounded-[40px]"
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat`,
        maxWidth: "80%",
        right: "-10%",
      }}
    >
      {/* Subtle vertical stripes */}
      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-[24px] md:rounded-[40px]"
        style={{
          background: `repeating-linear-gradient(
            to right,
            rgba(255,255,255,0.08) 0px,
            rgba(255,255,255,0.08) 2px,
            transparent 2px,
            transparent 120px
          )`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-[90%] mx-auto items-center justify-between px-4 md:px-12 py-10 md:py-20">
        {/* Left side */}
        <div className="flex flex-col gap-6 max-w-[60%] w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-2 leading-tight">{title}</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-800 mb-8">{subtitle}</p>
          <button
            className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-black text-white text-lg md:text-xl font-medium shadow hover:bg-gray-900 transition w-fit border-2 border-white"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
        {/* Right side */}
        <div className="relative flex items-end justify-end w-full md:w-[600px] h-[260px] md:h-[520px] mt-10 md:mt-0">
          {/* Person image */}
          <img
            src={personImage}
            alt="Person"
            className="relative z-10 w-[60%] md:w-[340px] lg:w-[540px] h-auto md:h-[420px] lg:h-[720px] object-contain"
            style={{
              marginLeft: "40%",
              marginBottom: "-40px",
            }}
          />
        </div>
      </div>
    </section>
  );
}