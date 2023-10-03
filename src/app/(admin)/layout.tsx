"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";
import { SessionProvider } from "next-auth/react";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Admin",
  description: "Admin Page",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <SessionProvider>
          <Provider>{children}</Provider>
          <Toaster position="top-right" />
        </SessionProvider>
      </body>
    </html>
  );
}
