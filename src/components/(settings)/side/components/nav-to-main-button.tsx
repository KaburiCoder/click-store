"use client";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { SideButtonItem } from "../../../(shared)/side/side-button-item";

export default function NavToMainButton() {
  const { push } = useRouter();
  function handleToMain(): void {
    push(paths.root());
  }

  return (
    <SideButtonItem
      Icon={FaAngleLeft}
      text="메인으로"
      className="mb-4"
      onClick={handleToMain}
    />
  );
}
