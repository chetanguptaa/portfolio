// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function BlogsProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
