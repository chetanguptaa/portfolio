import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Recents from "@/components/Recents";
import { calculateReadingTime, totalWords } from "@/lib/calculate";
import { Blog } from "@/lib/interface";
import { client } from "@/lib/sanity";
import NoBlogs from "@/components/blogs/no-blogs";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc)[0..2] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    content,
    publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: Blog[] = await getData();
  for (let i = 0; i < data.length; i++) {
    data[i].readingTime = calculateReadingTime(totalWords(data[i].content));
  }
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      {data.length === 0 ? <NoBlogs /> : <Recents data={data} />}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
