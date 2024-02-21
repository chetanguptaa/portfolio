"use client";

import { calculateDate } from "@/lib/calculate";
import { Blog } from "@/lib/interface";
import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type Props = {
  data: Blog[];
};

const Blogs = ({ data }: Props) => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleShowMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };
  return (
    <div className="tablet:container sm:max-w-screen-xl max-w-screen-sm px-2 pt-8">
      {data.slice(0, visibleBlogs).map((blog, idx) => (
        <Link href={`/blogs/${blog.currentSlug}`} key={idx}>
          <div className="flex justify-between items-center transition duration-300 ease-in-out hover:scale-105 my-8">
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
          {idx !== visibleBlogs - 1 && <Separator className="my-4" />}
        </Link>
      ))}
      {data.length > visibleBlogs && (
        <div className="flex justify-center">
          <Button
            onClick={handleShowMore}
            variant="outline"
            className="text-blue-600 font-bold cursor-pointer"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
