"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function PrivacyPage() {
  const { theme } = useContext(ThemeContext);

  const bg =
    theme === "dark"
      ? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
      : "bg-gradient-to-br from-white via-gray-200 to-blue-100";

  const cardBg =
    theme === "dark"
      ? "bg-black/40 backdrop-blur-2xl"
      : "bg-white/70 backdrop-blur-md";

  const borderGlow =
    theme === "dark"
      ? "border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      : "border border-gray-300 shadow-[0_0_20px_rgba(100,150,255,0.35)]";

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const sectionText = theme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden ${bg} transition-colors duration-500`}
    >
      {/* ✅ S-shaped gradient background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_20%_30%,rgba(140,180,255,0.35),transparent_45%),
              radial-gradient(circle_at_80%_70%,rgba(200,150,255,0.40),transparent_45%),
              radial-gradient(circle_at_50%_50%,rgba(255,180,200,0.30),transparent_45%)]
          animate-gradientFlow
        `}
      ></div>

      <main className="relative flex flex-col items-center px-4 py-16 animate-fadeIn">
        <div
          className={`
            relative max-w-3xl w-full p-10 rounded-3xl
            ${cardBg}
            ${borderGlow}
            transition-all duration-500
          `}
        >
          {/* ✅ Glow overlay */}
          <div
            className={`
              absolute inset-0 rounded-3xl
              opacity-40
              ${
                theme === "dark"
                  ? "bg-linear-to-r from-white/20 via-transparent to-white/20"
                  : "bg-linear-to-r from-gray-200 via-transparent to-gray-200"
              }
              blur-xl 
              pointer-events-none
            `}
          ></div>

          {/* ✅ Title */}
          <h1
            className={`relative text-4xl font-extrabold tracking-tight mb-4 text-center ${textColor}`}
          >
            🔒 Privacy Policy
          </h1>

          <p className={`relative mb-10 text-center text-lg ${subText}`}>
            Your privacy matters to us. Here's how we protect your data.
          </p>

          {/* ✅ Sections */}
          <section className="relative space-y-12">
            {/* Section Template */}
            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                📥 Information We Collect
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                NutriLens collects information you provide directly, such as
                your name, email address, and nutrition preferences. We also
                gather device data and cookies to improve your experience.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                ⚙️ How We Use Your Information
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                We personalize your nutrition insights, enhance app usability,
                and conduct anonymized research and analytics.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                🔐 Data Sharing & Disclosure
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                We never sell your information. Third-party access is strictly
                limited to essential service providers under confidentiality
                agreements.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                🛡️ Data Security
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                We use encryption and secure systems to protect your data.
                However, no internet transmission is 100% secure.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                ⚖️ Your Rights & Choices
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                You can access, update, or remove your data anytime. Cookie
                preferences can be adjusted from your browser.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                👶 Children’s Privacy
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                We do not knowingly collect data from children under 13. Contact
                us if you believe such data has been submitted.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                🔄 Policy Updates
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                This Privacy Policy may be updated periodically. Continued use
                of NutriLens implies acceptance.
              </p>
            </div>

            <div className="group transition-all">
              <h2
                className={`text-2xl font-semibold mb-2 flex items-center gap-2 ${textColor}`}
              >
                📩 Contact Us
              </h2>
              <p
                className={`${sectionText} leading-relaxed group-hover:translate-x-1 transition`}
              >
                For privacy concerns, reach us at{" "}
                <a
                  href="mailto:privacy@nutrilens.com"
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-400"
                >
                  privacy@nutrilens.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
