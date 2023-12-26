import React from "react";
import GroupList from "./group-list";

export default async function AdminSide() {
  return (
    <div className="flex h-full w-64 flex-col justify-between bg-white">
      <div className="px-4 pt-4">
        {/* <NavToMainButton />
        <GroupList /> */}
        <GroupList />
      </div>
      <div className="px-4 pt-4"></div>
      <div></div>
    </div>
  );
}
