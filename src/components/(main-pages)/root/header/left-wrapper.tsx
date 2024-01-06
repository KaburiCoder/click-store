"use client";
import React from "react";
import DdOrderButton from "./dd-order-button";
import DdMenuButton from "./menu/dd-menu-button";

export default function LeftWrapper() {
  return (
    <div className="flex items-center">
      <DdMenuButton />
      <DdOrderButton onTheRight={false} />
    </div>
  );
}
