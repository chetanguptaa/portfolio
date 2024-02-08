import { projectsData } from "@/lib/data";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  liveUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col sm:items-center items-start sm:p-8 p-2 w-11/12 md:w-auto snap-center sm:snap-none hover:bg-blue-100 max-w-[42rem] border border-black/5 mb-4 mx-auto">
      {/* <video
        muted
        controls
        title="Video of project"
        loop
        preload="metadata"
        className="object-cover rounded-lg h-64 md:h-96 hidden sm:block"
        src=""
      /> */}
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        priority
        className="hidden sm:block rounded-t-lg shadow-2xl transition hover:scale-[1.04] hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2"
      />
      <div className="text-left items-start pt-1 sm:pt-3 w-full">
        <div className="flex justify-between">
          <p className="mb-2 font-bold underline underline-offset-4">{title}</p>
          <div className="flex justify-between space-x-4 items-center">
            <Link
              className="text-gray-900 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
              href={github}
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              className="text-gray-900 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
              href={liveUrl}
              target="_blank"
            >
              <ExternalLink />
            </Link>
          </div>
        </div>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="pt-2 md:w-96 lg:w-[450px] font-semibold">{description}</p>
      </div>
    </div>
  );
}

/*
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);



<motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-blue-50 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-blue-100 transition sm:group-even:pl-8  ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 font-semibold">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          priority
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3
          group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
*/
