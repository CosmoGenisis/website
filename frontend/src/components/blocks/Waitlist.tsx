import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

export default function WaitlistHero() {
  const [form, setForm] = useState({
    userType: "",
    linkedin: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <div className="relative min-h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Animated background gradient and stars */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] rounded-t-full bg-gradient-to-t from-[#23263a] via-[#23263a]/80 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 80}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  opacity: Math.random() * 0.7 + 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        <main className="relative z-10 flex flex-col items-center justify-center w-full px-[4vw] py-[8vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-[2vh]"
          >
            <span className="px-[2vw] py-[1.5vh] rounded-full bg-white/10 text-white/80 text-xs tracking-wider shadow">
              Waitlister AI STOCK
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[clamp(2rem,5vw,4rem)] font-bold text-white text-center mb-[1vh]"
          >
            The wait is part <br /> of the <span className="italic font-normal">journey.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-center mb-[4vh] max-w-[60vw] text-[clamp(1rem,2vw,1.25rem)]"
          >
            Drive interest, collect emails, and build momentum ahead of your launch.
          </motion.p>

          <AnimatePresence>
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="w-full max-w-[40vw] bg-white/10 backdrop-blur-md rounded-xl p-[4vw] flex flex-col gap-[4vh] shadow-lg"
                style={{ minWidth: "280px" }}
              >
                <div>
                  <label className="block text-gray-200 mb-[0.5vh] text-sm">I am a</label>
                  <select
                    name="userType"
                    value={form.userType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md px-[2vw] py-[1vh] bg-black/60 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select...</option>
                    <option value="candidate">Candidate</option>
                    <option value="recruiter">Recruiter / Company</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-200 mb-[0.5vh] text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full rounded-md px-[2vw] py-[1vh] bg-black/60 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 mb-[0.5vh] text-sm">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    required
                    className="w-full rounded-md px-[2vw] py-[1vh] bg-black/60 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-[1vh] bg-white text-black font-semibold rounded-md py-[2vh] text-[clamp(1rem,1.5vw,1.1rem)] transition hover:bg-gray-200"
                >
                  Get Notified
                </button>

                {/* OR separator */}
                <div className="flex items-center my-[1vh]">
                  <div className="flex-grow border-t border-gray-400/40" />
                  <span className="mx-[1vw] text-gray-300 font-medium">or</span>
                  <div className="flex-grow border-t border-gray-400/40" />
                </div>

                {/* Go to Home button */}
                <Link
                  to="/"
                  className="w-full bg-blue-600 text-white font-semibold rounded-md py-[2vh] text-center text-[clamp(1rem,1.5vw,1.1rem)] transition hover:bg-blue-700"
                >
                  Go to Home
                </Link>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[40vw] bg-white/10 backdrop-blur-md rounded-xl p-[4vw] flex flex-col items-center shadow-lg"
                style={{ minWidth: "280px" }}
              >
                <div className="text-[2vw] text-white font-semibold mb-[1vh]">Thank you!</div>
                <div className="text-gray-300 mb-[2vh] text-center text-[clamp(1rem,1.5vw,1.1rem)]">You’re on the waitlist. We’ll notify you when we launch.</div>
                <button
                  className="px-[2vw] py-[1vh] rounded-md bg-white/20 text-white hover:bg-white/30 transition"
                  onClick={() => setSubmitted(false)}
                >
                  Add another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}