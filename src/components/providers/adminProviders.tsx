"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const AdminProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster position="top-right" />
    </SessionProvider>
  );
};

export default AdminProvider;

/**
 * <SessionProvider>
          <AdminProvider>{children}</AdminProvider>
          <Toaster position="top-right" />
        </SessionProvider>
 */

/**
         * const Provider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
         */
