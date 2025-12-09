import { FaGithub, FaLinkedin, FaXTwitter,  } from "react-icons/fa6";


export const NAV_ITEMS = [
    { href: '/', label: 'About' },
    { href: '/resume', label: 'Resume' },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/manannayak19", // Paste your GitHub URL here
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/manan-nayak/", // Paste your LinkedIn URL here
    icon: FaLinkedin,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/nayak_manan", // Paste your X URL here
    icon: FaXTwitter,
  },
];

export const PROJECTS = [
  {
    title: "Signalist Stock Trader",
    description:
      "Signalist is a modern, real-time stock tracking application built with Next.js. It empowers users to stay ahead of the market with interactive visualizations, AI-curated news summaries, and robust watchlist management",
    techStack: ["Next.JS", "React", "Tailwind CSS", "ShadCN", "MongoDB"],
    image: "", // Replace with your project screenshot
    github: "https://github.com/manannayak19/signalist-stock-tracker-app", // Optional
    demo: "https://signalist-stocktrader.vercel.app/sign-in", // Optional
  },
  {
    title: "Team Project Management",
    description:
      "This project is a fully built, multi-tenant Team Project Management application that secures user data through Role-Based Access Control (RBAC) and JWT-based OAuth authentication.",
    techStack: [ "React","Express", "NodeJs", "MongoDB", "Tailwind CSS"],
    image: "",
    github: "https://github.com/manannayak19/TPMapp-frontend",
    demo: "https://tpm-app.vercel.app/",
  },
  {
    title: "Virtual Machine in C",
    description:
      "This project is a C-based emulator for the Little Computer 3 virtual machine, designed to execute compiled LC-3 assembly programs. It implements the full standard instruction set (opcodes) and uses trap routines to simulate system calls for keyboard input and console output.(building)",
    techStack: ["C"],
    image: "",
    github: "https://github.com/manannayak19/virtual-maChine", 
    demo: "", 
  },
  
];