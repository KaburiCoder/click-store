"use client";
import React, { useState } from "react";
import { List } from "lucide-react";
import ButtonL from "@/components/ui/custom/button-l";
import OrderRequestModel from "./order-request-model";

interface Props {
  orderReqMessages: string[];
  onSelect: (message: string) => void;
}
export default function OrderRequestButton({
  orderReqMessages,
  onSelect,
}: Props) {
  const [open, setOpen] = useState(false);
  function handleClick(): void {
    setOpen(true);
  }

  return (
    <>
      <OrderRequestModel
        open={open}
        setOpen={setOpen}
        onSelect={onSelect}
        orderReqMessages={orderReqMessages}
      />
      <ButtonL icon={List} variant="outline" onClick={handleClick}>
        요청 목록
      </ButtonL>
    </>
  );
}
