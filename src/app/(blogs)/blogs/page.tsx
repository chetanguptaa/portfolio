import {
  calculateDate,
  calculateReadingTime,
  totalWords,
} from "@/lib/calculate";
import { Blog } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineRead, AiOutlineStar } from "react-icons/ai";
import NoBlogs from "./no-blogs";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    content,
    publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogsPage() {
  const data: Blog[] = await getData();
  for (let i = 0; i < data.length; i++) {
    data[i].readingTime = calculateReadingTime(totalWords(data[i].content));
  }
  return (
    <>
      {data.length === 0 ? (
        <NoBlogs />
      ) : (
        <div className="container px-8 py-16 md:p-16 lg:p-16 m-auto sm:max-w-screen-xl items-center max-w-screen-sm">
          {data.map((blog, idx) => (
            <div
              className="flex flex-col bg-white border shadow-sm rounded-xl mb-4 max-w-2xl mx-auto"
              key={idx}
            >
              <div className="p-2 md:p-5">
                <h3 className="text-md font-bold text-gray-800">
                  {blog.title.toUpperCase()}
                </h3>
                <Link
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:text-blue-500 text-[#6495ED]"
                  href={`/blogs/${blog.currentSlug}`}
                >
                  Read
                  <BsArrowRight />
                </Link>
                <div className="mt-3 inline-flex gap-2 text-sm font-medium text-rose-500 float-right">
                  <AiOutlineStar className="pt-1" />
                  {calculateDate(blog.publishedAt)}
                </div>
              </div>
              <div className="bg-[#6495ED] rounded-b-lg py-1 px-4 md:py-1 md:px-5 ">
                <p className="mt-1 text-sm  flex">
                  {Math.round(Number(blog.readingTime!.toFixed(1)))} min read{" "}
                  <AiOutlineRead className="ml-2 mt-1" />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
