import { ChildrenProps } from "@/lib/props/children.props";
import React from "react";

export default function ReceiptOrdersLayout({ children }: ChildrenProps) {
  return (
    <div className="h-full bg-slate-200 overflow-auto">
      <div className="m-auto h-full max-w-[24rem] bg-white p-4 pt-10">
        {children}
      </div>
      ;
    </div>
  );
}
