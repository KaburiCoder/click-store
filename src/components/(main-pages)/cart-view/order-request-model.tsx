"use client";
import Modal from "@/components/(shared)/modal";
import { ModalProps } from "@/lib/props/modal.props";
import React from "react";
import { X } from "lucide-react";

interface Props extends ModalProps {
  orderReqMessages: string[];
  onSelect: (message: string) => void;
}

export default function OrderRequestModel({
  orderReqMessages,
  open,
  setOpen,
  onSelect,
}: Props) {
  const listComponents = orderReqMessages.map((message, i) => {
    return (
      <li
        key={i}
        className="max-h-32 overflow-hidden whitespace-pre-line px-2 py-4 hover:cursor-pointer hover:bg-blue-500 hover:text-white"
        onClick={() => {
          setOpen(false);
          onSelect(message);
        }}
      >
        <span>{message}</span>
      </li>
    );
  });

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      className="flex max-h-[80%] max-w-[60rem] flex-col bg-slate-50"
    >
      <div className="flex min-w-[18rem] flex-col items-stretch overflow-hidden">
        <X
          className="absolute right-4 h-8 w-8 rounded p-1 hover:bg-slate-200"
          onClick={() => setOpen(false)}
        />
        <h3 className="pb-4 text-lg">배송 요청사항 리스트</h3>
        <ul className="h-0 flex-1 overflow-y-auto rounded border border-solid border-gray-500 bg-white">
          {listComponents}
        </ul>
      </div>
    </Modal>
  );
}
