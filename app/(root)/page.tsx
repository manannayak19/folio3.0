"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import {
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import { Mail } from "lucide-react";
import { PROJECTS, SOCIAL_LINKS } from "../lib/constants";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ReactLenis from "lenis/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <ReactLenis root>
      <div
        className={cn(
          // Responsive Container:
          // - Reduced padding (py-12) for mobile
          // - Standard padding (md:py-24) for tablet/desktop
          "container mx-auto max-w-3xl px-4 py-12 md:py-24",
          poppins.className
        )}
      >
        {/* --- Hero Text Section --- */}
        <div className="mt-3 flex flex-col gap-2">
          <Image
            src={`/manan.jpg`}
            alt=""
            width={300}
            height={300}
            className="rounded-2xl shadow-md"
          ></Image>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl dark:to-primary">
            hello, i&apos;m Manan - fullstack developer
          </h1>

          {/* Skills / Bio */}

          <div className="mt flex flex-wrap items-center gap-x-2 gap-y-2 whitespace-pre-wrap text-sm text-neutral-600 sm:text-base md:text-lg">
            <div className="flex flex-col gap-2">
              <span className="whitespace-pre-wrap">
                i <span className="font-semibold">build</span>, sometimes{" "}
                <span className="font-semibold">fail</span>, always{" "}
                <span className="font-semibold">iterate</span>{" "}
                <br className="hidden xl:block" />
                <span className="font-semibold">tech i work with:</span>
              </span>
              <span className="mt-2 inline-flex flex-wrap gap-2 sm:mt-0 sm:inline-flex">
                {/* javascript */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                >
                  <div className="size-4 shrink-0">
                    <SiJavascript className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">
                    JavaScript
                  </p>
                </a>

                {/* TypeScript */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://www.typescriptlang.org/"
                >
                  <div className="size-4 shrink-0">
                    <SiTypescript className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">
                    Typescript
                  </p>
                </a>

                {/* React */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://react.dev/"
                >
                  <div className="size-4 shrink-0">
                    <SiReact className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">React</p>
                </a>

                {/* Next.js */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://nextjs.org/"
                >
                  <div className="size-4 shrink-0">
                    <SiNextdotjs className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">
                    Next.js
                  </p>
                </a>
                {/* Mongo */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://www.mongodb.com/docs/"
                >
                  <div className="size-4 shrink-0">
                    <SiMongodb className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">Mongo</p>
                </a>
                {/* Nodejs */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://nodejs.org/en"
                >
                  <div className="size-4 shrink-0">
                    <SiNodedotjs className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">Node</p>
                </a>
                {/* express */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href=""
                >
                  <div className="size-4 shrink-0">
                    <SiExpress className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">
                    ExpressJs
                  </p>
                </a>
                {/* python */}
                <a
                  target="_blank"
                  className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                  href="https://www.python.org/"
                >
                  <div className="size-4 shrink-0">
                    <SiPython className="h-full w-full" />
                  </div>
                  <p className="ml-1 text-xs font-semibold sm:text-sm">
                    Python
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <hr className="mt-5" /> */}
        {/* --- Buttons Section --- */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4">
          {/* Resume Button */}
          {/* <Link href="/resume" className="w-full sm:w-auto">
            <button className="btn-inner-shadow inset-shadow-indigo-500 inline-flex h-10 w-full shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:scale-95 hover:bg-accent hover:text-accent-foreground hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-input dark:bg-input/30 dark:hover:bg-input/50 sm:h-9 sm:w-auto">
              <FileText className="size-4" />
              Resume
            </button>
          </Link> */}

          {/* Contact Button */}
          <Link
            href="mailto:themanannayak@gmail.com"
            className="w-full sm:w-auto"
          >
            <button className="btn-inner-shadow inset-shadow-indigo-500 inline-flex h-10 w-full shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:scale-95 hover:bg-primary/90 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-9 sm:w-auto">
              <Mail className="size-4" />
              Get in touch
            </button>
          </Link>
        </div>

        {/* --- Socials & Widget Section --- */}
        <div className="mt-5 flex gap-3 sm:gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              href={social.href}
              aria-label={social.name}
              className="flex items-center gap-2 text-secondary transition-colors hover:text-primary"
            >
              <social.icon className="size-6" />
            </a>
          ))}
        </div>
        <hr className="mt-5" />
        {/* Project section */}
        <section className="mt-5 w-full">
          <h2 className=" text-2xl font-semibold text-primary">
            built/building:
          </h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-secondary/20 bg-secondary/5 transition-all hover:border-secondary/50 shadow-lg hover:bg-blue-100 cursor-default"
              >
                {/* Project Display (Image) */}
                {/* <div className="relative aspect-video w-full overflow-hidden bg-secondary/20">
              <Image
              width={100}
              height={100}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div> */}

                {/* Content Container */}
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary">
                      {project.title}
                    </h3>

                    {/* Optional Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary"
                          aria-label="View Source"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary"
                          aria-label="View Live Demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mb-2 text-sm text-secondary border-t">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-amber-50 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium bg-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
