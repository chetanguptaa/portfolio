"use client";

import { calculateDate } from "@/lib/calculate";
import { Blog } from "@/lib/interface";
import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/ui/separator";

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

type Props = {
  data: Blog[];
};

const Recents = ({ data }: Props) => {
  const { ref } = useSectionInView("Recents");
  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] leading-8 scroll-mt-28 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="blogs"
    >
      <SectionHeading>Recent Posts</SectionHeading>
      {data.map((blog, idx) => (
        <motion.div
          key={idx}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mt-8"
        >
          <Link href={`/blogs/${blog.currentSlug}`}>
            <div className="flex justify-between items-center transition duration-300 ease-in-out hover:scale-105 sm:my-8 my-4">
              <div className="flex gap-2 sm:gap-4 justify-start items-center">
                <h3 className="text-sm font-extrabold text-blue-600 whitespace-nowrap">
                  {calculateDate(blog.publishedAt).substring(0, 6)}
                </h3>
                <h3 className="text-sm font-extrabold text-gray-800 truncate mobile:max-w-[200px] tablet:max-w-[325px] sm:max-w-[375px] md:max-w-[450px] laptops:max-w-fit max-w-[150px]">
                  {blog.title.toUpperCase()}
                </h3>
              </div>
              <div className="flex justify-end sm:gap-4 gap-1 items-center">
                <p className="text-sm font-extrabold text-gray-500 whitespace-nowrap">
                  {Math.round(Number(blog.readingTime!.toFixed(1)))} min read{" "}
                </p>
                <p className="whitespace-nowrap text-sm font-extrabold text-gray-500 hover:scale-105">
                  <BsArrowRight className="hover:scale-125 transition duration-300 ease-in-out" />
                </p>
              </div>
            </div>
            {idx !== data.length - 1 && <Separator className="my-4" />}
          </Link>
        </motion.div>
      ))}
      <h6 className="text-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-125 underline underline-offset-2 justify-center mt-8">
        <Link href="/blogs">Check out my other blogs</Link>
      </h6>
    </motion.section>
  );
};

export default Recents;
