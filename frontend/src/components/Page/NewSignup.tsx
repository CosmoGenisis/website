import { SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import the correct logo and Navbar
import logo from '../../images/Logo.png';
import Navbar from '../../components/ui/nav';

export default function NewSignup() {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row overflow-hidden pt-20">
      {/* Left side - Signup form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md shadow-lg rounded-xl p-8 bg-white"
        >
          <div className="mb-8 flex items-center justify-center">
            <img src={logo} alt="Zordie Logo" className="h-12 w-auto mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Zordie</h1>
          </div>
          
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Create an account</h2>
          <p className="text-gray-500 mb-8">Join Zordie to streamline your HR operations</p>
          
          <SignUp
            appearance={{
              elements: {
                card: 'bg-transparent border-none shadow-none p-0',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                socialButtonsBlockButton: 'rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm transition-all flex items-center justify-center',
                socialButtonsBlockButtonArrow: 'hidden',
                alternativeMethodsBlockButton: 'w-full rounded-lg bg-white border border-gray-200 text-gray-700 font-medium py-3 my-2 hover:bg-gray-50 transition-all',
                dividerRow: 'my-6 flex items-center',
                dividerText: 'text-gray-400 text-xs px-2',
                formFieldInput: 'w-full rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 px-4 py-3 mb-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all',
                formButtonPrimary: 'w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium transition-all',
                footerActionLink: 'text-blue-600 hover:text-blue-700 font-medium',
                formFieldLabel: 'text-gray-700 font-medium mb-1 block',
                formFieldLabelRow: 'mb-1',
                formFieldRow: 'mb-4',
                footer: 'mt-6',
                rootBox: 'w-full'
              },
            }}
            redirectUrl="/"
            signInUrl="/login"
          />
          
          <p className="mt-8 text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
      
      {/* Right side - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
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
            <h2 className="text-3xl font-bold mb-6">Transform Your Recruitment Process</h2>
            <p className="text-lg mb-8 text-indigo-100">Zordie helps you find, screen, and hire the best talent with AI-powered tools and analytics.</p>
            
            <div className="space-y-4">
              {[
                'Reduce time-to-hire by 50%',
                'Eliminate bias in candidate selection',
                'Improve candidate experience',
                'Make data-driven hiring decisions'
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-indigo-200" />
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
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-all"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Request a demo
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