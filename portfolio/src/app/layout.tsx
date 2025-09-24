import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* NAVIGATION BAR */}
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Name*/}
              <Link href="/" className="text-xl font-bold text-gray-900">
                Sara's Portfolio
              </Link>

              {/* Navigation Links  */}
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/cv"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  CV
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700">☰</button>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="pt-16 min-h-screen">
          {children} {/* page.tsx content appears here */}
        </main>

        {/* FOOTER*/}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 Sara's Portfolio.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
