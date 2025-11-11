"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ContactPage() {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subText = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div
      className={`
        relative w-full min-h-screen overflow-hidden 
        ${theme === "dark"
          ? "bg-linear-to-b from-black via-gray-900 to-gray-800"
          : "bg-linear-to-br from-white via-gray-200 to-blue-100"}
        transition-colors duration-500
      `}
    >
      {/* ✅ Ambient fluid gradient */}
      <div className="s-ambient-gradient absolute inset-0 opacity-70"></div>

      <main className="relative flex flex-col items-center px-4 py-16 animate-fadeIn">

        {/* ✅ Glass Card */}
        <div
          className={`
            relative max-w-xl w-full p-10 rounded-3xl glass-card smooth-transition
            ${theme === "dark" ? "glow-border-dark" : "glow-border-light"}
          `}
        >
          {/* Lens-like sheen */}
          <div
            className={`
              absolute inset-0 rounded-3xl opacity-40 blur-xl pointer-events-none
              ${theme === "dark"
                ? "bg-linear-to-r from-white/20 via-transparent to-white/20"
                : "bg-linear-to-r from-gray-200 via-transparent to-gray-200"}
            `}
          ></div>

          {/* Header */}
          <h1 className={`relative text-4xl font-extrabold text-center mb-4 ${textColor}`}>
            📩 Contact Us
          </h1>

          <p className={`relative mb-10 text-center text-lg ${subText}`}>
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>

          {/* Form */}
          <form className="relative flex flex-col gap-6">

            {/* Name field */}
            <div className="hover-lift transition-all">
              <label className={`block mb-2 font-semibold ${textColor}`}>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className={`
                  w-full px-5 py-3 rounded-xl
                  bg-white/40 dark:bg-black/30
                  backdrop-blur-xl smooth-transition
                  border border-white/40 dark:border-gray-500/40
                  shadow-md focus:ring-2 focus:ring-blue-400/60 
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-600 dark:placeholder-gray-300
                `}
              />
            </div>

            {/* Email field */}
            <div className="hover-lift transition-all">
              <label className={`block mb-2 font-semibold ${textColor}`}>Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className={`
                  w-full px-5 py-3 rounded-xl
                  bg-white/40 dark:bg-black/30
                  backdrop-blur-xl smooth-transition
                  border border-white/40 dark:border-gray-500/40
                  shadow-md focus:ring-2 focus:ring-blue-400/60 
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-600 dark:placeholder-gray-300
                `}
              />
            </div>

            {/* Message field */}
            <div className="hover-lift transition-all">
              <label className={`block mb-2 font-semibold ${textColor}`}>Your Message</label>
              <textarea
                rows={5}
                placeholder="Type your message..."
                required
                className={`
                  w-full px-5 py-3 rounded-xl
                  bg-white/40 dark:bg-black/30
                  backdrop-blur-xl smooth-transition
                  border border-white/40 dark:border-gray-500/40
                  shadow-md focus:ring-2 focus:ring-blue-400/60 
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-600 dark:placeholder-gray-300 resize-none
                `}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className={`
                w-full py-3 mt-2 rounded-xl text-lg font-bold
                transition transform hover:scale-105 hover:shadow-xl
                ${theme === "dark"
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-blue-500 text-white hover:bg-blue-600"}
              `}
            >
              Send Message →
            </button>
          </form>

          {/* Contact Info */}
          <div className={`relative mt-10 text-center text-sm ${subText}`}>
            <p className="mb-1">
              📧 Email:{" "}
              <a href="mailto:info@nutrilens.com" className="underline hover:text-blue-400">
                info@nutrilens.com
              </a>
            </p>
            <p className="mb-1">
              📞 Phone:{" "}
              <a href="tel:+1234567890" className="underline hover:text-blue-400">
                +1 (234) 567-890
              </a>
            </p>
            <p>📍 Address: #112, Church Street, Bengaluru-560064</p>
          </div>

        </div>
      </main>
    </div>
  );
}
