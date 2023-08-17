/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently pursuing a degree in{" "}
        <span className="font-medium">Computer Science</span>, I have a passion for programming. I have learned{" "}
        <span className="font-medium">full-stack web development, DevOps</span>.{" "}I am currently learning <span className="font-medium">Web 3</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core skills
        are{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, Docker, Kubernetes
        </span>
        . I am also familiar with TypeScript, PostgreSQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}<span className="font-medium">philosophy and psychology</span>
      </p>
    </motion.section>
  );
}

export default About;