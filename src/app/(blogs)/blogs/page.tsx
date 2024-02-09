import { calculateReadingTime } from "@/lib/calculate";
import { BlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineRead, AiOutlineStar } from "react-icons/ai";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    content,
    releaseDate
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogsPage() {
  const data: any = await getData();
  console.log(data);
  return (
    <div className="container mx-auto px-8 py-16 md:p-16 lg:p-16 max-w-[1020px]">
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
              {/* {calculateDate(blog.createdAt.toString())} */}
              12:03
            </div>
          </div>
          <div className="bg-[#6495ED] rounded-b-lg py-1 px-4 md:py-1 md:px-5 ">
            <p className="mt-1 text-sm  flex">
              {/* {Math.round(
                Number(calculateReadingTime(blog.content).toFixed(1))
              )}{" "} */}{34}{" "}
              min read <AiOutlineRead className="ml-2 mt-1" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
