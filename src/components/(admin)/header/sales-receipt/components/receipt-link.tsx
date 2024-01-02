import { ChildrenProps } from "@/lib/props/children.props";
import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

interface Props extends ChildrenProps {
  className?: string;
  url: string;
}

export default function ReceiptLink({ className, url, children }: Props) {
  return (
    <a
      className={cn(
        "mt-2 rounded bg-blue-500 p-2 text-center text-sm text-white",
        className,
      )}
      href={url}
      target="_blank"
    >
      {children}
    </a>
  );
}
