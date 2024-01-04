import React from "react";
import LeftWrapper from "./left-wrapper";
import RightWrapper from "./right-wrapper";
import MainMenuNav from "./main-menu-nav";
import MainLogo from "@/components/main-logo";

export default function MainHeader() {
  return (
    <header>
      <div className="relative flex h-header justify-between overflow-hidden border-b-[1px] border-solid border-gray-300">
        <LeftWrapper />
        <MainLogo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
        <RightWrapper />
      </div>

      <MainMenuNav />
    </header>
  );
}
