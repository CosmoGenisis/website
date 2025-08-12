import React from "react";
import { Sparkle } from "lucide-react";

interface FeatureItem {
  title: string;
  description?: string;
}

interface StatItem {
  label: string;
  value: string;
  subLabel: string;
}

interface ProgressItem {
  label: string;
  percent: number;
}

interface CareerCardData {
  image: string;
  title: string;
  description: string;
  progress: ProgressItem[];
  stats: StatItem[];
}

interface CandidateFeaturesShowcaseProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  features: FeatureItem[];
  videoSrc: string;
  badgeText?: string;
  sectionBadge?: string;
  careerCard?: CareerCardData;
}

export function CandidateFeaturesShowcase({
  heading,
  subheading,
  features,
  videoSrc,
  badgeText = "Smart. Simple. Scalable.",
  sectionBadge = "Features",
  careerCard,
}: CandidateFeaturesShowcaseProps) {
  return (
    <section className="min-h-screen w-full bg-[#f3fbff] py-12 px-2 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-[1600px] w-full mx-auto">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-2 gap-2 rounded-full bg-white text-gray-700 font-medium shadow text-sm">
            <Sparkle className="w-3 h-3" />
            {badgeText}
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8">{heading}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#f3fbff] rounded-3xl p-6 md:p-12 ">
          {/* Left: Features */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 gap-2 rounded-full bg-[#eaf6ff] text-grey-700 font-medium shadow text-xl">
                <Sparkle className="w-5 h-5" />
                {sectionBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-5xl font-bold mb-8 text-gray-900">
              Powerful Features to<br />Accelerate Your Job Search
            </h2>
            <p className="text-gray-500 text-base sm:text-xl mb-8 max-w-xl">
              {subheading}
            </p>
            <div className="bg-white rounded-xl  divide-y divide-gray-100">
              {features.map((feature, idx) => (
                <div key={idx} className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 mr-2">{`[${idx + 1}]`}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{feature.title}</div>
                      {feature.description && (
                        <div className="text-gray-600 text-lg mt-1">{feature.description}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Video */}
          <div className="flex items-center justify-center ">
            <div className="w-full max-w-[570px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                style={{ background: "#e5e7eb" }}
              />
            </div>
          </div>
        </div>

        {/* Career Card Section */}
{careerCard && (
  <div className="w-full flex flex-col items-center mt-16">
    <div className="w-full max-w-[1500px] rounded-3xl bg-white shadow-xl p-4 overflow-hidden border-4 border-white">
      <div className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden">
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center bg-[#05203c] p-8">
          <img
            src={careerCard.image}
            alt={careerCard.title}
            className="rounded-xl object-cover w-full max-w-[540px] h-[540px] md:h-[540px] shadow-lg"
          />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center bg-[#05203c] text-white p-8">
          <h3 className="text-4xl md:text-6xl font-bold mb-4">{careerCard.title}</h3>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{careerCard.description}</p>
          <div className="space-y-5 mb-8 flex flex-col gap-4">
            {careerCard.progress.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-xl">{item.label}</span>
                  <span className="font-semibold text-lg">{item.percent}%</span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${item.percent}%`,
                      background: "linear-gradient(90deg, #eaff7b 20%, #b6f09c 100%)"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white px-4 py-8 rounded-b-3xl">
        {careerCard.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center py-2">
            <span className="text-3xl md:text-4xl font-bold text-[#05203c]">{stat.value}</span>
            <span className="text-base md:text-lg text-gray-500">{stat.subLabel}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


      </div>
    </section>
  );
}