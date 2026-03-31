import Image from "next/image";
import { socialLinks } from "./config";
import { FiLink } from "react-icons/fi";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-xl font-medium tracking-tight">
        Full-Stack Developer | Crafting Web & Mobile Apps
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Full-Stack Developer with a strong focus on frontend development, passionate about building seamless web and mobile experiences that combine functionality with user-centered design. I specialize in scalable applications using modern technologies like Next.js, React, and Vue, with additional experience in backend and mobile development.
        </p>
        <p>
          Alongside development, I'm a Digital Media Design student, diving deep into design, user experience, and how people interact with digital products. This background shapes how I approach code and not just making things work, but making them feel intuitive and accessible for real users.
        </p>
        <p>
          I'm always eager to learn new skills and stay up-to-date with the latest tech trends. Outside of coding, you'll find me enjoying a good cup of coffee ☕, exploring new places 🌍, hitting the slopes 🏂, or getting my hands into pottery 🏺. I'm passionate about learning, sharing knowledge, and supporting inclusive tech communities through open-source contributions. Take a look at my work, and let's connect to discuss how we can build something amazing together!
        </p>
        <p className="flex items-center gap-2"><FiLink /><a href="https://docs.google.com/document/d/1zVr5vU1dkqRabsqREk4xeS86bGxcRPuf9drZXnPp3n0/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Resume Link</a></p>
      </div>
    </section>
  );
}
