


"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";


export default function ContactPage() {
	const { theme } = useContext(ThemeContext);
	const bg = theme === "dark"
		? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
		: "bg-gray-100";
	const cardBg = theme === "dark" ? "bg-black" : "bg-white";
	const borderColor = theme === "dark" ? "border-gray-800" : "border-gray-300";
	const textColor = theme === "dark" ? "text-white" : "text-gray-900";
	const subText = theme === "dark" ? "text-gray-300" : "text-gray-700";
	const inputBg = theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-200 text-gray-900";
	const buttonBg = theme === "dark" ? "bg-gray-700 hover:bg-gray-600 text-gray-100" : "bg-gray-500 hover:bg-gray-400 text-white";
	const linkColor = theme === "dark" ? "text-gray-400 hover:text-gray-100" : "text-gray-700 hover:text-gray-900";

	return (
		<div className={`relative w-full min-h-screen ${bg} transition-colors duration-300`}>
			<main className="relative flex flex-col items-center justify-center px-4 py-8 z-10">
				<div className={`max-w-xl w-full ${cardBg} rounded-2xl shadow-2xl p-8 border mx-auto ${borderColor}`}>
					<h1 className={`text-3xl font-bold mb-4 ${textColor} text-center`}>Contact Us</h1>
					<p className={`mb-8 ${subText} text-center`}>We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
					<form className="flex flex-col gap-4">
						<input type="text" placeholder="Your Name" className={`${inputBg} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700`} required />
						<input type="email" placeholder="Your Email" className={`${inputBg} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700`} required />
						<textarea placeholder="Your Message" rows={5} className={`${inputBg} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700`} required />
						<button type="submit" className={`${buttonBg} font-bold py-2 px-6 rounded-lg transition`}>Send Message</button>
					</form>
					<div className={`mt-8 text-center ${subText}`}>
						<div>Email: <a href="mailto:info@nutrilens.com" className={linkColor + " hover:underline"}>info@nutrilens.com</a></div>
						<div>Phone: <a href="tel:+1234567890" className={linkColor + " hover:underline"}>+1 (234) 567-890</a></div>
						<div>Address: #112, Church Street, Bengaluru-560064</div>
					</div>
				</div>
			</main>
		</div>
	);
}
