"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [startIndex, setStartIndex] = useState(0);
  const numToShow = 4;

  const showNextSkills = () => {
    setStartIndex((prevIndex) => (prevIndex + numToShow) % skillsData.length);
  };

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="mb-12 max-w-[53rem] scroll-mt-28 text-center"
      >
        <SectionHeading>My skills</SectionHeading>
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="grid sm:grid-cols-4 grid-cols-2 justify-center gap-4 text-lg text-gray-800">
            {skillsData
              .slice(startIndex, startIndex + numToShow)
              .map((skill, index) => (
                <motion.div
                  className="bg-blue-100 border-blue-400 border hover:bg-blue-200 hover:shadow-lg rounded-xl px-5 py-3 font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1"
                  key={startIndex + index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={startIndex + index}
                >
                  {skill}
                </motion.div>
              ))}
          </div>
          <motion.button
            onClick={showNextSkills}
            className="bg-green-100 border-green-400 border hover:bg-green-200 hover:shadow-lg rounded-xl px-5 py-3 font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            More
          </motion.button>
        </div>
      </section>
    </>
  );
}
