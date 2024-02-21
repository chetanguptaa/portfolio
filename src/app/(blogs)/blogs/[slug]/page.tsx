import { PortableText } from "@portabletext/react";
import { Blog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import {
  calculateDate,
  calculateReadingTime,
  totalWords,
} from "@/lib/calculate";
import { getImageDimensions } from "@sanity/asset-utils";
import DoesNotExist from "./does-not-exist";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CodeComponent } from "./code-component";
import chetan from "../../../../../public/chetan.jpg";

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
          author,
          smallDescription,
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
      <div className={"container max-w-6xl mt-16 mx-auto"}>
        <div className="flex flex-col justify-between">
          <div className="text-xs space-x-1 mb-2 font-[800] text-gray-900 text-center">
            <span>{calculateDate(data.publishedAt)} |</span>
            <span>
              {Math.round(Number(data.readingTime.toFixed(1)))} MIN READ |
            </span>
            <span className="text-blue-500 font-bold">CHETAN GUPTA </span>
          </div>
          <div className="text-gray-800 font-[800] sm:text-6xl text-4xl  mb-2 text-center break-all">
            {data.title}
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={urlFor(data.mainImage).url()}
              width={1400}
              height={1400}
              alt="Title Image"
              priority
              className="rounded-lg mt-8 border"
            />
          </div>
          <div className="prose sm:container sm:max-w-3xl max-w-full text-base font-semibold mt-16">
            <p>
              This is a weekly newsletter written by{" "}
              <Link href="/" className="text-blue-700 font-semibold">
                Chetan Gupta
              </Link>
              .
            </p>
            <p>{data.smallDescription}</p>
            <Separator className="my-16 bg-gray-700" />
            <PortableText
              value={data.content}
              components={{
                types: {
                  image: ImageComponent,
                  code: CodeComponent,
                },
              }}
            />
            <div className="flex justify-center items-center flex-col gap-1 my-8">
              <span className=" font-black text-2xl">Published by:</span>
              <Image
                src={chetan}
                alt="Chetan Gupta"
                width="48"
                height="48"
                quality="95"
                priority={true}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
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
