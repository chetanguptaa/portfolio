import notebook from "../../public/notebook.png";
import portfolio from "../../public/portfolio.png";
import quiz from "../../public/quiz.png";
import task_manager from "../../public/task-manager.png";

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
    title: "notebook-ai",
    description:
      "Developed a Next.js-based AI-powered notebook website integrating OpenAI API for advanced document creation.",
    tags: ["NextJS", "OpenAI Api", "Postgres", "Clerk", "TailwindCSS"],
    imageUrl: notebook,
    githubUrl: "https://github.com/chetanguptaa/note-book",
  },
  {
    title: "Portfolio",
    description:
      "Created Portfolio website for myself with NextJS, TailwindCSS for styling, and Resend for email",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Resend"],
    imageUrl: portfolio,
    githubUrl: "https://github.com/chetanguptaa/portfolio-nextjs",
  },
  {
    title: "Quiz App",
    description:
      "Developed a QUIZ app using NextJS 13, styling using TailwindCSS, and by using OpenAI api.",
    tags: ["NextJS", "tailwindCSS", "OpenAI API", "Next Auth"],
    imageUrl: quiz,
    githubUrl: "https://github.com/chetanguptaa/q-app",
  },
  {
    title: "Task-Manager",
    description:
      "Developed a NodeJS application with Kubernetes for database and docker for creating Dockerfile and docker-compose files",
    tags: ["MongoDB", "Express", "Kubernetes", "Docker"],
    imageUrl: task_manager,
    githubUrl: "https://github.com/chetanguptaa/task-manager",
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript and TypeScript",
  "React",
  "Express",
  "MongoDB",
  "NextJS",
  "Git",
  "Docker",
  "Kubernetes",
] as const;

export const familiarWithSkillsData = ["Terraform", "AWS", "Python"] as const;
