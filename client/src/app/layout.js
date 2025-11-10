import Navbar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Nutrilens",
  description: "An App to Analyze Nutritional Value of Food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
