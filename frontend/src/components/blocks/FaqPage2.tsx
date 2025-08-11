import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import img1 from "@/images/Faq_1.png";
import img2 from "@/images/Faq_2.png";
import img3 from "@/images/Faq_background.png";

const faqs = [
  {
    question: "What is Zordie for Job Seekers?",
    answer:
      "Zordie is an AI-powered hiring and career platform designed for both recruiters and job seekers to simplify hiring and job discovery.",
  },
  {
    question: "How does Zordie improve efficiency?",
    answer:
      "Recruiters can automate job posting, screen candidates using AI, manage pipelines, and collaborate with their teams in one dashboard.",
  },
  {
    question: "How i track my Interview Progress",
    answer:
     "Job seekers can discover verified jobs, track interviews, participate in hiring contests, and get skill-based insights to improve.",
  },
  {
    question: "How is Zordie different from other hiring/job platforms?",
    answer:
      "Zordie integrates smart screening, AI orchestration, candidate insights, and end-to-end tracking for both recruiters and candidates.",
  },
  {
    question: "Can I verify projects, portfolios, or certifications on Zordie?",
    answer:
      "Yes, Zordie auto-verifies GitHub projects, certifications, and portfolios using intelligent crawling and authenticity checks.",
  },
  {
    question: "Are contests and challenges open to everyone?",
    answer:
      "Yes! Contests are open to all verified job seekers and often lead to direct hiring by top companies.",
  },
];

export default function FaqPage2() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleToggle = (idx: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-20">
      {/* Badge */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
          <MessageCircle className="w-5 h-5" />
          FAQ
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
        Answers to your<br />common AI questions
      </h1>
      {/* FAQ List */}
      <div className="max-w-5xl w-full mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.has(idx);
          return (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-gray-200"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                {isOpen ? (
                  <Minus className="w-6 h-6 text-blue-600" />
                ) : (
                  <Plus className="w-6 h-6 text-blue-600" />
                )}
              </button>
              {/* Answer */}
              <div
                className={`px-6 pb-5 text-gray-600 text-base transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
      {/* FAQ List End */}
      {/* Hero Banner Card at the End */}
      <div className="w-full flex justify-center mt-16">
        <div
          className="w-full max-w-[1400px] min-h-[380px] rounded-[56px] flex items-center justify-center relative overflow-hidden"
          style={{
            background: "linear-gradient(120deg, #5bb6f9 0%, #7ec6ff 40%, #eaf6ff 100%)",
          }}
        >
          {/* Decorative clouds and lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 1 }}
          >
            <ellipse cx="300" cy="320" rx="180" ry="60" fill="#fff" fillOpacity="0.35" />
            <ellipse cx="900" cy="340" rx="160" ry="50" fill="#fff" fillOpacity="0.32" />
            <ellipse cx="700" cy="260" rx="120" ry="40" fill="#fff" fillOpacity="0.22" />
            <ellipse cx="500" cy="120" rx="90" ry="30" fill="#fff" fillOpacity="0.18" />
            <ellipse cx="1050" cy="80" rx="70" ry="22" fill="#fff" fillOpacity="0.13" />
            {/* Shooting lines */}
            <line x1="200" y1="80" x2="400" y2="140" stroke="#fff" strokeWidth="2" strokeOpacity="0.18" />
            <line x1="800" y1="60" x2="1100" y2="120" stroke="#fff" strokeWidth="2" strokeOpacity="0.18" />
            <line x1="600" y1="200" x2="900" y2="260" stroke="#fff" strokeWidth="2" strokeOpacity="0.12" />
          </svg>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-700/10 backdrop-blur-sm rounded-[56px]" style={{ zIndex: 2 }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-8 py-12">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Hire Smarter with Zordie
              </h2>
              <p className="text-xl text-white/90 mb-8">
                From job posting to onboarding - all in one platform.
              </p>
              <button className="bg-white text-gray-900 font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 transition">
                Start Hiring Now
              </button>
            </div>
            {/* Right: People Images */}
            <div className="flex-1 flex items-end justify-center relative min-h-[320px]">
              <img
                src={img1}
                alt="Person 1"
                className="absolute left-1/2 bottom-0 w-[320px] h-auto object-cover"
                style={{
                  zIndex: 3,
                  top: "80%",
                  left: "50%",
                  transform: "translate(-60%, -50%)",
                }}
                draggable={false}
              />
              <img
                src={img2}
                alt="Person 2"
                className="absolute left-1/2 bottom-0 w-[320px] h-auto object-cover"
                style={{
                  zIndex: 3,
                  top: "80%",
                  left: "50%",
                  transform: "translate(0%, -50%)",
                }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}