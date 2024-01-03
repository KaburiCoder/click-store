"use client";
import React from "react";
import GroupList from "./group-list";
import Image from "next/image";
import { pacifico } from "@/fonts/fonts";
import { cn } from "@/lib/utils/shadcn.util";
import { SideButtonItem } from "@/components/(shared)/side/side-button-item";
import { RiLogoutBoxLine } from "react-icons/ri";
import { logoutAction } from "@/db/actions/auth";

export default function AdminSide({ onClose }: DrawerChildProps) {
  return (
    <div className="flex h-full w-full min-w-[16rem] flex-col justify-between bg-white">
      <div className="px-4 pt-4">
        <div className="mb-4 flex  items-center">
          <Image
            className="mr-2 h-10 w-10"
            src={"/images/click_icon.png"}
            alt="클릭아이콘"
            width={100}
            height={100}
          />
          <h2 className={cn(pacifico.className, "text-2xl")}>Admin Page</h2>
        </div>
        <GroupList onClose={onClose} />
      </div>
      <div className="mb-4 px-4">
        <form action={logoutAction}>
          <SideButtonItem
            variant="destructive"
            Icon={RiLogoutBoxLine}
            text="로그아웃"
          />
        </form>
      </div>
    </div>
  );
}
