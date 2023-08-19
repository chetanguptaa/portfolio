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
    title: "Google DOCS Clone",
    description:
      "Developed a Google Docs clone utilizing the MERN stack.Implemented Yjs for CRDT.",
    tags: ["React", "Express", "MongoDB", "Docker"],
    link: "https://github.com/chetanguptaa/google-docs-clone"
  },
  {
    title: "Web3 PayPal Clone",
    description:
      "Implemented smart contracts for secure transactions and user management using solidity.",
    tags: ["React", "Express", "TypeScript", "Solidity"],
    link: "https://github.com/chetanguptaa/paypal-clone"
  },
  {
    title: "Course Selling Website",
    description:
      "Developed a Course Selling Website utilizing the MERN stack.",
    tags: ["React", "Express", "MongoDB"],
    link: "https://github.com/chetanguptaa/course-era"
  },
  {
    title: "NodeJS Application Using Docker and Kubernetes",
    description:
      "Created a system to handle Database, and server orchestration using docker, Kubernetes.",
    tags: ["Express", "MongoDB", "Docker", "Kubernetes"],
    link: "https://github.com/chetanguptaa/task-manager"
  }
] as const;

export const skillsData = [
  "Java",
  "JavaScript and TypeScript",
  "React",
  "Express",
  "MongoDB",
  "Git",
  "Docker",
  "Kubernetes",
] as const;


export const familiarWithSkillsData = [
  "Terraform",
  "AWS",
  "Next.js",
  "Python",
  "FireBase"
] as const;



/**Developed a Google Docs clone utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack.
Implemented Yjs for Conflict-free Replicated Data Types (CRDT), enabling real-time collaboration among multiple users with automatic conflict resolution.
Implemented user authentication features (login/signup) using secure practices like hashed passwords and JWT (JSON Web Tokens).
Integrated a link sharing feature, allowing users to share documents securely with others, enhancing collaboration and document accessibility.
 */