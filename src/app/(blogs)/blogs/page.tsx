"use client";

import { Blog } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineRead, AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { calculateDate, calculateReadingTime } from "@/lib/calculate";
import { useRouter } from "next/navigation";

const BlogsPage = () => {
  const router = useRouter();
  const [displayCount, setDisplayCount] = useState(3);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 3);
  };
  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios("/api/blogs");
      setBlogs(response.data);
      return response;
    };
    getBlogs();
  }, []);
  return (
    <div className="container mx-auto p-16">
      {blogs.slice(0, displayCount).map((blog) => (
        <div
          className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] mb-4 max-w-2xl mx-auto"
          key={blog.id}
        >
          <div className="p-2 md:p-5">
            <h3 className="text-md font-bold text-gray-800 dark:text-white">
              {blog.title.toUpperCase()}
            </h3>

            <button
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:text-blue-500 text-[#6495ED]"
              onClick={() => router.push(`blogs/${blog.id}`)}
            >
              Read
              <BsArrowRight />
            </button>
            <div className="mt-4 inline-flex ml-96 pl-4 gap-2 text-sm font-medium text-rose-500">
              <AiOutlineStar className="mt-0.5" />
              {calculateDate(blog.createdAt.toString())}
            </div>
          </div>
          <div className="bg-[#6495ED] rounded-b-lg py-1 px-4 md:py-1 md:px-5 dark:bg-gray-800 dark:border-gray-700">
            <p className="mt-1 text-sm  dark:text-gray-500 flex">
              {Math.round(
                Number(calculateReadingTime(blog.editorState).toFixed(1))
              )}{" "}
              min read <AiOutlineRead className="ml-2 mt-1" />
            </p>
          </div>
        </div>
      ))}
      {displayCount < blogs.length && (
        <button
          className="m-4 px-4 py-2 text-black  hover:bg-[#6495ED] flex flex-col  rounded-xl max-w-md ml-28 mb-4"
          onClick={handleShowMoreClick}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default BlogsPage;

/**
 * <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
        {blogs.map((blog) => (
          <li key={blog.id} className="flex flex-col">
            <h1>{blog.title}</h1>
            {ReactHtmlParser(blog.editorState)}
          </li>
        ))}
      </ul>
 */

/**
 * <>
      {blogs.map((blog) => (
        <div
          className=" max-w-sm p-3 rounded-lg dark:bg-gray-800 dark:border-gray-700 m-auto justify-center"
          key={blog.id}
        >
          <div className="flex">
            <div>{calculateDate(blog.createdAt.toString())}</div>
            <a href="/">
              <h5 className="mb-2 text-xl font-light tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
            </a>
            <div>
              {Math.round(
                Number(calculateReadingTime(blog.editorState).toFixed(1))
              )}{" "}
              min read
            </div>
          </div>
        </div>
      ))}
    </>
 */
