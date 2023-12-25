import { imgPaths, paths } from "@/paths";
import Image from "next/image";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Button } from "../../ui/button";
import MenuButton from "./menu-button";

export default function SettingsHeader() {
  return (
    <div className="relative flex h-full items-center justify-between px-2">
      <div></div>
      <Image
        className="absolute left-1/2 top-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2 transform py-1"
        alt="메인 로고"
        src={imgPaths.logo}
        width={200}
        height={200}
      />
      <div>
        <MenuButton />
      </div>
    </div>
  );
}
