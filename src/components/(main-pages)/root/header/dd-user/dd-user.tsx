"use client";
import Link from "next/link";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { paths } from "@/paths";
import LinkButton from "./link-button";
import { MdManageAccounts } from "react-icons/md";
import { BiBasket } from "react-icons/bi";
import { logoutAction } from "@/db/actions/auth";
import useSvrCookie from "@/lib/hooks/use-svr-cookie";
import ButtonL from "@/components/ui/custom/button-l";
import { LogOut } from "lucide-react";
interface Props {
  onLinkClick: () => void;
}

export default function DdUser({ onLinkClick }: Props) {
  const { user } = useSvrCookie();

  return (
    <div className="h-full">
      <div className="flex justify-between bg-blue-600 px-5 py-2.5 text-slate-50">
        <div className="flex flex-col justify-center">
          <div className="mb-1 flex items-center text-xl">
            <div>{user?.name}</div>
            <Link href={paths.profile()} className="ml-2">
              <IoSettingsOutline />
            </Link>
          </div>
          <div className="text-sm">{user?.ykiho}</div>
          <div className="text-sm">{user?.saupkiho}</div>
        </div>
        <div>
          <form className="h-full" action={logoutAction}>
            <ButtonL
              icon={LogOut}
              className="h-full p-4 font-bold"
              variant={"white"}
              iconSide="top"
            >
              로그아웃
            </ButtonL>
          </form>
        </div>
      </div>
      <ul className="p-2.5">
        {user?.admin && (
          <LinkButton
            href="/admin/orders"
            text="관리자 페이지"
            icon={MdManageAccounts}
            admin
            onLinkClick={onLinkClick}
          />
        )}
        <LinkButton
          href="/orders"
          text="주문 내역 보기"
          icon={BiBasket}
          onLinkClick={onLinkClick}
        />
      </ul>
    </div>
  );
}
