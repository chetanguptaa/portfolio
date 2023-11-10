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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBlog = async () => {
      const response = await axios(`/api/blogs/${id}`);
      if (response.data) {
        setBlog(response.data);
        setLoading(false);
      } else
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
  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse text-2xl">Loading...</div>
    </div>
  ) : blog.id !== -1 ? (
    <div className="max-w-3xl container mt-4 md:mt-4 m-auto">
      <div className="bg-white p-4 md:p-8 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-2xl md:text-3xl mb-2">
            {blog.title.toUpperCase()}
          </div>
          <div className="flex items-center">
            <div className="text-sm flex mt-1 mr-2 mb-4">
              <p className="mt-1 text-sm flex">
                <AiOutlineRead className="mr-2 mt-1" />
                {Math.round(
                  Number(calculateReadingTime(blog.editorState).toFixed(1))
                )}{" "}
                min read
              </p>
              <p className="mt-[5px] inline-flex ml-4 md:ml-8 pl-4 text-sm text-rose-500">
                <AiOutlineStar className="mt-1 mr-2" />
                {calculateDate(blog.createdAt.toString())}
              </p>
            </div>
          </div>
          <div className="prose max-w-full">
            {ReactHtmlParser(blog?.editorState)}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl">Blog does not exist</div>
    </div>
  );
};

export default BlogPage;
