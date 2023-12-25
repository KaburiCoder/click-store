"use client";
import React from "react";
import DdButton from "./dd-button";
import { BiBasket } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

interface Props {
  onTheRight: boolean;
}

const HREF = "/orders";
export default function DdOrderButton({ onTheRight }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { matches: min768 } = useMinMediaQuery(768);

  function handleNav() {
    router.push(HREF);
  }

  const rightButtonAndSmallSize = onTheRight && !min768;
  const leftButtnAndLargeSize = !onTheRight && min768;

  if (rightButtonAndSmallSize || leftButtnAndLargeSize || pathname === HREF) {
    return <></>;
  }

  return (
    <DdButton text="주문내역" icon={BiBasket} onClick={handleNav}></DdButton>
  );
}
