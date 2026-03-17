import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-[10px] tracking-[0.18em] text-navy-light uppercase border-l-2 border-navy pl-2.5 mb-9 block">
      {children}
    </span>
  );
}
