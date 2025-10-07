import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sara's Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark-pink2">
      <body className={`${robotoFlex.variable} antialiased`}>
        {/* NAVIGATION BAR */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-background z-1"></div>

        {/* NAVIGATION BAR - text only, no background */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Name*/}
              <Link href="/" className="text-xl font-bold text-white">
                Saras Portfolio
              </Link>

              {/* Navigation Links  */}
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/cv2"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  CV
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-white">☰</button>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="pt-16 min-h-screen">
          {children} {/* page.tsx content appears here */}
        </main>

        {/* FOOTER*/}
        <footer className="bg-primary-foreground text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 Saras Portfolio.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
