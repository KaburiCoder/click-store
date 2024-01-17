import React from "react";
import { ChildrenProps } from "@/lib/props/children.props";

export default function CartViewMain({ children }: ChildrenProps) {
  return <div className="flex flex-col items-center px-4">{children}</div>;
}
