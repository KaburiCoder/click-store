import React from "react";
import { Checkbox } from "../checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends CheckboxProps, React.RefAttributes<HTMLButtonElement> {
  label: string;
  labelClassName?: string;
  labelLocation?: "left" | "bottom";
}

export default function CheckBoxL({
  className,
  label,
  labelClassName,
  labelLocation,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center",
        labelLocation === "bottom"
          ? "flex-col justify-center space-y-0.5"
          : "space-x-2",
        className,
      )}
    >
      <Checkbox id={label} {...props} />
      <label
        htmlFor={label}
        className={cn(
          "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          labelLocation === "bottom" ? "" : "mb-0.5",
          labelClassName,
        )}
      >
        {label}
      </label>
    </div>
  );
}
