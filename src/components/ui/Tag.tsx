import type { Key, ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  key?: Key;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="text-[11px] text-navy-mid border border-navy-pale px-2.5 py-1 rounded-full bg-white">
      {children}
    </span>
  );
}
