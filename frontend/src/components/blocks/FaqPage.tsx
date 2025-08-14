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
        Answers to help you get<br />started faster.
      </h1>
      <div className="text-gray-500 text-center mb-12">
        Real stories from teams who streamlined their workflow and delivered more with less.
      </div>
      {/* FAQ List */}
      <div className="max-w-[90%] w-full mx-auto space-y-4">
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
      </div>
  );
}