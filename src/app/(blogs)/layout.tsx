import "../globals.css";
import { Metadata } from "next";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"], weight: "300" });

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
      <body className={`${mulish.className} text-gray-950 relative `}>
        {children}
      </body>
    </html>
  );
}
