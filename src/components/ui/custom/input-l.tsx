import React from "react";
import { Input } from "../input";
import { Label } from "../label";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const InputL = React.forwardRef<HTMLInputElement, Props>(
  ({ id = "inputl", errorMessage, className, type, label, ...props }, ref) => {
    const errorStyles = cn(errorMessage && "text-rose-500");
    return (
      <div
        className={cn("grid w-full max-w-sm items-center gap-1.5", className)}
      >
        <Label htmlFor={id} className={cn("pl-1", errorStyles)}>
          {label}
        </Label>
        <div>
          <Input
            ref={ref}
            type={type}
            id={id}
            className={cn(errorStyles, errorMessage && "border-rose-500")}
            {...props}
          />
          {errorMessage && (
            <div className={cn("pl-1 text-sm", errorStyles)}>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    );
  },
);

InputL.displayName = "InputL";

export { InputL };
