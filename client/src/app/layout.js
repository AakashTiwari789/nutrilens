
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemedBody from "@/components/ThemedBody";

export const metadata = {
  title: "Nutrilens",
  description: "An App to Analyze Nutritional Value of Food",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemedBody>{children}</ThemedBody>
      </ThemeProvider>
    </html>
  );
}
