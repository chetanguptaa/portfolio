import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});
import "../globals.css";

export const metadata = {
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
      <body
        className={`${montserrat.className} text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {children}
      </body>
    </html>
  );
}
