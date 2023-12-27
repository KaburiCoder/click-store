"use client";
import { buttonVariants } from "@/components/ui/button";
import ButtonL from "@/components/ui/custom/button-l";
import { cn } from "@/lib/utils/shadcn.util";
import { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";
import { IconType } from "react-icons";

interface ButtonItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  Icon: IconType;
  text: string;
}

export function SideButtonItem({
  Icon,
  text,
  className,
  variant = "ghost",
  ...props
}: ButtonItemProps) {
  return (
    <ButtonL
      variant={variant}
      className={cn(
        "relative flex w-full items-center rounded p-2 text-base",
        className,
      )}
      {...props}
    >
      <Icon className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform" />
      {text}
    </ButtonL>
  );
}
