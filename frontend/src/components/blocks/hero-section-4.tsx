import React from "react";
import aiImage from "@/images/ai-hero.png"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "@/images/agent1.png";
import img2 from "@/images/agent2.png";
import img3 from "@/images/agent3.png";
import img4 from "@/images/agent4.png";
import img5 from "@/images/agent5.png";
import imgCenter from "@/images/agent-center.png"; 

export function HeroSection() {
  const navigate = useNavigate();

  const handlePreAccess = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/pre-access");
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Section */}
      <motion.div
        className="flex flex-col md:flex-row flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left Side: Text Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center px-8 md:px-24 py-20"
          variants={fadeUp}
        >
          <motion.span
            className="text-purple-700 text-2xl font-medium mb-4"
            variants={fadeUp}
          >
            Zordie AI
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-gray-900"
            variants={fadeUp}
          >
            Revolutionizing<br />AI Automation
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-10 max-w-xl"
            variants={fadeUp}
          >
            Zordie AI is at the forefront of AI innovation, creating intelligent automation solutions that transform how businesses operate. Our cutting-edge platform combines advanced machine learning with intuitive design to deliver powerful, accessible AI tools for everyone.
          </motion.p>
          <motion.div
            className="flex gap-6"
            variants={fadeUp}
          >
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition" onClick={handlePreAccess}>
              Get Pre Access
            </button>
            <a
              href="/login"
              className="text-blue-700 underline underline-offset-2 font-medium flex items-center"
            >
              Login
            </a>
          </motion.div>
        </motion.div>
        {/* Right Side: Image */}
        <motion.div
          className="flex-1 flex items-center justify-center bg-gray-50 relative min-h-[500px]"
          variants={fadeUp}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" as const }}
            viewport={{ once: true }}
          >
            <img
              src={img5}
              alt="Zordie AI Platform"
              className="object-cover w-full h-full py-20"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Section: Three Columns */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={fadeUp}
        >
          {[
            {
              title: <>Our mission is to make<br />AI accessible to everyone</>,
              link: "See how we do it"
            },
            {
              title: <>Innovative solutions<br />for modern challenges</>,
              link: "Explore our technology"
            },
            {
              title: <>Join the AI revolution</>,
              link: "Contact us today"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className=""
            >
              <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                {item.title}
              </h2>
              <a
                href="/pre-access"
                onClick={handlePreAccess}
                className="text-blue-700 underline underline-offset-2 font-medium"
              >
                {item.link}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* New Section: The only hiring platform you'll ever need */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-8 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-center text-gray-900 mb-20 leading-tight"
          variants={fadeUp}
        >
          The AI automation platform<br />of the future
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={fadeUp}
        >
          {[
            {
              img: img1,
              title: <>Intelligent automation<br />for every business</>,
              desc: "Zodio AI's platform streamlines complex workflows and automates repetitive tasks, allowing your team to focus on what truly matters - innovation and growth."
            },
            {
              img: img4,
              title: <>Seamless integration<br />with your ecosystem</>,
              desc: "Our flexible architecture adapts to your existing systems, with powerful APIs and pre-built connectors that make implementation smooth and efficient."
            },
            {
              img: img2,
              title: <>Cutting-edge AI<br />made accessible</>,
              desc: "We've simplified complex AI technology into intuitive interfaces that anyone can use, democratizing access to the power of artificial intelligence."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
            >
              <motion.div
                className="w-full h-56 mb-8 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                initial={{ scale: 0.92, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, type: "spring" as const }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <h3 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}