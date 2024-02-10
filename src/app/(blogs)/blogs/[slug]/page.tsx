import { PortableText } from "@portabletext/react";
import { Blog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import {
  calculateDate,
  calculateReadingTime,
  totalWords,
} from "@/lib/calculate";
import { AiOutlineRead, AiOutlineStar } from "react-icons/ai";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
          releaseDate
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const data: Blog = await getData(params.slug);
  const readingTime = calculateReadingTime(totalWords(data.content));
  data.readingTime = readingTime;
  return (
    <>
      <div
        className={`container max-w-6xl m-auto text-2xl font-medium text-black bg-white`}
      >
        <div className="md:text-justify p-4 md:p-8 flex flex-col justify-center">
          <div className="text-black font-bold text-2xl md:text-3xl mb-2 text-center underline">
            {data.title}
          </div>
          <div className="text-sm flex justify-between mb-12">
            <p className="text-sm flex">
              <AiOutlineRead className="mr-2 mt-1" />
              {Math.round(Number(data.readingTime.toFixed(1)))} min read
            </p>
            <p className="flex text-sm text-rose-500">
              <AiOutlineStar className="mr-2 float-right mt-1" />
              {calculateDate(data.releaseDate)}
            </p>
          </div>
          <Image
            src={urlFor(data.titleImage).url()}
            width={1200}
            height={1200}
            alt="Title Image"
            priority
            className="rounded-lg mt-8 border"
          />

          <div className="prose max-w-full text-base font-medium mt-8">
            <PortableText value={data.content} />
          </div>
        </div>
      </div>
    </>
  );
}
