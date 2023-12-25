"use client";
import React, { useRef } from "react";
import DdButton from "./dd-button";
import MainMenu from "@/components/(main-pages)/root/main-menu/main-menu";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";
import { SetOpenType } from "@/lib/types/set-open.type";
import { GiHamburgerMenu } from "react-icons/gi";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import { usePathname } from "next/navigation";

interface Props extends BunryuObjectProps { }

export default function DdMenuButton({ bunryuObjects }: Props) {
  const pathname = usePathname();
  const { matches: min768 } = useMinMediaQuery(768);
  const ref = useRef<SetOpenType>();

  if (min768 || pathname !== "/") return <></>;

  return (
    <DdButton
      ref={ref}
      icon={GiHamburgerMenu}
      popupLocation="left"
      modalComponent={
        <MainMenu
          bunryuObjects={bunryuObjects}
          onClose={() => ref.current?.setOpen(false)}
        />
      }
    />
  );
}
