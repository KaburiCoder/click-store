"use client";
import { cn } from "@/lib/utils/shadcn.util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

interface LinkItemProps {
  link: ISideLink;
}

export interface ISideLink {
  Icon: IconType;
  path: string;
  name: string;
}

export default function SideLinkItem({ link }: LinkItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={link.path}
      className={cn(
        "flex w-full items-center rounded p-2",
        "hover:bg-gray-300",
        link.path === pathname ? "bg-gray-200" : undefined,
      )}
    >
      <link.Icon className="mr-2 h-5 w-5" />
      <div className="text-base">{link.name}</div>
    </Link>
  );
}
