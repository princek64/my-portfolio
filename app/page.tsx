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
        Full-Stack Developer | Architect | Problem Solver
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a Full-Stack Developer passionate about building web applications that are both user-friendly and powerful.
          With experience in both frontend and backend development, I enjoy tackling complex challenges and creating solutions that help businesses grow.
        </p>
        <p>
          I specialize in building scalable applications that solve real problems, using modern technologies like Next.js, React, Vue, TypeScript, and Express.
          I’m also experienced with mobile development using Ionic.
        </p>
        <p>
          I’m always eager to learn new skills and stay up-to-date with the latest tech trends. Outside of coding, you can find me enjoying a good cup of coffee ☕, exploring new places 🌍, or hitting the slopes 🏂.
          I’m also deeply committed to lifelong learning and sharing my knowledge with others to help build better, more inclusive tech communities.
          Take a look at my work, and let’s connect to discuss how we can build something amazing together!
        </p>
        <p className="flex items-center gap-2"><FiLink /><a href="https://drive.google.com/file/d/1my94ugCJbmZCfu16QRr9sGRndaeQ2ybJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume Link</a></p>
      </div>
    </section>
  );
}
