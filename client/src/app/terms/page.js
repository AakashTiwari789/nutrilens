"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function TermsPage() {
  const { theme } = useContext(ThemeContext);
  const bg = theme === "dark"
    ? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
    : "bg-gray-100";
  const cardBg = theme === "dark" ? "bg-black" : "bg-white";
  const borderColor = theme === "dark" ? "border-gray-800" : "border-gray-300";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const sectionText = theme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <div className={`relative w-full min-h-screen ${bg} transition-colors duration-300`}>
      <main className="relative flex flex-col items-center justify-center px-4 py-8 z-10">
        <div className={`max-w-3xl w-full ${cardBg} rounded-2xl shadow-2xl p-8 border mx-auto ${borderColor}`}>
          <h1 className={`text-3xl font-bold mb-4 ${textColor} text-center`}>Terms of Service</h1>
          <p className={`mb-6 ${subText} text-center`}>Please read our terms of service carefully.</p>
          <section className={`space-y-6 ${sectionText}`}>
            <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
            <p>By accessing or using NutriLens, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our service.</p>
            <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
            <p>You must be at least 13 years old to use NutriLens. By using our service, you represent that you meet this age requirement.</p>
            <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
            <p>You agree to provide accurate information and not use NutriLens for any unlawful or harmful purpose. You are responsible for maintaining the confidentiality of your account credentials. You must not attempt to gain unauthorized access to any part of the service or interfere with its operation.</p>
            <h2 className="text-xl font-semibold mb-2">Account Termination</h2>
            <p>We reserve the right to suspend or terminate your account at our discretion, without notice, if you violate these terms or engage in fraudulent, abusive, or illegal activity.</p>
            <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on NutriLens are owned by us or our licensors. You may not reproduce, distribute, or create derivative works without permission. You may use the service for personal, non-commercial purposes only.</p>
            <h2 className="text-xl font-semibold mb-2">Third-Party Links</h2>
            <p>NutriLens may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or accuracy of these external sites. Access them at your own risk.</p>
            <h2 className="text-xl font-semibold mb-2">Medical Disclaimer</h2>
            <p>NutriLens provides information for educational purposes only. It is not a substitute for professional medical advice. Always consult a healthcare provider for health decisions. We do not guarantee the accuracy or completeness of any information provided.</p>
            <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
            <p>NutriLens is not liable for any damages arising from your use of the service, including direct, indirect, incidental, or consequential damages. Use NutriLens at your own risk.</p>
            <h2 className="text-xl font-semibold mb-2">Indemnification</h2>
            <p>You agree to indemnify and hold NutriLens, its affiliates, and employees harmless from any claims, losses, or expenses arising from your use of the service or violation of these terms.</p>
            <h2 className="text-xl font-semibold mb-2">Modifications to Service</h2>
            <p>We reserve the right to modify, suspend, or discontinue NutriLens at any time without notice. We are not liable for any changes or interruptions. We may also update these terms at any time.</p>
            <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
            <p>These Terms of Service are governed by the laws of India. Any disputes arising from your use of NutriLens will be subject to the exclusive jurisdiction of the courts in Bengaluru, India.</p>
            <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Changes will be posted on this page, and your continued use of NutriLens constitutes acceptance of the updated terms.</p>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>For questions, contact us at <a href="mailto:terms@nutrilens.com" className="hover:underline">terms@nutrilens.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}