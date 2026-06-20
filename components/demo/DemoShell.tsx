"use client";

import type { ReactNode } from "react";
import type { PreviewMode } from "@/hotel.config";
import { DesignProvider } from "./DesignProvider";
import { DemoToolbar } from "./DemoToolbar";

type DemoShellProps = {
  children: ReactNode;
  previewMode: PreviewMode;
};

export function DemoShell({ children, previewMode }: DemoShellProps) {
  const showToolbar = previewMode === "demo";

  return (
    <DesignProvider>
      {children}
      {showToolbar ? <DemoToolbar /> : null}
    </DesignProvider>
  );
}
