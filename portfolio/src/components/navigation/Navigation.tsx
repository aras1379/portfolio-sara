"use client";

import Link from "next/link";
import BubbleMenu from "@/components/ui/BubbleMenu";

const items = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'cv',
    href: '/cv2',
    ariaLabel: 'CV',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function Navigation() {
  return (
    <>
      {/* NAVIGATION BAR BACKGROUND */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-background z-1"></div>

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name*/}
            <Link href="/" className="text-xl font-bold text-white">
              Saras Portfolio
            </Link>

            {/* Navigation Links - Desktop */}
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
              <BubbleMenu
          
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={true}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}