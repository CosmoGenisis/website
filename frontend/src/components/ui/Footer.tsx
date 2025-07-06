import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Zordie AI</h2>
          <p className="text-sm text-gray-400">Empowering your hiring with intelligent automation.</p>
        </div>
        <nav className="mb-4 md:mb-0 flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
          <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link>
          <Link to="/features" className="hover:text-primary-400 transition-colors">Features</Link>
          <Link to="/solutions" className="hover:text-primary-400 transition-colors">Solutions</Link>
          <Link to="/login" className="hover:text-primary-400 transition-colors">Login/Signup</Link>
        </nav>
        <div className="text-gray-400 text-xs text-center md:text-right">
          © {new Date().getFullYear()} Zordie AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;