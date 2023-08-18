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
      "Developed a Google Docs clone utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack.Implemented Yjs for Conflict-free Replicated Data Types (CRDT).",
    tags: ["React", "Express", "MongoDB", "Docker"],
  },
  {
    title: "Web3 based PayPal Clone",
    description:
      "Implemented smart contracts for secure transactions and user management using solidity.",
    tags: ["React", "Express", "TypeScript", "Solidity"],
  },
  {
    title: "Course Selling Website.",
    description:
      "Developed a Course Selling Website utilizing the MERN stack.Validated requests using middleware to ensure data integrity.",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "NodeJS Application Using Docker and Kubernetes cluster",
    description:
      "Created a system used to handle Database, and server orchestration using docker, docker-compose.",
    tags: ["React", "Express", "MongoDB", "Docker", "Kubernetes"],
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