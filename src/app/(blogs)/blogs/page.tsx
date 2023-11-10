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
    <div className="container mx-auto p-16 md:p-16 lg:p-16 max-w-[960px]">
      {blogs.slice(0, displayCount).map((blog) => (
        <div
          className="flex flex-col bg-white border shadow-sm rounded-xl mb-4 max-w-2xl mx-auto"
          key={blog.id}
        >
          <div className="p-2 md:p-5">
            <h3 className="text-md font-bold text-gray-800 ">
              {blog.title.toUpperCase()}
            </h3>

            <button
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:text-blue-500 text-[#6495ED]"
              onClick={() => router.push(`blogs/${blog.id}`)}
            >
              Read
              <BsArrowRight />
            </button>
            <div className="mt-4 inline-flex md:ml-96 pl-4 gap-2 text-sm font-medium text-rose-500">
              <AiOutlineStar className="mt-0.5" />
              {calculateDate(blog.createdAt.toString())}
            </div>
          </div>
          <div className="bg-[#6495ED] rounded-b-lg py-1 px-4 md:py-1 md:px-5 ">
            <p className="mt-1 text-sm  flex">
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
          className="text-black hover:underline rounded-xl container mx-auto my-4 transition-transform transform hover:scale-105 duration-300"
          onClick={handleShowMoreClick}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default BlogsPage;
