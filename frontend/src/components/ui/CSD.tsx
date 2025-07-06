import { ContainerScroll } from "@/components/ui/CS"
import dash from '@/assets/Hero section.png'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {AnimatedHeroBackground} from "@/components/blocks/AnimatedHeroBackground"
import img1 from "@/images/Dashboard.png"
export default function ScrollAnimationDemo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  // Animate scale and y position as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <div className="flex flex-col overflow-hidden min-h-screen" ref={ref}>
      <ContainerScroll>
        <motion.img
          src={img1}
          alt="Dashboard"
          className="w-full max-w-7xl mx-auto rounded-2xl object-cover  object-center"
          draggable={false}
          style={{ scale, y }}
        />
      </ContainerScroll>
    </div>
  )
}