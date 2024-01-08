"use client";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { TossApiResultProps } from "@/lib/props/toss-api-result.props";
import React from "react";
import { LuPrinter } from "react-icons/lu";
import { isMobile } from "react-device-detect";
import { IoCloseOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils/shadcn.util";
import { GoPaperclip } from "react-icons/go";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "react-toastify";
import { paths } from "@/paths";
interface Props extends TossApiResultProps {
  appEnv: string;
  isPrinting: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onPrintClick: () => void;
}

export default function ReceiptHeader({
  appEnv,
  isPrinting,
  tossResult,

  setOpen,
  onPrintClick,
}: Props) {
  const pathname = usePathname();
  const title = getTitle(tossResult);

  function handleCopyClipboard(): void {
    const idx = window.location.href.indexOf(pathname);
    const baseUrl = window.location.href.substring(0, idx);
    const url = `${baseUrl}${paths.receiptOrders(appEnv, tossResult.orderId)}`;
    navigator.clipboard.writeText(url);
    toast.success("링크가 복사되었습니다.");
  }

  return (
    <>
      <div className="flex justify-between pb-8 pt-2">
        <h3 className="text-xl">{title}</h3>
        {!isPrinting && (
          <div className="flex gap-2">
            {!isMobile && (
              <Button
                className="text-blue-500 hover:text-blue-800"
                Icon={LuPrinter}
                onClick={onPrintClick}
                tooltip="출력"
              />
            )}
            <Button
              className="text-gray-600 hover:text-gray-800"
              Icon={GoPaperclip}
              onClick={handleCopyClipboard}
              tooltip="링크 복사"
            />
            {setOpen && (
              <Button
                className="text-gray-600 hover:text-gray-800"
                Icon={IoCloseOutline}
                onClick={() => setOpen?.(false)}
                tooltip="닫기"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

interface ButtonProps {
  className?: string;
  onClick: () => void;
  Icon: IconType;
  tooltip?: string;
}

function Button({ className, tooltip, Icon, onClick }: ButtonProps) {
  const buttonComponent = (
    <button className={cn("p-1", className)} onClick={onClick}>
      <Icon className="h-6 w-6" />
    </button>
  );

  if (!tooltip) return buttonComponent;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{buttonComponent}</TooltipTrigger>
        <TooltipContent side={"bottom"}>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function getTitle(tossResult: TossApiResult) {
  if (tossResult.card) {
    return "신용·체크카드 매출전표";
  } else {
    return "결제내역 확인서";
  }
}
