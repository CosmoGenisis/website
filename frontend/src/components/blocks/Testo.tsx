"use client"

import { motion,  useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialData {
  author: TestimonialAuthor
  text: string
  href?: string
}

interface FloatingParticlesProps {
  count?: number
}

const FloatingParticles = ({ count = 20 }: FloatingParticlesProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

const TestimonialCard = ({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) => {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={`flex flex-col rounded-lg border-t bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm p-4 text-start sm:p-6 hover:from-card/90 hover:to-card/50 max-w-[320px] sm:max-w-[320px] transition-all duration-300 border-border/50 ${className || ""}`}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-foreground">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-muted-foreground line-clamp-3">
        {text}
      </p>
    </Card>
  )
}



export function AnimatedTestimonialsWithParticles() {
  const testimonials: TestimonialData[] = [
    {
      author: {
        name: "Irene Blimbing",
        handle: "@emmaai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Zordie helped us hire faster and smarter—no more wasting time on unfit resumes.",
      href: "https://twitter.com/emmaai"
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "With Zordie, we found top talent quickly. The AI handles the heavy lifting.",
      href: "https://twitter.com/davidtech"
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Resumes can be polished, but skills can't be faked and that's where Zordie wins. It showed us who can actually do the work."
    },
    {
      author: {
        name: "Morgan Lee",
        handle: "@morganleewhiz",
        avatar: "https://framerusercontent.com/images/ZH32UpSO1tvXxr1NY9a51GDeVI.png"
      },
      text: "Zordie completely transformed our hiring process. We've cut our time-to-hire by 65% and the quality of candidates has been exceptional. The AI verification system has eliminated fake resumes entirely."
    },
    {
      author: {
        name: "Jordan Patels",
        handle: "@jpatelsdesign",
        avatar: "https://framerusercontent.com/images/KzPCxcCNNsNcLrXuaue6BreIY.jpg"
      },
      text: "Implementing Zordie completely streamlined our hiring process. The skill verification system helped us avoid bad hires, increased retention by 40%."
    },
    {
      author: {
        name: "Alex Rivera",
        handle: "@alexinnovates",
        avatar: "https://framerusercontent.com/images/Q6Uhycj3JpWbL2X82AeTSpMX47w.png?scale-down-to=512"
      },
      text: "Zordie finally gave me a platform where my work spoke louder than my resume. I landed a great role because they saw what I could actually do."
    },
    {
      author: {
        name: "Taylor Kim",
        handle: "@taykimm",
        avatar: "https://framerusercontent.com/images/fQ49j4qCQ0znA55jDxwRf6YCY.png"
      },
      text: "Zordie helped us go beyond resumes and surface truly skilled candidates. Project authentication gave us the confidence we needed to hire with certainty."
    },
    {
      author: {
        name: "Riley Smith",
        handle: "@rileysmith1",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Zordie helped us hire faster and smarter—no more wasting time on unfit resumes"
    },
    {
      author: {
        name: "Sam Dawson",
        handle: "@dawsontechtips",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "The verification badge on Zordie made a huge difference in my job search. I received 3x more interview requests and employers trusted my skills immediately. The AI interview practice also helped me ace every interview."
    },

    // Add more testimonials as needed
  ];


  const cardsPerRow = 3; // px, adjust as needed
  const cardHeight = 220;

  // Prepare rows of 3 testimonials each, looping as needed
  const rows: TestimonialData[][] = [];
  for (let i = 0; i < testimonials.length; i += cardsPerRow) {
    rows.push(testimonials.slice(i, i + cardsPerRow));
  }
  // Ensure last row is filled for seamless loop
  if (rows.length > 0 && rows[rows.length - 1].length < cardsPerRow) {
    rows[rows.length - 1] = [
      ...rows[rows.length - 1],
      ...testimonials.slice(0, cardsPerRow - rows[rows.length - 1].length),
    ];
  }

  // Duplicate rows for seamless looping
  const allRows = [...rows, ...rows];

  const totalRows = allRows.length;
  const totalHeight = totalRows * cardHeight;

  // Animation control
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -totalHeight / 2],
      transition: {
        duration: totalRows * 2.5, // speed
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }, [controls, totalHeight, totalRows]);

  // Prepare rows of 3 testimonials each, looping as needed

  // Compute the visible testimonials in order, looping as needed
  return (
    <section className="relative py-24 text-foreground overflow-hidden bg-gradient-to-b from-white to-blue-300 flex items-center justify-center">
      <div className="absolute inset-0">
        <FloatingParticles count={15} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-9 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-muted-foreground">✨ Testimonials</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">What our users say</span>
          </h2>
        </div>
        <div className="relative h-[660px] w-full overflow-hidden flex items-center justify-center">
          {/* Top blur */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-24 z-10"
            style={{
              background: "linear-gradient(to bottom, #fff 60%, transparent 100%)",
              filter: "blur(8px)",
            }}
          />
          {/* Bottom blur */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 z-10"
            style={{
              background: "linear-gradient(to top, #fff 60%, transparent 100%)",
              filter: "blur(8px)",
            }}
          />
          <motion.div
            animate={controls}
            className="flex flex-col gap-0"
            style={{ willChange: "transform" }}
          >
            {allRows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-8 justify-center items-center" style={{ height: cardHeight }}>
                {row.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.author.name + idx + rowIdx}
                    className="w-full h-full"
                    style={{
                      minWidth: 320,
                      maxWidth: 320,
                      // Remove blur/opacity logic here!
                    }}
                  >
                    <TestimonialCard
                      author={testimonial.author}
                      text={testimonial.text}
                      href={testimonial.href}
                      className="shadow-lg border border-black bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>
        {`
          /* Hide scrollbar for the testimonials loop */
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
}

export default function TestimonialsDemo() {
  return <AnimatedTestimonialsWithParticles />
}