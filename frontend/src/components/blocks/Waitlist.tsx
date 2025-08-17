import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '../ui/nav';

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
    <Navbar whiteBg />
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
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
          {/* Simple stars */}
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

      <main className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="px-4 py-1 rounded-full bg-white/10 text-white/80 text-xs tracking-wider shadow">
            Waitlister AI STOCK
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-2"
        >
          The wait is part <br /> of the <span className="italic font-normal">journey.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-300 text-center mb-8 max-w-md"
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
              className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col gap-12 shadow-lg"
            >
              <div>
                <label className="block text-gray-200 mb-1 text-sm">I am a</label>
                <select
                  name="userType"
                  value={form.userType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md px-3 py-2 bg-black/60 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select...</option>
                  <option value="candidate">Candidate</option>
                  <option value="recruiter">Recruiter / Company</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-200 mb-1 text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full rounded-md px-3 py-2 bg-black/60 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-200 mb-1 text-sm">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  required
                  className="w-full rounded-md px-3 py-2 bg-black/60 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-white text-black font-semibold rounded-md py-2 transition hover:bg-gray-200"
              >
                Get Notified
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg"
            >
              <div className="text-2xl text-white font-semibold mb-2">Thank you!</div>
              <div className="text-gray-300 mb-4 text-center">You’re on the waitlist. We’ll notify you when we launch.</div>
              <button
                className="px-4 py-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition"
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