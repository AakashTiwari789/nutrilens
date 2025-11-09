


import React from "react";

export default function PrivacyPage() {
  return (
    <div className="relative w-full min-h-screen" style={{ background: 'radial-gradient(ellipse at 50% 20%, #6d28d9 0%, #18181b 60%), radial-gradient(ellipse at 80% 80%, #0f172a 0%, #18181b 80%)' }}>
      <main className="relative flex flex-col items-center justify-center px-4 py-8 z-10">
        <div className="max-w-3xl w-full bg-black rounded-2xl shadow-2xl p-8 border border-gray-800 mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-white text-center">Privacy Policy</h1>
          <p className="mb-6 text-gray-300 text-center">Your privacy is important to us. Read our policy below.</p>
          <section className="space-y-6 text-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Information We Collect</h2>
            <p>NutriLens collects information you provide directly, such as your name, email address, and nutrition preferences. We also collect usage data, device information, and cookies to improve your experience.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">How We Use Your Information</h2>
            <p>Your data is used to personalize your nutrition analysis, provide recommendations, and improve our services. We may use aggregated, anonymized data for research and analytics.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Data Sharing & Disclosure</h2>
            <p>We do not sell or share your personal information with third parties except as required by law or with your explicit consent. Service providers may access data only to perform tasks on our behalf and are bound by confidentiality.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Data Security</h2>
            <p>We use industry-standard encryption and security measures to protect your data. Access is restricted to authorized personnel only. Despite our efforts, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Rights & Choices</h2>
            <p>You may access, update, or delete your personal information at any time. You can opt out of non-essential communications and disable cookies in your browser settings.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Children's Privacy</h2>
            <p>NutriLens does not knowingly collect information from children under 13. If you believe a child has provided us with personal data, please contact us for removal.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page, and your continued use of NutriLens constitutes acceptance of the updated policy.</p>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
            <p>For any privacy concerns, contact us at <a href="mailto:privacy@nutrilens.com" className="text-gray-700 hover:underline">privacy@nutrilens.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
