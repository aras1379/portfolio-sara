"use client";

import Link from "next/link";
import BubbleMenu from "@/components/ui/BubbleMenu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const items = [
  {
    label: "home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#f1d697", textColor: "#ffffff" },
  },

  {
    label: "projects",
    href: "/projects",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#F9C0AB", textColor: "#ffffff" },
  },
  {
    label: "cv",
    href: "/cv2",
    ariaLabel: "CV",
    rotation: 8,
    hoverStyles: { bgColor: "#A8CD89", textColor: "#ffffff" },
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const [forceCloseMenu, setForceCloseMenu] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const wasScrolled = isScrolled;
      const nowScrolled = scrollPosition > 50;

      setIsScrolled(nowScrolled);

      // Close menu when scrolling back to top
      if (wasScrolled && !nowScrolled) {
        setForceCloseMenu((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const handleNavClick = () => {
    sessionStorage.setItem("hasNavigated", "true");
  };

  const isActive = (href: string) => {
    if (href === "/" || href === "#") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <style>{`
        .bubble-menu-items {
          align-items: flex-start !important;
          padding-top: 120px !important;
        }
        
        .bubble-menu-items .pill-link {
          min-height: 80px !important;
          padding: clamp(0.75rem, 2vw, 4rem) 0 !important;
          font-size: clamp(1rem, 2.5vw, 2.5rem) !important;
        }
        
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 100px !important;
          }
          
          .bubble-menu-items .pill-link {
            min-height: 45px !important;
            font-size: clamp(1rem, 2.5vw, 3rem) !important;
            padding: clamp(0.75rem, 1.5vw, 1.5rem) 0 !important;
          }
        }
      `}</style>
      {/* nav bar background */}
      <div
        className={`fixed top-0 left-0 right-0 h-16 bg-primary z-1 transition-all duration-300 
        ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-60"}`}
      ></div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="w-full px-10">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-bold text-white"
              onClick={handleNavClick}
            >
              Saras Portfolio
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-background font-semibold"
                    : "text-white hover:text-blue-400"
                }`}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`transition-colors ${
                  isActive("/projects")
                    ? "text-foreground font-semibold"
                    : "text-white hover:text-blue-400"
                }`}
                onClick={handleNavClick}
              >
                Portfolio
              </Link>
              <Link
                href="/cv2"
                className={`transition-colors ${
                  isActive("/cv2")
                    ? "text-secondary-foreground font-bold"
                    : "text-white hover:text-blue-400"
                }`}
                onClick={handleNavClick}
              >
                CV
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
                activeHref={pathname}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Bubble menu when scrolled */}
      <div
        className={`fixed top-6 right-6 z-70 transition-all duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <BubbleMenu
          key={forceCloseMenu}
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="rgba(247, 174, 147, 1)"
          menuContentColor="rgba(241, 229, 199, 1)"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
          activeHref={pathname}
        />
      </div>
    </>
  );
}
