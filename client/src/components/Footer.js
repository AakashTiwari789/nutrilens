

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";


const Footer = () => {
  const { theme } = useContext(ThemeContext);
  // Light: medium gray, Dark: match dark page background
  const footerBg = theme === "dark"
    ? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
    : "bg-gray-400";
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-500";
  const linkHover = theme === "dark" ? "hover:text-green-400" : "hover:text-green-700";

  return (
    <footer className={`${footerBg} ${textColor} py-8 px-4 transition-colors duration-300`}>
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
              <li><Link href="/contact" className={linkHover + " transition"}>Contact</Link></li>
              <li><Link href="/privacy" className={linkHover + " transition"}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkHover + " transition"}>Terms of Service</Link></li>
            </ul>
          </nav>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-end text-sm">
          <span className="mb-1">Contact us:</span>
          <a href="mailto:info@nutrilens.com" className={linkHover + " transition"}>info@nutrilens.com</a>
          <a href="tel:+1234567890" className={linkHover + " transition"}>+1 (234) 567-890</a>
          <span className="mt-2">#112, Church Street, Bengaluru-560064</span>
        </div>
      </div>
      <div className={`border-t mt-8 pt-4 text-center text-xs text-gray-400 ${borderColor}`}>
        © 2025 NutriLens. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
