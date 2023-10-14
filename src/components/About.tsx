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
        <span className="font-semibold">Computer Science</span>. My core skills
        are{" "}
        <span className="font-semibold">
          ReactJS, ExpressJS, Docker, and Kubernetes
        </span>
        . I am also familiar with{" "}
        <span className="font-semibold">AWS, and PostgreSQL</span>. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-semibold">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies and playing football. I also enjoy{" "}
        <span className="font-semibold">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-semibold">philosophy and psychology</span>.
      </p>
    </motion.section>
  );
}

export default About;
