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
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
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
      <SocialLinks />
    </small>
  );
}
