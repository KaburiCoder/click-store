"use client";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { TossApiResultProps } from "@/lib/props/toss-api-result.props";
import React from "react";
import { LuPrinter } from "react-icons/lu";
import { isMobile } from "react-device-detect";
import { IoCloseOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends TossApiResultProps {
  isPrinting: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onPrintClick: () => void;
}

export default function ReceiptHeader({
  isPrinting,
  tossResult,
  setOpen,
  onPrintClick,
}: Props) {
  const title = getTitle(tossResult);

  return (
    <>
      <div className="flex justify-between pb-8 pt-2">
        <h3 className="text-xl">{title}</h3>
        <div className="flex gap-2">
          {!isPrinting && (
            <>
              {!isMobile && (
                <Button
                  className="text-blue-500 hover:text-blue-800"
                  Icon={LuPrinter}
                  onClick={onPrintClick}
                />
              )}
              {setOpen && (
                <Button
                  className="text-gray-600 hover:text-gray-800"
                  Icon={IoCloseOutline}
                  onClick={() => setOpen?.(false)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

interface ButtonProps {
  className?: string;
  onClick: () => void;
  Icon: IconType;
}

function Button({ className, Icon, onClick }: ButtonProps) {
  return (
    <button className={cn("p-1", className)} onClick={onClick}>
      <Icon className="h-6 w-6" />
    </button>
  );
}

function getTitle(tossResult: TossApiResult) {
  if (tossResult.card) {
    return "신용·체크카드 매출전표";
  } else {
    return "결제내역 확인서";
  }
}
