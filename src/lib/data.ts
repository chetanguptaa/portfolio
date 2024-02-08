import notebook from "../../public/notebook.png";
import portfolio from "../../public/portfolio.png";
import task_manager from "../../public/task-manager.png";
import showmethemoney from "../../public/showmethemoney.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    description:
      "Created a Portfolio website for me with NextJS, TailwindCSS for styling, and Resend for email.",
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
  "JavaScript and TypeScript",
  "PostgreSQL",
  "NextJS",
  "TailwindCSS",
  "React",
  "Express",
  "MongoDB",
  "Git",
  "Docker",
  "Kubernetes",
  "Java",
] as const;

export const familiarWithSkillsData = ["Terraform", "AWS", "Python"] as const;
