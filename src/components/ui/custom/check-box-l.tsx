import React from "react";
import { Checkbox } from "../checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends CheckboxProps, React.RefAttributes<HTMLButtonElement> {
  label: string;
  labelClassName?: string;
}

export default function CheckBoxL({
  className,
  label,
  labelClassName,
  ...props
}: Props) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox id={label} {...props} />
      <label
        htmlFor={label}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          labelClassName,
        )}
      >
        {label}
      </label>
    </div>
  );
}
