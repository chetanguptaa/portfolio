import notebook from "../../public/notebook.png";
import portfolio from "../../public/portfolio.png";
import showmethemoney from "../../public/showmethemoney.png";
import { CgWorkAlt } from "react-icons/cg";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Recents",
    hash: "#recents",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "show me the money",
    description:
      "Architected and developed a feature-rich financial management application using Next.js, TypeScript, and Tailwind CSS.",
    tags: ["NextJS", "TailwindCSS", "PostgreSQL", "NextAuth", "Prisma"],
    imageUrl: showmethemoney,
    github: "https://github.com/chetanguptaa/showmethemoney",
    liveUrl: "https://showmethemoneyy.vercel.app",
  },
  {
    title: "Portfolio",
    description: "Created a Portfolio website for me with NextJS, TailwindCSS for styling, and Resend for email.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Framer-Motion"],
    imageUrl: portfolio,
    github: "https://github.com/chetanguptaa/portfolio",
    liveUrl: "https://chetangupta.vercel.app",
  },
  {
    title: "Notebook-ai",
    description:
      "Developed a NextJS-based AI-powered notebook website integrating OpenAI API for advanced document creation.",
    tags: ["NextJS", "OpenAI", "Postgres", "TailwindCSS"],
    imageUrl: notebook,
    github: "https://github.com/chetanguptaa/note-book",
    liveUrl: "https://notebook-ai.vercel.app",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "PostgreSQL",
  "Next.js",
  "TailwindCSS",
  "React.js",
  "Recoil",
  "Node.js",
  "Express.js",
  "tRPC",
  "TurboRepo",
  "Nginx",
  "MongoDB",
  "Prisma",
  "Git",
  "Docker",
  "Kubernetes",
  "Java",
  "AWS",
  "Golang",
  "Redis",
  "Kafka",
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Cantilever Labs",
    description:
      "Worked as a full stack developer where my main tech stack was mern stack and aws, here i also had experience working with redis, kafka, and container orchestration.",
    icon: React.createElement(CgWorkAlt),
    date: "March, 2024 - present",
  },
] as const;
