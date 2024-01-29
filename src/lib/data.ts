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
    title: "ShowMeTheMoney",
    description:
      "Architected and developed a feature-rich financial management application using Next.js, TypeScript, and Tailwind CSS",
    tags: ["NextJS", "TailwindCSS", "PostgreSQL", "Next Auth"],
    imageUrl: showmethemoney,
    githubUrl: "https://github.com/chetanguptaa/showmethemoney",
  },
  {
    title: "Portfolio",
    description:
      "Created a Portfolio website for me with NextJS, TailwindCSS for styling, and Resend for email.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Framer-Motion"],
    imageUrl: portfolio,
    githubUrl: "https://github.com/chetanguptaa/portfolio-nextjs",
  },
  {
    title: "Notebook-ai",
    description:
      "Developed a NextJS-based AI-powered notebook website integrating OpenAI API for advanced document creation.",
    tags: ["NextJS", "OpenAI", "Postgres", "Clerk", "TailwindCSS"],
    imageUrl: notebook,
    githubUrl: "https://github.com/chetanguptaa/note-book",
  },
  {
    title: "Task-Manager",
    description:
      "Developed a NodeJS application with Kubernetes for database and docker for creating Dockerfile and docker-compose files.",
    tags: ["MongoDB", "Express", "Kubernetes", "Docker"],
    imageUrl: task_manager,
    githubUrl: "https://github.com/chetanguptaa/task-manager",
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript and TypeScript",
  "PostgreSQL",
  "React",
  "Express",
  "MongoDB",
  "NextJS",
  "Git",
  "Docker",
  "Kubernetes",
] as const;

export const familiarWithSkillsData = ["Terraform", "AWS", "Python"] as const;
