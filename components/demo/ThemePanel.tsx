"use client";

import { themePresetList } from "@/lib/design/theme-presets";
import type { ThemePresetId } from "@/lib/design/types";
import { DemoPanel, OptionList } from "./demo-ui";
import { useDesign } from "./DesignProvider";

type ThemePanelProps = {
  onClose: () => void;
  onSelect: () => void;
};

export function ThemePanel({ onClose, onSelect }: ThemePanelProps) {
  const { state, applyPreset } = useDesign();

  const selectPreset = (id: ThemePresetId) => {
    applyPreset(id, false);
    onSelect();
  };

  return (
    <DemoPanel title="Design Preset" onClose={onClose} width={300}>
      <OptionList
        label="Design Preset"
        hideLegend
        value={state.presetId}
        options={themePresetList.map((p) => ({ value: p.id, label: p.label }))}
        onChange={selectPreset}
      />
    </DemoPanel>
  );
}
