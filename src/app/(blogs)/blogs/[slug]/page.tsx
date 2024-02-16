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
import { getImageDimensions } from "@sanity/asset-utils";
import DoesNotExist from "./does-not-exist";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          mainImage,
          categories,
          publishedAt,
          author
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
  if (data === null) return <DoesNotExist />;
  const readingTime = calculateReadingTime(totalWords(data.content));
  data.readingTime = readingTime;
  return (
    <>
      <div
        className={`container max-w-6xl m-auto text-2xl font-medium text-black bg-white`}
      >
        <div className="md:text-justify p-4 md:p-8 flex flex-col justify-between">
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
              {calculateDate(data.publishedAt)}
            </p>
          </div>
          <Image
            src={urlFor(data.mainImage).url()}
            width={400}
            height={400}
            alt="Title Image"
            priority
            className="rounded-lg mt-8 border"
          />

          <div className="prose max-w-full text-base font-medium mt-8">
            <PortableText
              value={data.content}
              components={{
                types: {
                  image: ImageComponent,
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const ImageComponent = ({ value }: { value: any }) => {
  const { width, height } = getImageDimensions(urlFor(value).url());
  return (
    <Image
      src={urlFor(value).width(800).fit("max").auto("format").url()}
      alt={value.alt || " "}
      width={width}
      height={height}
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
};
