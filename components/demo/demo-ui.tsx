"use client";

import { useEffect, useId, useState, type ReactNode, type RefObject } from "react";

export function DemoPanel({
  title,
  children,
  footer,
  width = 300,
  onClose,
}: {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  width?: number;
  onClose?: () => void;
}) {
  return (
    <div
      className="demo-panel"
      role="dialog"
      aria-label={title}
      style={{ width: `min(${width}px, calc(100vw - 2rem))` }}
    >
      <div className="demo-panel-head">
        <h3 className="demo-panel-heading">{title}</h3>
        {onClose && (
          <button
            type="button"
            className="demo-panel-dismiss"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
      <div className="demo-panel-body">{children}</div>
      {footer && <div className="demo-panel-foot">{footer}</div>}
    </div>
  );
}

export function ContextSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  const id = useId();
  return (
    <div className="demo-context-field">
      <label className="demo-context-label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="demo-context-select"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`demo-accordion${open ? " demo-accordion--open" : ""}`}>
      <button
        type="button"
        className="demo-accordion-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span className="demo-accordion-chevron" aria-hidden="true" />
      </button>
      {open && (
        <div id={panelId} className="demo-accordion-panel">
          {children}
        </div>
      )}
    </div>
  );
}

export function OptionList<T extends string>({
  label,
  value,
  options,
  onChange,
  hideLegend = false,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  hideLegend?: boolean;
}) {
  return (
    <fieldset className="demo-option-list">
      {!hideLegend && <legend className="demo-context-label">{label}</legend>}
      <ul className="demo-option-list-items">
        {options.map((opt) => (
          <li key={opt.value}>
            <button
              type="button"
              className={`demo-option-item${value === opt.value ? " demo-option-item--selected" : ""}`}
              onClick={() => onChange(opt.value)}
              aria-pressed={value === opt.value}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

/** Close panel when clicking outside the toolbar. */
export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  onClose: () => void,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose, enabled]);
}
