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
import { DotIcon } from "lucide-react";

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
      <div className={"container px-8 py-16 md:p-16 lg:p-16 max-w-6xl m-auto"}>
        <div className="md:text-justify p-4 md:px-8 flex flex-col justify-between">
          <div className="text-xs space-x-1 mb-2 font-[800] text-gray-900 text-center">
            <span>{calculateDate(data.publishedAt)} •</span>
            <span>
              {Math.round(Number(data.readingTime.toFixed(1)))} MIN READ •
            </span>
            <span className="text-blue-500 font-bold">CHETAN GUPTA</span>
          </div>
          <div className="text-gray-800 font-[800] text-6xl  mb-2 text-center">
            {data.title}
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
