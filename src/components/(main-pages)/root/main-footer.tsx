"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/shadcn.util";

export default function MainFooter() {
  const pathname = usePathname();
  const isCartViewPage = pathname === "/cart-view";

  return (
    <footer className={cn("relative bottom-0 w-full text-left text-black")}>
      <div className="mx-auto border-t-[1px] border-solid border-blue-200 p-5">
        <div className="flex w-full flex-col text-center text-xs text-gray-500">
          <strong className="pb-1.5 text-base font-bold text-black">
            클릭소프트주식회사
          </strong>
          <div>
            <div>
              사업자등록번호 402-81-45901
              <Vertical />
              통신판매업신고번호 제 2023-전주덕진-0219호
            </div>
            <div>
              대표이사 염종배
              <Vertical />
              전북 전주시 덕진구 기린대로 477 cs빌딩 501호 클릭소프트(주)
            </div>
            <div>
              Tel.063-251-0510
              <Vertical />
              Fax. 063-251-0519
            </div>
          </div>
          <strong className="text-xs font-bold text-black">
            Copyrightⓒ 2020 by clicksoft.co.All right reserved.
          </strong>
        </div>
      </div>
    </footer>
  );
}

function Vertical() {
  return <span className="mx-2.5 inline-block h-2.5 w-[1px] bg-gray-500" />;
}
