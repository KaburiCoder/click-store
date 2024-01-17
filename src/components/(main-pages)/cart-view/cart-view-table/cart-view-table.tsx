import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function CartViewTable({ children, className }: Props) {
  return (
    <table
      className={cn("m-5 w-full border-collapse", className)}
    >
      <caption className="pb-5 text-2xl text-black">장바구니 목록</caption>
      <colgroup>
        <col width={50} />
        <col span={2} width="*" />
        <col width={100} />
      </colgroup>

      {children}
    </table>
  );
}
