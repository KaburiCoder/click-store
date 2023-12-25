import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

interface Props {
  errorMessage?: string;
  className?: string;
}

export default function ErrorText({ errorMessage, className }: Props) {
  if (!errorMessage) return <></>;
  return (
    <div
      className={cn(
        "rounded border border-solid border-rose-400 bg-red-50 p-1 text-sm text-rose-500",
        className,
      )}
    >
      {errorMessage}
    </div>
  );
}
