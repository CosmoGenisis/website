import React from "react";
import { Link } from "react-router-dom";

const FooterDemo = () => (
  <footer className="w-full bg-[#2563eb] text-white py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
      {/* Left: Branding and newsletter */}
      <div className="flex flex-col md:w-1/2 lg:w-2/5 xl:w-1/3">
        <h2 className="text-2xl font-bold mb-2">Zordie AI</h2>
        <p className="text-white max-w-xs mb-4">Empowering your hiring with intelligent automation.</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
          <input
            type="email"
            placeholder="Subscribe to newsletter"
            className="px-3 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 rounded bg-white hover:bg-gray-100 text-blue-600 font-semibold transition">Subscribe</button>
        </div>
      </div>
      {/* Right: Product, Company, Follow Us in a row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-end md:space-x-12 lg:space-x-16 xl:space-x-20 md:w-1/2 lg:w-2/5 xl:w-1/3 space-y-6 md:space-y-0">
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-1 text-white">
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-white">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 mt-1">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.7 12.7 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.73-.02-1.42-.22-2.02-.56v.06a4.48 4.48 0 0 0 3.6 4.4c-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.37-.01-.56.88-.64 1.65-1.44 2.26-2.35z" /></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.68 0h-21.36c-.73 0-1.32.59-1.32 1.32v21.36c0 .73.59 1.32 1.32 1.32h11.49v-9.29h-3.13v-3.62h3.13v-2.67c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.3h3.58l-.47 3.62h-3.11v9.29h6.09c.73 0 1.32-.59 1.32-1.32v-21.36c0-.73-.59-1.32-1.32-1.32z" /></svg></a>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright */}
    <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6 gap-4">
      <div className="text-xs text-white text-center md:text-right">
        © {new Date().getFullYear()} Zordie AI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterDemo;
