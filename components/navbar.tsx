"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // Function to determine if the current path is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/" && !isContactActive) return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };

  const [isContactActive, setIsContactActive] = useState(false);

  useEffect(() => {
    const checkContactActive = () => {
      setIsContactActive(window.location.hash === "#contact");
    };
    checkContactActive();
    window.addEventListener("hashchange", checkContactActive);
    return () => {
      window.removeEventListener("hashchange", checkContactActive);
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
      setIsContactActive(true);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "active-nav-link"
                  : "text-white hover:text-blue-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "active-nav-link"
                  : "text-white hover:text-blue-500"
              }`}
            >
              About
            </Link>
            <Link
              href="/terms"
              className={`transition-colors ${
                isActive("/terms")
                  ? "active-nav-link"
                  : "text-white hover:text-blue-500"
              }`}
            >
              Terms
            </Link>
            <a
              href="#contact"
              className={`transition-colors ${
                isContactActive && pathname === "/"
                  ? "active-nav-link"
                  : "text-white hover:text-blue-500"
              }`}
              onClick={scrollToContact}
            >
              Contact US
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white">
                Download App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              href="/"
              className={`block py-2 ${
                isActive("/")
                  ? "text-purple-400"
                  : "text-white hover:text-purple-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-2 ${
                isActive("/about")
                  ? "text-purple-400"
                  : "text-white hover:text-purple-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/terms"
              className={`block py-2 ${
                isActive("/terms")
                  ? "text-purple-400"
                  : "text-white hover:text-purple-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <a
              href="#contact"
              className={`block py-2 ${
                isActive("/contact")
                  ? "text-purple-400"
                  : "text-white hover:text-purple-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "#contact");
                  setIsContactActive(true);
                }
              }}
            >
              Contact US
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white">
                Download App
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
