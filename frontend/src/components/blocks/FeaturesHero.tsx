import React from "react";

interface FeaturesHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description?: React.ReactNode;
  backgroundGradient?: string;
  dashboardImage: string;
  peopleImages?: Array<{ src: string; alt: string; style?: React.CSSProperties }>;
}

export function FeaturesHero({
  title,
  subtitle,
  description,
  backgroundGradient = "linear-gradient(120deg, #ffe4d2 0%, #f2f7ff 50%, #f5e8ff 100%)",
  dashboardImage,
  peopleImages = [],
}: FeaturesHeroProps) {
  return (
    <section
      className="w-full relative overflow-hidden px-4 md:px-12 py-10 md:py-48"
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Top row */}
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-medium text-black leading-tight mb-12">
            {title}
          </h1>
        </div>

        {/* Right content */}
        <div className="flex-1 mt-6 md:mt-4 flex flex-col gap-4">
          <p className="text-xl md:text-2xl font-medium text-gray-800">{subtitle}</p>
          {description && (
            <p className="text-base text-gray-600 mb-4">{description}</p>
          )}
          <div className="flex items-center gap-2">
            {peopleImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                style={img.style}
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">Trusted already by 10k+</span>
          </div>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full mt-10 flex justify-center items-center">
        <img
          src={dashboardImage}
          alt="Dashboard"
          className="w-full object-contain rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
