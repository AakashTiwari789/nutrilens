
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Logo & Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2 text-green-400">NutriLens</h2>
          <p className="text-sm mb-4 max-w-xs">
            Empowering you to make smarter nutrition choices. Discover, track, and improve your health with NutriLens.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col items-center">
          <nav className="mb-2">
            <ul className="flex flex-col md:flex-row gap-4">
              <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-end text-sm">
          <span className="mb-1">Contact us:</span>
          <a href="mailto:info@nutrilens.com" className="hover:text-green-400 transition">info@nutrilens.com</a>
          <a href="tel:+1234567890" className="hover:text-green-400 transition">+1 (234) 567-890</a>
          <span className="mt-2">#112, Church Street, Bengaluru-560064</span>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © 2025 NutriLens. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
