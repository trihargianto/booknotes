import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  isActive?: boolean;
  onClick?: () => void;
  children: ReactNode | string;
}

export default function Tag({ isActive, onClick, children }: Props) {
  return (
    <div
      className={cn(
        "inline-flex py-2 px-4 rounded-full text-base",
        typeof onClick === "function" ? "cursor-pointer" : "cursor-default",
        isActive
          ? "bg-ctp-surface1 text-ctp-text border border-ctp-surface2"
          : "bg-gray-300 text-gray-900 border border-gray-400",
      )}
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
