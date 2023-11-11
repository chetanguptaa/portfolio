import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});
import "../globals.css";
import { Metadata } from "next";
import { BlogsProvider } from "@/components/providers/blogsProvider";

export const metadata: Metadata = {
  title: "Chetan Gupta | Blogs",
  description: "My Blogs",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${montserrat.className} text-gray-950 relative `}>
        <BlogsProvider>{children}</BlogsProvider>
      </body>
    </html>
  );
}
