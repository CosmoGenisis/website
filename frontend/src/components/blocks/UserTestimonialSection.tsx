import React from "react";

interface UserTestimonialSectionProps {
  heading: React.ReactNode;
  user: {
    avatar: string;
    name: string;
    role: string;
    testimonial: string;
    rating: number;
    maxRating?: number;
  };
  image: string;
}

export function UserTestimonialSection({
  heading,
  user,
  image,
}: UserTestimonialSectionProps) {
  const maxRating = user.maxRating || 5;
  const fullStars = Math.floor(user.rating);
  const hasHalfStar = user.rating % 1 >= 0.5;

  return (
    <section className="w-full py-16 px-2 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">{heading}</h2>
        <div className="flex flex-col md:flex-row bg-[#0b2232] rounded-3xl overflow-hidden shadow-xl relative">
          {/* Decorative shape */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
            <svg
              viewBox="0 0 900 600"
              fill="none"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,180 Q300,40 440,100 Q600,180 900,0 L900,600 L0,600 Z"
                fill="#112B39"
                opacity="0.85"
              />
              <ellipse
                cx="430"
                cy="250"
                rx="320"
                ry="180"
                fill="#17384A"
                opacity="0.5"
              />
            </svg>
          </div>
          {/* Left: Testimonial */}
          <div className="flex-1 flex flex-col justify-center px-8 py-14 md:py-24 relative z-10">
            <div className="flex items-center mb-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="ml-6">
                <div className="text-white text-3xl font-bold mb-1">{user.name}</div>
                <div className="text-gray-200 text-xl">{user.role}</div>
              </div>
            </div>
            <blockquote className="text-white text-2xl font-bold mb-10 leading-snug">
              “{user.testimonial}”
            </blockquote>
            <div className="flex items-center mb-4">
              {Array.from({ length: fullStars }).map((_, i) => (
                <span key={i} className="text-blue-400 text-3xl mr-2">★</span>
              ))}
              {hasHalfStar && <span className="text-blue-400 text-3xl mr-2">★</span>}
              {Array.from({ length: maxRating - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
                <span key={i} className="text-blue-200 text-3xl mr-2">★</span>
              ))}
            </div>
            <div className="text-white text-2xl font-semibold">{user.rating}/{maxRating}</div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-h-[320px] max-h-[520px] md:max-h-none relative z-10">
            <img
              src={image}
              alt="User working"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: 320, maxHeight: 600 }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}