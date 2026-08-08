"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
  FaDev,
  FaDribbble,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { socialLinks } from "app/config";
import { usePathname } from "next/navigation";

const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
  className,
  label,
}: {
  href: string;
  icon: React.ElementType;
  className?: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className={`transition-colors duration-200 ${className ?? ""}`}
    >
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right text-neutral-500 dark:text-neutral-400">
      {/* <SocialLink href={socialLinks.twitter} icon={FaXTwitter} className="social-twitter" label="Twitter" /> */}
      <SocialLink href={socialLinks.github} icon={FaGithub} className="social-github" label="GitHub" />
      {/* <SocialLink href={socialLinks.instagram} icon={FaInstagram} className="social-instagram" label="Instagram" /> */}
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} className="social-linkedin" label="LinkedIn" />
      <SocialLink href={socialLinks.devTo} icon={FaDev} className="social-devto" label="DEV.to" />
      <SocialLink href={socialLinks.dribbble} icon={FaDribbble} className="social-dribbble" label="Dribbble" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} className="social-email" label="Email" />
      {/* <a href="/rss.xml" target="_self"><FaRss /></a> */}
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  const getInTouchSubtext = isAbout
    ? "i'm based in London and open to full-time roles. if you're building something where design and engineering need to speak the same language, let's talk."
    : "open to full-time roles, freelance projects, and interesting problems. the best way to reach me is by email.";

  return (
    <footer className="w-full mt-16 md:mt-24 border-t border-neutral-100 dark:border-neutral-800 pt-8">
      <div className="mb-10">
        <h2 className="text-base font-medium tracking-tight text-neutral-800 dark:text-neutral-200 mb-2">
          have a project in mind?
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">
          {getInTouchSubtext}
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg
                bg-neutral-900 text-white dark:bg-white dark:text-neutral-900
                hover:opacity-85 transition-opacity duration-200"
              aria-label="Send me an email"
            >
              <TbMailFilled className="text-base" aria-hidden="true" />
              Say hello
            </a>
            <a
              href="/photos"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
            >
              Photography
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg text-neutral-400 dark:text-neutral-500">
            <a
              href="https://x.com/pixelprincedev"
              target="_blank"
              rel="noopener"
              aria-label="X"
              className="transition-colors duration-200 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              <FaXTwitter aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="social-linkedin transition-colors duration-200 hover:text-[#0a66c2]"
            >
              <FaLinkedinIn aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="social-github transition-colors duration-200 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              <FaGithub aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={socialLinks.dribbble}
              target="_blank"
              rel="noopener"
              aria-label="Dribbble"
              className="social-dribbble transition-colors duration-200 hover:text-[#ea4c89]"
            >
              <FaDribbble aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-neutral-200 pt-8 font-sans text-neutral-800 dark:border-neutral-800 dark:text-neutral-200">
        <div className="grid grid-cols-2 gap-8 pb-8 text-sm leading-relaxed">
          <div>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener"
              className="text-base font-medium tracking-tight transition-opacity hover:opacity-70"
            >
              Prince
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <p>Design Engineer</p>
          </div>
          <div className="text-right">
            <p>London, UK</p>
            <p>© {YEAR}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
