import React from "react";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export function StorySection() {
  return (
    <div className="bg-white min-h-screen px-4 py-12 flex flex-col items-center">
      {/* Top Heading */}
      <div className="max-w-5xl w-full mx-auto mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 leading-tight">
          Our business is built on a powerful vision:<br />
          There's a smarter way to hire
        </h1>
      </div>

      {/* Section 1: Text Left, Image Right */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        {/* Text Section */}
        <div className="flex flex-col justify-center px-2 md:px-0">
          <span className="uppercase tracking-widest text-gray-700 text-base mb-6" style={{ letterSpacing: "0.1em" }}>
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            A mission to transform<br />recruitment
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            Zordie AI was born from a fundamental observation: traditional hiring processes are inefficient, subjective, and often fail to identify the best talent. We asked ourselves: how can we leverage artificial intelligence to make recruitment more accurate, efficient, and fair? This question drove us to develop an AI-powered platform that revolutionizes how organizations find and evaluate candidates.
          </p>
          <p className="text-lg text-gray-700 max-w-xl">
            Our team believes that matching the right people with the right opportunities creates value for both candidates and companies. By removing bias, increasing efficiency, and providing data-driven insights, we're creating a future where hiring decisions are smarter, faster, and more effective.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/66eab063c614790046e87eef/6728aca1bf64a2c2d5d3864a_GSOFT_0089.avif"
            alt="Modern workspace"
            className="rounded-2xl object-cover w-full max-w-[600px] h-[600px] md:h-[800px] shadow-lg"
            style={{ background: "#f3f3f3" }}
          />
        </div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        {/* Image Section */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="https://cdn.prod.website-files.com/66eab063c614790046e87eef/6728ad400944024306fe88e2_image%201%20(2)%20(1).avif"
            alt="Team collaboration"
            className="rounded-2xl object-cover w-full max-w-[600px] h-[600px] md:h-[800px] shadow-lg"
            style={{ background: "#f3f3f3" }}
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center px-2 md:px-0 order-1 md:order-2">
          <span className="uppercase tracking-widest text-gray-700 text-base mb-6" style={{ letterSpacing: "0.1em" }}>
            OUR VALUES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Our guiding principles
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-16">
            At Zordie AI, we're guided by these core values:
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            ✅ Innovation through intelligence
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            ✅ Data-driven excellence
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
           ✅ Ethical AI and transparency
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            ✅ Human-centered technology
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-16">
            ✅ Continuous learning and improvement
          </p>
          <p className="text-lg text-gray-700 max-w-2xl">
            These principles drive everything we do—from how we develop our AI algorithms to how we interact with our clients. We believe in creating technology that enhances human decision-making rather than replacing it, maintaining the highest ethical standards, and constantly evolving our solutions based on new data and insights.

          </p>
        </div>
      </div>
    </div>
  );
}