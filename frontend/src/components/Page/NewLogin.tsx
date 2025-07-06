import { SignIn } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import the correct logo and Navbar
import logo from '../../images/Logo.png';
import Navbar from '../../components/ui/nav';

export default function NewLogin() {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row overflow-hidden pt-20">
        {/* Left side - Login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
            <p className="text-gray-500 text-center mb-8 text-lg">
              Enter your email below to login to your account
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-all"
              >
                Login
              </button>
            </form>
            <div className="flex justify-center mt-4">
              <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
                Forgot your password?
              </Link>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-200" />
              <span className="mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-200" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-3 font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Login with Google
            </button>
            <p className="text-xs text-gray-500 text-center mt-6">
              By signing in with Google, you agree to Zordie's{' '}
              <a href="#" className="underline">Terms of Service</a> and{' '}
              <a href="#" className="underline">Privacy Policy</a>
            </p>
            <p className="mt-8 text-center text-gray-500 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      
      {/* Right side - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')]" />
        </motion.div>
        
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-md text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Streamline Your HR Operations</h2>
            <p className="text-lg mb-8 text-blue-100">Join thousands of companies using Zordie to automate their HR processes and improve candidate experience.</p>
            
            <div className="space-y-4">
              {[
                'AI-powered candidate screening',
                'Automated interview scheduling',
                'Smart talent matching',
                'Comprehensive analytics dashboard'
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-200" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-10"
            >
              <Link 
                to="/waitlist"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Join the waitlist
                <motion.div
                  animate={{ x: isHovering ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}