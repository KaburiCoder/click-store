import { cn } from "@/lib/utils/shadcn.util";
import React from "react";
import { Label } from "../label";

interface Props {
  label: string;
  labelClassName?: string;
  htmlFor?: string;
  className?: string;
  errorMessage?: string;
  children?: React.ReactNode;
  wrapperClassName?: string;
}

export default function LabelWrapper({
  label,
  labelClassName,
  children,
  htmlFor,
  errorMessage,
  className,
  wrapperClassName,
}: Props) {
  const errorStyles = cn(errorMessage && "text-rose-500");
  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label
        htmlFor={htmlFor}
        className={cn("pl-1", errorStyles, labelClassName)}
      >
        {label}
      </Label>
      <div className={cn(wrapperClassName)}>
        {children}
        {errorMessage && (
          <div className={cn("pl-1 text-sm", errorStyles)}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
}
