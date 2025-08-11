import { useRef } from "react";
import { motion } from "framer-motion";
import avatar1 from "@/images/People_1.png";
import avatar2 from "@/images/People_2.png";
import avatar3 from "@/images/People_3.png";
import avatar4 from "@/images/People_4.png";
import avatar5 from "@/images/People_5.png";
import avatar6 from "@/images/People_6.png";

const testimonialsRow1 = [
  {
    name: "Chloe Bennett",
    role: "Product Manager",
    avatar: avatar1,
    text: "Seeing my GitHub verified gave recruiters real confidence in my abilities",
  },
  {
    name: "Ava Cooper",
    role: "Customer Success Lead",
    avatar: avatar2,
    text: "I've tried multiple platforms, but Zordie's AI insights and project verification truly set it apart.",
  },
  {
    name: "Liam Thompson",
    role: "Tech Lead",
    avatar: avatar3,
    text: "From JD creation to onboarding, Zordie simplified everything. My team saved weeks of work",
  },
];

const testimonialsRow2 = [
  {
    name: "Mason Rivera",
    role: "Scrum Master",
    avatar: avatar4,
    text: "Hackathons, jobs, and learning—Zordie truly is an all-in-one career launcher.",
  },
  {
    name: "Dylan Carter",
    role: "Operations Lead",
    avatar: avatar5,
    text: "Zordie helped me land interviews by showcasing my true potential, not just my resume.",
  },
  {
    name: "Emily Parker",
    role: "Project Coordinator",
    avatar: avatar6,
    text: "Zordie's candidate dashboard is intuitive, clean, and actually useful.",
  },
];

function TestimonialCard({ avatar, name, role, text }: typeof testimonialsRow1[0]) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 min-w-[320px] max-w-xs mx-4 my-2 p-6 flex flex-col animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
      <div className="text-gray-700 text-base mt-2">{text}</div>
    </div>
  );
}

export default function UserTestimonials() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Calculate total width for smooth animation
  const cardCount = testimonialsRow1.length * 2;
  const cardWidth = 340; // min-w-[320px] + margin
  const totalWidth = cardCount * cardWidth;

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-20 bg-white relative">
      {/* Badge */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow">
          What Teams Are Saying
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
        See what our users are<br />saying.
      </h1>
      <div className="text-gray-500 text-center mb-12">Proof in the Progress</div>
      {/* Animated Rows */}
      <div className="w-full flex flex-col gap-8 items-center justify-center">
        {/* Row 1: Right to Left */}
        <div className="overflow-hidden w-[1600px]">
          <motion.div
            ref={row1Ref}
            className="flex items-center w-max"
            animate={{ x: [`0%`, `-50%`] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
              <TestimonialCard key={t.name + i} {...t} />
            ))}
          </motion.div>
        </div>
        {/* Row 2: Left to Right */}
        <div className="overflow-hidden w-[1600px]">
          <motion.div
            ref={row2Ref}
            className="flex items-center w-max"
            animate={{ x: [`-50%`, `0%`] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
              <TestimonialCard key={t.name + i} {...t} />
            ))}
          </motion.div>
        </div>
      </div>
      {/* Fade effect on sides */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}