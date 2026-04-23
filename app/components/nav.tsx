"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { PixelPrinceMark } from "./PixelPrinceMark";

const navItems = {
  "/about": { name: "About" },
  "/projects": { name: "Projects" },
  "/design": { name: "Design" },
  "/blog": { name: "Blog" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <PixelPrinceMark variant="auto" size={48} compact />
            <span className="text-3xl font-bold tracking-tight">
              {metaData.titleShort}
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path || pathname.startsWith(path + "/");
            return (
              <Link
                key={path}
                href={path}
                className={`nav-link transition-colors duration-200 flex align-middle relative text-sm font-medium ${isActive
                    ? "active text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
              >
                {name}
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
