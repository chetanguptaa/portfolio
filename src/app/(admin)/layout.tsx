import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";
import { Metadata } from "next";
import AdminProvider from "@/components/providers/adminProviders";

export const metadata: Metadata = {
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
        <AdminProvider>{children}</AdminProvider>
      </body>
    </html>
  );
}
