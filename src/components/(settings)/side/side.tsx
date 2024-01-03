import React from "react";
import GroupList from "./components/group-list";
import NavToMainButton from "./components/nav-to-main-button";

export default function SettingsSide({ onClose }: DrawerChildProps) {
  return (
    <div className="flex h-full min-w-[16rem] flex-col justify-between bg-white">
      <div className="px-4 pt-4">
        <NavToMainButton />
        <GroupList onClose={onClose} />
      </div>
      <div className="px-4 pt-4"></div>
      <div></div>
    </div>
  );
}
