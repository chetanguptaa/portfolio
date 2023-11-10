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
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 font-semibold">
        Hello, I am Chetan Gupta. My core skills are{" "}
        <span className="font-semibold bg-blue-400">
          NextJS, PostgreSQL, Docker, and Kubernetes
        </span>
        . I am also familiar with{" "}
        <span className="font-semibold bg-rose-300">AWS, and Golang</span>.
      </p>
      <p>
        <span className="font-semibold">
          When I'm not coding, I enjoy watching
        </span>{" "}
        <span className="font-serif">Movies</span>{" "}
        <span className="font-semibold">and playing </span>
        <span className="font-serif">Football</span>.
      </p>
    </motion.section>
  );
}

export default About;
