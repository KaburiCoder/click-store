"use client";
import { cn } from "@/lib/utils/shadcn.util";
import { useAdminSearchBarStore } from "@/store/admin-search-bar.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

interface LinkItemProps {
  link: ISideLink;
  onClose?: () => void;
}

export interface ISideLink {
  Icon: IconType;
  path: string;
  name: string;
}

export default function SideLinkItem({ link, onClose }: LinkItemProps) {
  // admin link부분에서 페이지 이동 시 이미 조회된 이력이 있으면 clear되지 않아서 추가
  const { clear: clearSearchData } = useAdminSearchBarStore();
  const pathname = usePathname();

  function handleLinkClick(): void {
    onClose?.();
    clearSearchData();
  }

  return (
    <Link
      onClick={handleLinkClick}
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
