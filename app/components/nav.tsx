"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { PixelPrinceMark } from "./PixelPrinceMark";

const navItems = {
  "/work": { name: "Work" },
  "/about": { name: "About" },
  "/blog": { name: "Writing" },
};

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        {/* Top row: logo + hamburger on mobile, logo on desktop */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)} aria-label="Prince Kukreja, Home">
            <PixelPrinceMark variant="auto" size={48} compact aria-hidden="true" />
            <span className="text-3xl font-bold tracking-tight" aria-hidden="true">
              {metaData.titleShort}
            </span>
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger-btn md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        {/* Desktop links — always visible on md+ */}
        <div className="hidden md:flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path || pathname.startsWith(path + "/");
            return (
              <Link
                key={path}
                href={path}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link transition-colors duration-200 flex align-middle relative text-sm font-medium ${isActive
                    ? "active text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
              >
                {name}
              </Link>
            );
          })}
          <a
            href="/cv.pdf"
            download
            className="nav-link transition-colors duration-200 flex align-middle relative text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Download CV
          </a>
          <ThemeSwitch />
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`mobile-menu-overlay md:hidden ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-content">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path || pathname.startsWith(path + "/");
            return (
              <Link
                key={path}
                href={path}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`mobile-menu-link ${isActive ? "active" : ""}`}
              >
                {name}
                {isActive && <span className="mobile-active-bar" aria-hidden="true" />}
              </Link>
            );
          })}
          <a
            href="/cv.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mobile-menu-link"
          >
            Download CV
          </a>
          <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
