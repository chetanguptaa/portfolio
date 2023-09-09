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
    title: "PaperSync",
    description:
      "paperSync is a user-friendly document creation and collaboration tool. Implemented using the MERN stack and Yjs for CRDT.",
    tags: ["React", "Express", "MongoDB", "Docker"],
    link: "https://github.com/chetanguptaa/paper-sync",
  },
  {
    title: "CryptoPay",
    description:
      "Implemented smart contracts for secure transactions and user management using solidity.",
    tags: ["React", "Express", "TypeScript", "Solidity"],
    link: "https://github.com/chetanguptaa/crypto-pay",
  },
  {
    title: "Wacky Wisdom",
    description:
      "Developed a QUIZ app using NextJS 13, styling using TailwindCSS, and by using OpenAI api.",
    tags: ["NextJS", "tailwindCSS", "OpenAI API", "Next Auth"],
    link: "https://github.com/chetanguptaa/q-app",
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
