"use client";

import type { ReactNode } from "react";
import { DesignProvider } from "./DesignProvider";
import { DemoToolbar } from "./DemoToolbar";

export function DemoShell({ children }: { children: ReactNode }) {
  return (
    <DesignProvider>
      {children}
      <DemoToolbar />
    </DesignProvider>
  );
}
