import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/ui/nav';
import img1 from '@/images/Logo.png';
import img2 from '@/images/Google.png';
import img3 from '@/images/Jio.png';
import img4 from '@/images/Rapido.png';
import img5 from '@/images/Amazon.png';
import img6 from '@/images/BharatPe.png';
import img7 from '@/images/Xiaomi.png';


const testimonials = [
  {
    quote: `"Zordie in one word, PEACE OF MIND"`,
    author: 'Abdul Quadir',
    title: 'COO and Founder at Zordie',
  },
  {
    quote: `"Zordie has given fast, accurate, and quality candidates..."`,
    author: 'Ashutosh Singh',
    title: 'Frontend Engineer at Zordie',
  },
  {
    quote: `"Amount of time I saved with OptimHire is Awesome"`,
    author: 'Pavan',
    title: 'Backend Engineer at Zordie',
  },
];

const companies = [
  { name: 'Google', logo: img2 },
  { name: 'Amazon', logo: img5 },
  { name: 'Xiaomi', logo: img7 },
  { name: 'Jio', logo: img3 },
  { name: 'Rapido', logo: img4 },
  { name: 'BharatPe', logo: img6 },
];

export default function NewLogin() {
  const [role, setRole] = useState<'Client' | 'Candidate'>('Client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTimeout(() => {
      localStorage.setItem('access_token', 'mock-token');
      if (role === 'Client') {
        navigate('/Home');
      } else {
        navigate('/CandidateOnboarding');
      }
    }, 500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row pt-20">
        {/* Left: Carousel & Logos */}
        <div className="relative flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-[#0a4fd5] to-[#0e7be7] text-white px-8 py-10 overflow-hidden animate-slide-in-left">
          <img src={img1} alt="Zordie" className="w-40 h-40 rounded-full mb-12 mt-2" />
          <div className="mb-8 text-lg font-medium text-center">10X Faster and 80% reduced Hiring cost</div>
          <div className="relative w-full max-w-lg min-h-[180px] flex flex-col items-center justify-center">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`absolute transition-all duration-700 ease-in-out w-full ${idx === testimonialIdx ? 'opacity-100 scale-100 z-10 animate-fade-in' : 'opacity-0 scale-95 z-0 pointer-events-none'}`}
                style={{ minHeight: 120 }}
              >
                <div className="text-2xl font-semibold leading-snug mb-4">{t.quote}</div>
                <div className="font-bold">{t.author}</div>
                <div className="text-sm opacity-80">{t.title}</div>
              </div>
            ))}
            {/* Carousel dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === testimonialIdx ? 'bg-white' : 'bg-white/40'}`}
                  onClick={() => setTestimonialIdx(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center text-base font-medium">Trusted by leading companies</div>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 opacity-90">
            {companies.map((c) => (
              <img key={c.name} src={c.logo} alt={c.name} className="w-12 h-12 rounded-full opacity-100 hover:opacity-100 transition" />
            ))}
          </div>
        </div>

        {/* Right: Login Card */}
        <div className="flex-1 flex items-center justify-center bg-white px-4 py-10 animate-slide-in-right">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="mb-6">
              <div className="text-xl font-semibold mb-2">Welcome Back!</div>
              <div className="text-3xl font-bold flex items-center gap-2 mb-1">
                Log in as
                <select
                  value={role}
                  onChange={e => setRole(e.target.value as 'Client' | 'Candidate')}
                  className="ml-2 px-2 py-1 rounded border border-blue-200 text-blue-700 bg-blue-50 focus:outline-none"
                  style={{ fontSize: 24 }}
                >
                  <option value="Client">Client</option>
                  <option value="Candidate">Candidate</option>
                </select>
              </div>
              <div className="text-gray-500 text-sm mt-1">Please enter your details.</div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Work Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 transition"
                />
                <span
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-2.5 cursor-pointer text-blue-400"
                  title={showPassword ? 'Hide' : 'Show'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </span>
              </div>
              <div className="text-right text-xs mt-1">
                <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
              </div>
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-200 mt-4"
            >
              Log In
            </button>
            <div className="text-center mt-6 text-sm text-gray-600">
              Not an existing user? <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up for FREE</Link>
            </div>
          </form>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-60px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(60px);}
            to { opacity: 1; transform: translateX(0);}
          }
          .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;}
          .animate-slide-in-left { animation: slide-in-left 1s cubic-bezier(0.4,0,0.2,1) both;}
          .animate-slide-in-right { animation: slide-in-right 1s cubic-bezier(0.4,0,0.2,1) both;}
        `}</style>
      </div>
    </>
  );
}