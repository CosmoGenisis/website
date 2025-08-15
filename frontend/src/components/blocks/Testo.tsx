"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
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

const FloatingParticles = ({ count = 20 }: FloatingParticlesProps) => (
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

const TestimonialCard = ({ author, text, href }: TestimonialData) => {
  const Card = href ? 'a' : 'div'
  return (
    <Card
      {...(href ? { href } : {})}
      className="flex flex-col rounded-2xl border bg-gradient-to-b from-blue-200 to-blue-100 backdrop-blur-sm p-6 text-start transition-all duration-300 hover:from-white hover:to-white/80 hover:shadow-2xl hover:scale-105 max-w-[90%] sm:max-w-[320px]"
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-foreground">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{author.handle}</p>
        </div>
      </div>
      <p className="mt-4 text-base text-muted-foreground">{text}</p>
    </Card>
  )
}

export function AnimatedTestimonialsWithParticles() {
  const testimonials: TestimonialData[] = [
    {
      author: { name: "Irene Blimbing", handle: "@emmaai", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" },
      text: "Zordie helped us hire faster and smarter—no more wasting time on unfit resumes.",
      href: "https://twitter.com/emmaai"
    },
    {
      author: { name: "David Park", handle: "@davidtech", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
      text: "With Zordie, we found top talent quickly. The AI handles the heavy lifting.",
      href: "https://twitter.com/davidtech"
    },
    {
      author: { name: "Sofia Rodriguez", handle: "@sofiaml", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
      text: "Resumes can be polished, but skills can't be faked and that's where Zordie wins."
    },
    // ... add more
  ]

  const cardsPerRow = 3
  const cardHeight = 240

  const rows: TestimonialData[][] = []
  for (let i = 0; i < testimonials.length; i += cardsPerRow) {
    rows.push(testimonials.slice(i, i + cardsPerRow))
  }
  if (rows.length && rows[rows.length - 1].length < cardsPerRow) {
    rows[rows.length - 1] = [
      ...rows[rows.length - 1],
      ...testimonials.slice(0, cardsPerRow - rows[rows.length - 1].length),
    ]
  }

  const allRows = [...rows, ...rows]
  const totalHeight = allRows.length * cardHeight

  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      y: [0, -totalHeight / 2],
      transition: { duration: allRows.length * 3, ease: "linear", repeat: Infinity }
    })
  }, [controls, totalHeight, allRows.length])

  return (
    <section className="relative py-24 bg-white overflow-hidden flex items-center justify-center">
      <FloatingParticles count={15} />
      <div className="relative z-10 w-[80%] max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 border border-gray-200 backdrop-blur-sm mb-6">
          <span className="text-[max(1.2vw,0.95rem)] font-medium text-muted-foreground">✨ Testimonials</span>
        </span>
        <h2 className="text-[max(5vw,2rem)]  font-bold mb-24">What our users say</h2>

        <div className="relative h-[660px] w-full overflow-hidden">

          <motion.div animate={controls} className="flex flex-col gap-8">
            {allRows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-8 justify-center" style={{ height: cardHeight }}>
                {row.map((testimonial, idx) => (
                  <TestimonialCard key={testimonial.author.name + idx} {...testimonial} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function TestimonialsDemo() {
  return <AnimatedTestimonialsWithParticles />
}
