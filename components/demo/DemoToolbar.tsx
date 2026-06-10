"use client";

import { useCallback, useRef, useState } from "react";
import { isDemoToolbarEnabled } from "@/lib/design/demo-env";
import { useDesign } from "./DesignProvider";
import { CustomizePanel } from "./CustomizePanel";
import { useClickOutside } from "./demo-ui";
import { ThemePanel } from "./ThemePanel";

type OpenPanel = "theme" | "customize" | null;

export function DemoToolbar() {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const { resetToConfigDefault } = useDesign();
  const toolbarRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpenPanel(null), []);

  useClickOutside(toolbarRef, close, openPanel !== null);

  if (!isDemoToolbarEnabled()) {
    return null;
  }

  const open = (panel: OpenPanel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <div ref={toolbarRef} className="demo-toolbar">
      {openPanel && (
        <div className="demo-toolbar-panel-slot">
          {openPanel === "theme" && (
            <ThemePanel onClose={close} onSelect={close} />
          )}
          {openPanel === "customize" && (
            <CustomizePanel
              onClose={close}
              onReset={() => {
                resetToConfigDefault();
                close();
              }}
            />
          )}
        </div>
      )}

      <div className="demo-toolbar-buttons">
        <button
          type="button"
          className={`demo-toolbar-btn${openPanel === "theme" ? " demo-toolbar-btn--active" : ""}`}
          onClick={() => open("theme")}
          aria-expanded={openPanel === "theme"}
        >
          Theme
        </button>
        <button
          type="button"
          className={`demo-toolbar-btn${openPanel === "customize" ? " demo-toolbar-btn--active" : ""}`}
          onClick={() => open("customize")}
          aria-expanded={openPanel === "customize"}
        >
          Customize
        </button>
      </div>
    </div>
  );
}
