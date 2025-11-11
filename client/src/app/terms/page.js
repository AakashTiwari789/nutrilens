"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function TermsPage() {
  const { theme } = useContext(ThemeContext);

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

      {/* ✅ Animated S-shaped gradient overlay */}
      <div className="s-ambient-gradient absolute inset-0 opacity-70"></div>

      <main className="relative flex flex-col items-center px-4 py-16 animate-fadeIn">

        {/* ✅ Premium Glass Card */}
        <div
          className={`
            relative max-w-3xl w-full p-10 rounded-3xl glass-card smooth-transition
            ${theme === "dark" ? "glow-border-dark" : "glow-border-light"}
          `}
        >
          {/* ✅ Subtle light sheen gradient overlay */}
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
            📜 Terms of Service
          </h1>

          <p
            className={`
              relative text-center text-lg mb-12 
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
          >
            Please read our terms of service carefully.
          </p>

          {/* ✅ Terms Sections */}
          <section className="relative space-y-10">

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                ✅ Acceptance of Terms
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                By accessing or using NutriLens, you agree to these Terms of Service and all applicable laws. 
                If you do not agree, please refrain from using the service.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                👤 Eligibility
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                You must be at least 13 years old to use NutriLens. By using our service, you confirm your eligibility.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🙋 User Responsibilities
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                Provide accurate information and do not misuse the platform. You are responsible for your account credentials
                and must avoid unauthorized access or interference with the service.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🚫 Account Termination
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                We may suspend or terminate your account if you violate these terms or engage in fraudulent activity.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🧠 Intellectual Property
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                All content on NutriLens is owned by us or our licensors. You may not reproduce or distribute it without permission.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🌐 Third-Party Links
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                NutriLens may contain external links. We are not responsible for their content or privacy practices.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                ⚕️ Medical Disclaimer
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                NutriLens provides educational information only. Consult a qualified healthcare provider for medical decisions.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                ⚠️ Limitation of Liability
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                We are not liable for damages arising from your use of NutriLens. Use the service at your own risk.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🛡️ Indemnification
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                You agree to indemnify NutriLens from claims arising from your misuse of the service.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🔧 Modifications to Service
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                We may modify or discontinue the service at any time, without notice.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                ⚖️ Governing Law
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                These terms are governed by Indian law. Disputes fall under Bengaluru court jurisdiction.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                🔄 Changes to Terms
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                Terms may be updated anytime. Continued use implies acceptance.
              </p>
            </div>

            <div className="group hover-lift transition-all">
              <h2 className={`text-2xl font-semibold mb-2 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                📩 Contact Us
              </h2>
              <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-800"} leading-relaxed group-hover:translate-x-1 transition`}>
                Contact us at{" "}
                <a href="mailto:terms@nutrilens.com" className="text-blue-500 underline hover:text-blue-400">
                  terms@nutrilens.com
                </a>.
              </p>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
