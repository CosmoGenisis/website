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
}: HeroSmarterHiringProps) {
  return (
    <section
  className="w-full min-h-[30vh] md:min-h-[50vh] flex items-center justify-center relative overflow-hidden rounded-[2.4vw] md:rounded-[3.5vw] mb-[12vh]"
  style={{
    background: `url(${backgroundImage}) center/cover no-repeat`,
    maxWidth: "85%",
    right: "-7.4%",
  }}
>
  {/* Subtle vertical stripes */}
  <div
    className="absolute inset-0 z-0 pointer-events-none rounded-[2.4vw] md:rounded-[3.5vw]"
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
  <div className="relative z-10 flex flex-col md:flex-row w-full max-w-[95%] mx-auto items-center justify-between px-[4%] md:px-[6%] py-[4vh] md:py-[6vh]">
    {/* Left side */}
    <div className="flex flex-col gap-[2vh] max-w-[55%] w-full md:w-1/2">
      <h1 className="font-bold text-black mb-[1vh] leading-tight text-[max(4vw,1.8rem)]">
        {title}
      </h1>
      <p className="font-medium text-gray-800 mb-[3vh] text-[max(1.2vw,1rem)]">
        {subtitle}
      </p>
      <button
        className="rounded-full bg-black text-white font-medium shadow hover:bg-gray-900 transition w-fit border-2 border-white px-[1.5vw] py-[1vh] text-[max(1vw,0.9rem)]"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
    {/* Right side */}
    <div className="relative items-end justify-end w-full md:w-[360px] h-[22vh] md:h-[40vh] mt-[4vh] md:mt-0">
      <img
        src={personImage}
        alt="Person"
        className="relative z-10 w-[60%] md:w-[30vw] lg:w-[45vw] h-auto object-contain"
        style={{
          marginLeft: "20%",
          marginBottom: "-16vh",
        }}
      />
    </div>
  </div>
</section>

  );
}
