"use client";
import React from "react";
import MenuButton from "../../(shared)/menu-button";
import SettingsSide from "../side/side";
import MainLogo from "@/components/main-logo";

export default function SettingsHeader() {
  return (
    <div className="relative flex h-full items-center justify-between px-2">
      <div></div>
      <MainLogo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
      <MenuButton drawerChild={SettingsSide} />
    </div>
  );
}
