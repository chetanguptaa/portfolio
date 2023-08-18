"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="flex justify-center mb-3 sm:mb-8 last:mb-0">
      <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
        className="max-w-[38rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20"
      >
        <section className="bg-gray-100 relative sm:h-[20rem]">
          <div className="flex justify-center sm:flex-row"> 
            <div className="pt-4 pb-7 px-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold text-center"> 
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-center"> 
                {description}
              </p>
              <ul className="flex flex-wrap justify-center mt-8 gap-2 sm:mt-3">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}