import { calculateReadingTime, totalWords } from "@/lib/calculate";
import { Blog } from "@/lib/interface";
import { client } from "@/lib/sanity";
import NoBlogs from "@/components/blogs/no-blogs";
import Blogs from "./blogs";

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
  return <>{data.length === 0 ? <NoBlogs /> : <Blogs data={data} />}</>;
}
