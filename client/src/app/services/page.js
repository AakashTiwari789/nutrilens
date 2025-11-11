"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ServicesPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`
        relative w-full min-h-screen overflow-hidden 
        ${theme === "dark" 
          ? "bg-linear-to-b from-black via-gray-900 to-gray-800" 
          : "bg-linear-to-br from-white via-gray-200 to-blue-100"
        }
        transition-colors duration-500
      `}
    >

      {/* ✅ Animated S-shaped gradient overlay */}
      <div
        className="s-ambient-gradient absolute inset-0 opacity-70"
      ></div>

      <main className="relative flex flex-col items-center px-4 py-16 animate-fadeIn">

        {/* ✅ Glassmorphic Card */}
        <div
          className={`
            relative max-w-3xl w-full p-10 rounded-3xl glass-card smooth-transition
            ${theme === "dark" ? "glow-border-dark" : "glow-border-light"}
          `}
        >

          {/* ✅ Subtle gradient sheen overlay */}
          <div
            className={`
              absolute inset-0 rounded-3xl opacity-40 blur-xl pointer-events-none
              ${theme === "dark"
                ? "bg-linear-to-r from-white/20 via-transparent to-white/20"
                : "bg-linear-to-r from-gray-200 via-transparent to-gray-200"}
            `}
          ></div>

          {/* ✅ Title */}
          <h1
            className={`
              relative text-4xl font-extrabold text-center mb-6 
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
          >
            🌟 Our Services
          </h1>

          <p
            className={`
              relative text-center text-lg mb-10
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
          >
            Everything you need to take control of your nutrition — smart, simple, and personalized.
          </p>

          {/* ✅ Services List */}
          <section className="relative space-y-10">

            {/* === SERVICE CARD TEMPLATE === */}
            <div className="hover-lift transition-all group">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🍏 Nutrition Analysis
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} group-hover:translate-x-1 transition`}>
                Instantly access detailed nutritional breakdowns for thousands of food products and recipes.
                Understand calories, macronutrients, vitamins, minerals — and make smarter choices every day.
              </p>
            </div>

            <div className="hover-lift transition-all group">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🎯 Personalized Recommendations
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} group-hover:translate-x-1 transition`}>
                Tailored suggestions based on your goals, dietary preferences, and lifestyle — designed to
                fit you, not the other way around.
              </p>
            </div>

            <div className="hover-lift transition-all group">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🥗 Meal & Diet Planning
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} group-hover:translate-x-1 transition`}>
                Build custom meal plans, generate shopping lists, and stay organized — all while hitting your nutrition targets.
              </p>
            </div>

            <div className="hover-lift transition-all group">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                📊 Progress Tracking
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} group-hover:translate-x-1 transition`}>
                Monitor your journey with intuitive charts and analytics. Set goals, log meals, and celebrate your achievements.
              </p>
            </div>

            <div className="hover-lift transition-all group">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                💬 Expert Support & Community
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} group-hover:translate-x-1 transition`}>
                Connect with experts and like-minded individuals. Get personalized advice, share experiences, and stay motivated.
              </p>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
