import Link from "next/link";
import React from "react";
import GithubIcon from "./github-icon";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:max-w-screen-xl items-center max-w-screen-sm">
        <div className="flex justify-start gap-8 sm:gap-12 md:gap-20 lg:gap-24">
          <Link
            className="items-center space-x-2 text-blue-600 font-bold"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" items-center space-x-2 text-blue-600 font-bold"
            href="/blogs"
          >
            Blogs
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/chetanguptaa"
            >
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 w-9 px-0">
                <GithubIcon />
              </div>
            </Link>
            <Link
              className={`hidden sm:block px-4 py-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-500 text-white focus:ring-2 text-xl font-light focus:ring-blue-400 hover:shadow-xl transition duration-200`}
              href="/subscribe"
            >
              Subscribe
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
