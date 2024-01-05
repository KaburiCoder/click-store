import React from "react";
import ButtonL from "./button-l";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils/shadcn.util";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../button";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  icon: IconType;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  iconSide?: "left" | "top";
}

export default function RIconButton({
  icon: Icon,
  children,
  className,
  iconClassName,
  textClassName,
  iconSide = "left",
  ...props
}: Props) {
  return (
    <ButtonL
      className={cn(
        "flex items-center",
        iconSide === "top" ? "flex-col gap-0.5" : "gap-1",
        className,
      )}
      variant={"white"}
      {...props}
    >
      <Icon className={cn("h-6 w-6", iconClassName)} />
      <span className={textClassName}>{children}</span>
    </ButtonL>
  );
}
