
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import ThemedBody from "@/components/ThemedBody";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "NutriLens",
  description: "Your nutrition guide",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <AuthProvider>
        <ThemedBody>{children}</ThemedBody>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
