"use client";

import ActiveSectionContextProvider from "@/context/active-section-context";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>;
};

export default Providers;
