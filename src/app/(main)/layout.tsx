import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import MainProviders from "@/components/providers/mainProviders";

const roboto = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Chetan Gupta",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} bg-blue-50 text-gray-950 relative  sm:pt-36`}
      >
        <div className="bg-blue-50 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-blue-50 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <MainProviders>
          <Header />
          {children}
          <Toaster position="top-right" />
        </MainProviders>
      </body>
    </html>
  );
}
