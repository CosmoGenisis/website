import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqPage2Props {
  faqs: Faq[];
  heading: React.ReactNode;
  badge?: React.ReactNode;
  banner: {
    background: string; // background image or gradient
    title: React.ReactNode;
    subtitle: React.ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
    peopleImages: Array<{ src: string; alt: string; style?: React.CSSProperties }>;
  };
}

export default function FaqPage2({
  faqs,
  heading,
  badge,
  banner,
}: FaqPage2Props) {
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
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12 sm:py-20">
      {/* Badge */}
      {badge && (
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
            <MessageCircle className="w-5 h-5" />
            {badge}
          </span>
        </div>
      )}
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
        {heading}
      </h1>
      {/* FAQ List */}
      <div className="max-w-3xl w-full mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.has(idx);
          return (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-gray-200"
            >
              <button
                className="w-full flex items-center justify-between px-4 sm:px-6 py-5 text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-base sm:text-lg text-gray-900">{faq.question}</span>
                {isOpen ? (
                  <Minus className="w-6 h-6 text-blue-600" />
                ) : (
                  <Plus className="w-6 h-6 text-blue-600" />
                )}
              </button>
              {/* Answer */}
              <div
                className={`px-4 sm:px-6 pb-5 text-gray-600 text-base transition-all duration-300 ease-in-out ${
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
      <div className="w-full flex justify-center mt-12 sm:mt-16">
        <div
          className="w-full max-w-[1400px] min-h-[320px] sm:min-h-[380px] rounded-[32px] sm:rounded-[56px] flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
          style={{
            background: banner.background,
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
            <line x1="200" y1="80" x2="400" y2="140" stroke="#fff" strokeWidth="2" strokeOpacity="0.18" />
            <line x1="800" y1="60" x2="1100" y2="120" stroke="#fff" strokeWidth="2" strokeOpacity="0.18" />
            <line x1="600" y1="200" x2="900" y2="260" stroke="#fff" strokeWidth="2" strokeOpacity="0.12" />
          </svg>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-700/10 backdrop-blur-sm rounded-[32px] sm:rounded-[56px]" style={{ zIndex: 2 }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 sm:px-8 py-8 sm:py-12">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                {banner.title}
              </h2>
              <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
                {banner.subtitle}
              </p>
              <button
                className="bg-white text-gray-900 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-50 transition"
                onClick={banner.onButtonClick}
              >
                {banner.buttonText}
              </button>
            </div>
            {/* Right: People Images */}
            <div className="flex-1 flex items-end justify-center relative min-h-[220px] sm:min-h-[320px] w-full">
              {banner.peopleImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="absolute w-[140px] sm:w-[220px] md:w-[320px] h-auto object-cover transition-all"
                  style={{
                    zIndex: 3,
                    ...img.style,
                  }}
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}