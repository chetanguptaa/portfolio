"use client";

import { Blog } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import { calculateDate, calculateReadingTime } from "@/lib/calculate";
import { AiOutlineRead, AiOutlineStar } from "react-icons/ai";

const BlogPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [blog, setBlog] = useState<Blog>({
    id: parseInt(id, 10),
    editorState: "loading",
    createdAt: new Date(),
    title: "loading",
  });
  useEffect(() => {
    const getBlog = async () => {
      const response = await axios(`/api/blogs/${id}`);
      if (response.data) setBlog(response.data);
      else
        setBlog({
          id: -1,
          editorState: "Does not exist",
          createdAt: new Date(),
          title: "",
        });
      return response;
    };
    getBlog();
  }, [id]);
  return blog.id !== -1 ? (
    <div className=" max-w-3xl container mx-auto my-auto mt-24">
      <div className="bg-white p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {blog.title.toUpperCase()}
          </div>
          <div className="flex items-center">
            <div className="text-sm flex mt-1 mr-2 mb-4">
              <p className="mt-1 text-sm dark:text-gray-500 flex">
                <AiOutlineRead className="mr-2 mt-1" />
                {Math.round(
                  Number(calculateReadingTime(blog.editorState).toFixed(1))
                )}{" "}
                min read
              </p>
              <p className="mt-[5px] inline-flex ml-[30rem] pl-4 text-sm text-rose-500">
                <AiOutlineStar className="mt-1 mr-2" />
                {calculateDate(blog.createdAt.toString())}
              </p>
            </div>
          </div>
          <>{ReactHtmlParser(blog?.editorState)}</>
        </div>
      </div>
    </div>
  ) : (
    <div>Blog does not exist</div>
  );
};

export default BlogPage;
