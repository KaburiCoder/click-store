import { ChildrenProps } from "@/lib/props/children.props";
import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

interface Props extends ChildrenProps {
  html: string | TrustedHTML | undefined;
  className?: string;
}
export default function QuillHtmlReader({ html, className }: Props) {
  if (!html) return <></>;
  return (
    <div className="ql-snow">
      <div className={cn("ql-editor", className)}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
