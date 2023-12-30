import React from "react";
import Image from "next/image";
import LeftWrapper from "./left-wrapper";
import RightWrapper from "./right-wrapper";
import MainMenuNav from "./main-menu-nav";
import Link from "next/link";
import { imgPaths } from "@/paths";

export default function MainHeader() {
  return (
    <header>
      <div className="h-header relative flex justify-between overflow-hidden border-b-[1px] border-solid border-gray-300">
        <LeftWrapper />
        <Link href={"/"}>
          <Image
            className="h-header absolute left-1/2 top-1/2 w-auto -translate-x-1/2 -translate-y-1/2 transform py-1.5"
            src={imgPaths.logo}
            alt="메인 아이콘"
            width={200}
            height={200}
          />
        </Link>
        <RightWrapper />
      </div>

      <MainMenuNav />
    </header>
  );
}
