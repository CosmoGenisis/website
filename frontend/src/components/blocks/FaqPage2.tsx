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
    background: string;
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
    <div className="min-h-screen bg-white flex flex-col items-center px-[5%] py-[6vh]">
      {/* Badge */}
      {badge && (
        <div className="mb-[4vh] flex justify-center">
          <span className="inline-flex items-center gap-[1vh] px-[2vh] py-[1vh] rounded-full bg-gray-100 text-gray-700 font-medium shadow text-[1em]">
            <MessageCircle className="w-[1.8em] h-[1.2em]" />
            {badge}
          </span>
        </div>
      )}
      {/* Heading */}
      <h1 className="text-[5vw] sm:text-[3.5vw] font-bold text-gray-900 text-center mb-[8vh] leading-tight">
        {heading}
      </h1>
      {/* FAQ List */}
      <div className="max-w-[90%] w-full mx-auto space-y-[2vh]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.has(idx);
          return (
            <div
              key={faq.question}
              className="bg-white rounded-[1em] border border-gray-200"
            >
              <button
                className="w-full flex items-center justify-between px-[4%] py-[2vh] text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-[1em] sm:text-[1.2em] text-gray-900">
                  {faq.question}
                </span>
                {isOpen ? (
                  <Minus className="w-[1.5em] h-[1.5em] text-blue-600" />
                ) : (
                  <Plus className="w-[1.5em] h-[1.5em] text-blue-600" />
                )}
              </button>
              {/* Answer */}
              <div
                className={`px-[4%] pb-[2vh] text-gray-600 text-[1em] transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[30vh] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Hero Banner Card at the End */} 
      <div className="w-full flex justify-center mt-12 sm:mt-16"> 
        <div className="w-full max-w-[90%] min-h-[320px] sm:min-h-[380px] rounded-[16px] sm:rounded-[24px] flex flex-col md:flex-row items-center justify-center relative overflow-hidden" style={{ background: banner.background ? undefined : undefined, }} > 
          {/* Background image */} 
          <img src={banner.background} 
          alt="Banner background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0" 
          style={{ pointerEvents: "none" }} draggable={false} 
          /> 
          {/* Overlay for better text readability */} 
          <div className="absolute inset-0 bg-blue-700/10 backdrop-blur-sm rounded-[32px] sm:rounded-[56px] z-10"></div> 
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 sm:px-8 py-8 sm:py-12"> 
            {/* Left: Text */} 
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0"> 
              <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6"> {banner.title} 
                </h2> 
                <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8"> {banner.subtitle} 
                </p> <button className="bg-white text-gray-900 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-50 transition" onClick={banner.onButtonClick} > {banner.buttonText} 
                  </button> 
                  </div> 
                  {/* Right: People Images */} 
                  <div className="flex-1 flex items-end justify-center relative min-h-[220px] sm:min-h-[320px] w-full"> 
                    {banner.peopleImages.map((img, i) => ( 
                      <img key={i} src={img.src} 
                      alt={img.alt} 
                      className="absolute w-[140px] sm:w-[220px] md:w-[320px] h-auto object-cover transition-all"
                      style={{ zIndex: 3, ...img.style, }} 
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