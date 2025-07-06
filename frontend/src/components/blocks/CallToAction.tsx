import React from "react";
import { motion } from "framer-motion";

export function CallToAction () {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Here you can send the email to your backend or API
    console.log("CTA Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };
  return (
  <div className="relative isolate overflow-hidden w-full max-w-5xl flex flex-col items-center justify-center px-10 py-16 sm:px-16 xl:py-20 rounded-3xl bg-blue-700 shadow-2xl max-h-[480px]">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-7xl text-center text-4xl md:text-6xl font-bold tracking-tight text-white mb-8"
    >
      Build. Scale. Dominate.
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mx-auto mt-2 max-w-3xl text-center text-2xl leading-9 text-blue-100 mb-12"
    >
      Your HR deserves more than just automation, it needs an intelligent hiring ally that discovers top talent, nurtures your people, and drives your organization to lead the market.
    </motion.p>

    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mx-auto mt-4 flex max-w-xl w-full gap-x-4"
      onSubmit={handleEmailSubmit}
    >
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-6 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white text-lg"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {submitted ? "Submitted!" : "Get Pre Access"}
      </button>
    </motion.form>

    {/* Decorative SVG background */}
    <svg
      viewBox="0 0 1024 1024"
      className="absolute left-1/2 top-1/2 -z-10 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fillOpacity="0.7"
      />
      <defs>
        <radialGradient
          id="759c1415-0410-454c-8f7c-9a820de03641"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(512 512) rotate(90) scale(512)"
        >
          <stop stopColor="#7775D6" />
          <stop offset="1" stopColor="#7ED321" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
  );
};