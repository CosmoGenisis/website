import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Zordie and who is it for?",
    answer:
      "Zordie is an AI-powered hiring and career platform designed for both recruiters and job seekers to simplify hiring and job discovery.",
  },
  {
    question: "How does Zordie help recruiters?",
    answer:
      "Recruiters can automate job posting, screen candidates using AI, manage pipelines, and collaborate with their teams in one dashboard.",
  },
  {
    question: "How does Zordie help job seekers?",
    answer:
      "Job seekers can discover verified jobs, track interviews, participate in hiring contests, and get skill-based insights to improve.",
  },
  {
    question: "What makes Zordie different from other hiring/job platforms?",
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

export default function FaqPage() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) => {
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
    <div className="min-h-screen bg-white flex flex-col items-center px-[5%] py-[12vh]">
      {/* Badge */}
      <div className="mb-[3vh] flex justify-center">
        <span className="inline-flex items-center gap-[0.6vw] px-[1.5vw] py-[0.8vh] rounded-full bg-gray-100 text-gray-700 font-medium shadow text-[max(1vw,0.9rem)]">
          <MessageCircle className="w-[1.2vw] min-w-[20px] h-[1.2vw] min-h-[20px]" />
          FAQ
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[max(4vw,1.8rem)] font-bold text-gray-900 text-center mb-[2vh] leading-tight">
        Get clarity, get started.
      </h1>

      <div className="text-gray-500 text-center mb-[8vh] text-[max(1.2vw,1rem)]">
        Real stories from teams who streamlined their workflow and delivered more with less.
      </div>

      {/* FAQ List */}
      <div className="max-w-[90%] w-full mx-auto space-y-[2vh]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.has(idx);
          return (
            <div
              key={faq.question}
              className="flex items-start gap-[1.5vw] bg-white rounded-xl border border-gray-200 p-[1.8vw] transition-all duration-300"
            >
              {/* Circular icon */}
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "#E0F2FE" : "#F3F4F6",
                  width: isOpen ? "3vw" : "2vw",
                  height: isOpen ? "3vw" : "2vw",
                  boxShadow: isOpen
                    ? "0 0.8vw 3vw rgba(31,38,135,0.12)"
                    : "0 0.2vw 1vw rgba(0,0,0,0.05)",
                  minWidth: isOpen ? "60px" : "48px",
                  minHeight: isOpen ? "60px" : "48px",
                }}
              >
                {isOpen ? (
                  <Minus className="w-[1.5vw] min-w-[20px] h-[1.5vw] min-h-[20px] text-blue-600" />
                ) : (
                  <Plus className="w-[1.5vw] min-w-[20px] h-[1.5vw] min-h-[20px] text-blue-600" />
                )}
              </div>

              {/* Text */}
              <div className="flex-1">
                <button
                  className="w-full flex justify-between text-left focus:outline-none"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-gray-900 text-[max(1.4vw,1rem)]">
                    {faq.question}
                  </span>
                </button>
                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[20vh] opacity-100 mt-[1vh]" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-[max(0.95vw,0.9rem)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
