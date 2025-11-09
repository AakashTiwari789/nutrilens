

import React from "react";

export default function ContactPage() {
	return (
			<div className="relative w-full min-h-screen" style={{ background: 'radial-gradient(ellipse at 50% 20%, #6d28d9 0%, #18181b 60%), radial-gradient(ellipse at 80% 80%, #0f172a 0%, #18181b 80%)' }}>
				<main className="relative flex flex-col items-center justify-center px-4 py-8 z-10">
				<div className="max-w-xl w-full bg-black rounded-2xl shadow-2xl p-8 border border-gray-800 mx-auto">
					  <h1 className="text-3xl font-bold mb-4 text-white text-center">Contact Us</h1>
					<p className="mb-8 text-gray-300 text-center">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
					<form className="flex flex-col gap-4">
						<input type="text" placeholder="Your Name" className="bg-gray-900 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700" required />
						<input type="email" placeholder="Your Email" className="bg-gray-900 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700" required />
						<textarea placeholder="Your Message" rows={5} className="bg-gray-900 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700" required />
						<button type="submit" className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-bold py-2 px-6 rounded-lg transition">Send Message</button>
					</form>
					<div className="mt-8 text-center text-gray-400">
						<div>Email: <a href="mailto:info@nutrilens.com" className="text-gray-700 hover:underline">info@nutrilens.com</a></div>
						<div>Phone: <a href="tel:+1234567890" className="text-gray-700 hover:underline">+1 (234) 567-890</a></div>
						<div>Address: #112, Church Street, Bengaluru-560064</div>
					</div>
				</div>
			</main>
		</div>
	);
}
