import { Sparkle } from "lucide-react";
import img from "@/images/Recruiter.png";

export default function RecruiterAiTools() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-6 py-20"
      style={{
        background: "linear-gradient(180deg, #fff 0%, #ffe7d2 100%)", // Replace with your image or gradient
      }}
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Features badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
            <Sparkle className="w-5 h-5" />
            Features
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Designed for recruiters to hire faster and smarter with advanced AI tools.
        </h1>
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
          {/* Left: Features list */}
          <div className="flex flex-col gap-4">
            {/* Active feature */}
            <div className="bg-blue-50 rounded-xl p-6 flex gap-4 items-start shadow">
              <Sparkle className="w-6 h-6 text-gray-500 mt-1" />
              <div>
                <div className="font-semibold text-lg text-gray-900 mb-1">Score & Shortlist Faster</div>
                <div className="text-gray-600 text-base">
                  Let our AI analyze candidate skills, GitHub repos, certifications, and portfolios to give you ranked, verified profiles—no more manual digging.
                </div>
              </div>
            </div>
            {/* Other features */}
            {[
              "Post Jobs Easily",
              "Built-in Candidate Chat",
              "Detailed Hiring Analytics",
              "AI-Powered Screening",
            ].map((feature, idx) => (
              <div
                key={feature}
                className="bg-white rounded-xl p-6 flex gap-4 items-center shadow hover:bg-blue-50 transition"
              >
                <Sparkle className="w-6 h-6 text-gray-500" />
                <span className="font-semibold text-lg text-gray-900">{feature}</span>
              </div>
            ))}
            {/* Button */}
            <button className="mt-8 px-8 py-4 rounded-full bg-black text-white text-base font-medium shadow hover:bg-gray-800 transition w-fit">
              Learn more features
            </button>
          </div>
          {/* Right: Dashboard image */}
          <div className="flex items-center justify-center">
            <img
              src={img}
              alt="Dashboard"
              className="rounded-2xl shadow-lg w-full h-auto object-contain bg-white"
              style={{ maxWidth: 600 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}