"use client";
import React, { useRef } from "react";
import DdButton from "./dd-button";
import DdUser from "./dd-user/dd-user";
import { AiOutlineUser } from "react-icons/ai";
import { UserProps } from "@/lib/props/fetch-get-user.props";
import { SetOpenType } from "@/lib/types/set-open.type";

export default function DdUserButton({ user }: UserProps) {
  const ref = useRef<SetOpenType>();

  return (
    <DdButton
      ref={ref}
      text="계정"
      icon={AiOutlineUser}
      modalComponent={
        <DdUser user={user} onLinkClick={() => ref.current?.setOpen(false)} />
      }
    />
  );
}
