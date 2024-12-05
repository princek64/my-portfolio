import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
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

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Full-Stack Developer, problem solver. Always ready for a challenge.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a passionate Full Stack Developer with a love for learning new technologies and solving complex problems.
          Whether it's building dynamic web applications or diving into the latest tech, I thrive on challenges and continuous growth.
        </p>
        <p>
          When I’m not coding, you can find me enjoying a good cup of coffee ☕, traveling the world 🌍, or hitting the slopes 🏂.
          Explore my work and feel free to reach out through the links below.  
        </p>
      </div>
    </section>
  );
}
