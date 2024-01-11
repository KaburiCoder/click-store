import React from "react";
import { cn } from "@/lib/utils/shadcn.util";

export default function MTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "mx-5 border-b border-solid border-blue-400 p-2.5 text-center text-blue-600",
        className,
      )}
    >
      {title}
    </h3>
  );
}
