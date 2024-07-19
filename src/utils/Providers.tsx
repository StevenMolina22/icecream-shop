"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
}
