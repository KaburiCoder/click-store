"use client";
import Modal from "@/components/(shared)/modal";
import React, { useState } from "react";
import { IoReceipt } from "react-icons/io5";
import SalesReceipt from "../sales-receipt";
import { ReceiptProps } from "@/lib/props/receipt.props";

export default function ReceiptButton({ appEnv, orderId }: ReceiptProps) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <Modal className="w-full max-w-[24rem]" open={open} setOpen={setOpen}>
        <SalesReceipt appEnv={appEnv} orderId={orderId} setOpen={setOpen} />
      </Modal>
      <button
        className="ml-2 text-slate-100 hover:text-red-800"
        onClick={handleClick}
      >
        <IoReceipt className="h-6 w-6" />
      </button>
    </>
  );
}
