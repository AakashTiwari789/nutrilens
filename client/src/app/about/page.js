"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function AboutPage() {
  const { theme } = useContext(ThemeContext);

  const bg =
    theme === "dark"
      ? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
      : "bg-gradient-to-b from-gray-50 via-white to-gray-100";

  const cardBg =
    theme === "dark"
      ? "bg-black/40 backdrop-blur-2xl"
      : "bg-white/50 backdrop-blur-xl";

  const borderGlow =
    theme === "dark"
      ? "border-[1px] border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      : "border-[1px] border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.08)]";

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subText = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${bg} transition-colors duration-500`}>

      {/* ✅ S-shaped gradient effect in background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.15),transparent_40%),
          radial-gradient(circle_at_100%_100%,rgba(255,0,150,0.15),transparent_40%),
          radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),transparent_40%)]
          animate-gradientFlow
        `}
      ></div>

      <main className="relative flex flex-col items-center px-4 py-20 animate-fadeIn">
        <div
          className={`
            relative max-w-3xl w-full p-10 rounded-3xl
            ${cardBg}
            ${borderGlow}
            transition-all duration-500
          `}
        >

          {/* ✅ Glow border effect */}
          <div
            className={`
              absolute inset-0 rounded-3xl
              opacity-40
              ${theme === "dark"
                ? "bg-linear-to-r from-white/20 via-transparent to-white/20"
                : "bg-linear-to-r from-gray-200 via-transparent to-gray-200"}
              blur-xl 
              pointer-events-none
            `}
          ></div>

          {/* ✅ Main Heading */}
          <h1
            className={`
              relative text-4xl font-extrabold tracking-tight mb-8 text-center
              ${textColor}
            `}
          >
            About <span className="text-blue-500">NutriLens</span>
          </h1>

          {/* ✅ Intro Paragraph */}
          <p className={`relative ${subText} text-lg leading-relaxed mb-14 text-center`}>
            NutriLens empowers you to discover what your food really means for your body.
            Through AI-driven insights, personalized health analytics, and intuitive design,
            we help you achieve a healthier lifestyle effortlessly.
          </p>

          {/* ✅ Section content with modern layout */}
          <div className="space-y-12 relative">

            {/* Mission */}
            <div className="group transition-all">
              <h2 className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${textColor}`}>
                🚀 Our Mission
              </h2>
              <p className={`${subText} leading-relaxed group-hover:translate-x-1 transition-all duration-300`}>
                To revolutionize food awareness by merging technology and nutrition into one powerful,
                accessible platform that supports smart decision-making.
              </p>
            </div>

            {/* Why NutriLens */}
            <div className="group transition-all">
              <h2 className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${textColor}`}>
                🌱 Why NutriLens?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className={`${subText} group-hover:translate-x-1 transition-all`}>
                  Detailed nutritional insights for thousands of products
                </li>
                <li className={`${subText} group-hover:translate-x-1 transition-all`}>
                  Personalized diet analysis using AI
                </li>
                <li className={`${subText} group-hover:translate-x-1 transition-all`}>
                  Expert-backed recommendations
                </li>
                <li className={`${subText} group-hover:translate-x-1 transition-all`}>
                  Clean, intuitive UI for effortless tracking
                </li>
              </ul>
            </div>

            {/* Meet the team */}
            <div className="group transition-all">
              <h2 className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${textColor}`}>
                🤝 Meet the Team
              </h2>
              <p className={`${subText} leading-relaxed group-hover:translate-x-1`}>
                We're a passionate team of engineers, nutritionists, and designers dedicated
                to making meaningful tools that enhance your everyday life.
              </p>
            </div>

            {/* Contact */}
            <div className="group transition-all">
              <h2 className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${textColor}`}>
                📩 Contact Us
              </h2>
              <p className={`${subText} leading-relaxed group-hover:translate-x-1`}>
                Got feedback or questions? Email us at{" "}
                <a
                  href="mailto:info@nutrilens.com"
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-400"
                >
                  info@nutrilens.com
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}