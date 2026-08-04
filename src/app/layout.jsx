import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Krish Paliwal | Full Stack Developer & BCA Student Portfolio",
  description:
    "Krish Paliwal is a passionate BCA Student and Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth scrollbar-custom`}
    >
      <body className="min-h-full bg-[#030014] text-slate-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}