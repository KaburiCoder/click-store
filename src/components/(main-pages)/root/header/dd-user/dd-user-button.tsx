"use client";
import React, { useRef } from "react";
import DdButton from "../dd-button";
import DdUser from "./dd-user";
import { AiOutlineUser } from "react-icons/ai";
import { SetOpenType } from "@/lib/types/set-open.type";

export default function DdUserButton() {
  const ref = useRef<SetOpenType>();

  return (
    <DdButton
      ref={ref}
      text="계정"
      icon={AiOutlineUser}
      modalComponent={
        <DdUser onLinkClick={() => ref.current?.setOpen(false)} />
      }
    />
  );
}
