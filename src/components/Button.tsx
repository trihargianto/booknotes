import React from "react";

import { cn } from "@/lib/utils";

type ButtonVariantTypes = "primary" | "secondary" | "tertiary";

export type ButtonPropTypes = {
  children: React.ReactNode;
  variant?: ButtonVariantTypes;
  isActive?: boolean;
  onClick?: () => void;
} & React.ComponentProps<"button">;

const Button = ({
  variant = "primary",
  onClick,
  children,
}: ButtonPropTypes) => {
  return (
    <button
      className={cn([
        variant === "primary"
          ? "text-ctp-base bg-ctp-blue border-ctp-blue border hover:bg-blue-300"
          : "text-ctp-text bg-ctp-surface1 border-ctp-surface2 border hover:bg-ctp-surface2",
        "rounded-full font-bold text-base p-4 shadow-lg inline-flex gap-1 items-center justify-center w-full",
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
