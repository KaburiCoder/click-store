import React from "react";
import LeftWrapper from "./left-wrapper";
import RightWrapper from "./right-wrapper";
import MainMenuNav from "./main-menu-nav";
import MainLogo from "@/components/main-logo";

export default function MainHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] h-header bg-white">
      <div className="relative flex h-header justify-between overflow-hidden border-b-[1px] border-solid border-gray-300">
        <LeftWrapper />
        <MainLogo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
        <RightWrapper />
      </div>

      <MainMenuNav />
    </header>
  );
}
