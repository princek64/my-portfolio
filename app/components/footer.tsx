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
import { metaData, socialLinks } from "app/config";

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
      rel="noopener noreferrer"
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
  return (
    <footer className="w-full mt-16 md:mt-24 border-t border-neutral-100 dark:border-neutral-800 pt-8 pb-12">
      <div className="mb-10">
        <h2 className="text-base font-medium tracking-tight text-neutral-800 dark:text-neutral-200 mb-2">
          Get in touch
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">
          Open to freelance projects, full-time roles, and interesting conversations.
          The best way to reach me is by email.
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <a
            href={socialLinks.email}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg
              bg-neutral-900 text-white dark:bg-white dark:text-neutral-900
              hover:opacity-85 transition-opacity duration-200"
            aria-label="Send me an email"
          >
            <TbMailFilled className="text-base" />
            Say hello
          </a>
          <div className="flex items-center gap-3 text-lg text-neutral-400 dark:text-neutral-500">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-linkedin transition-colors duration-200 hover:text-[#0a66c2]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-github transition-colors duration-200 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="social-dribbble transition-colors duration-200 hover:text-[#ea4c89]"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>

      <small className="block text-[#1C1C1C] dark:text-[#D4D4D4] border-t border-neutral-100 dark:border-neutral-800 pt-6">
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
        <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </small>
    </footer>
  );
}
