import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        <Navigation />

        {/* MAIN CONTENT AREA */}
        <main className="pt-16 min-h-screen">
          {children}
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