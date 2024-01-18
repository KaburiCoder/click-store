"use client";
import React, { useEffect, useState } from "react";
import useSvrCookie from "@/lib/hooks/use-svr-cookie";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import ButtonL from "@/components/ui/custom/button-l";
import CheckBoxL from "@/components/ui/custom/check-box-l";
import { CheckedState } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils/shadcn.util";
import { usePgMessageQuery } from "@/lib/hooks/use-pg-message-query";
import PaymentMessageModal from "./payment-message-modal";
import PaymentBuyButton from "./payment-buy-button";

interface Props {
  className?: string;
}

export default function BuyArea({ className }: Props) {
  const { push } = useRouter();
  const { user } = useSvrCookie();

  const {
    checkBNPL,
    selectedCartItems,
    loading,
    setCheckBNPL,
    cartItemsUtil,
    fetchPayment,
  } = useCartView({
    isPayment: true,
  });
  // 후불결제 사용 시 기본 값 true
  useEffect(() => {
    if (user?.useBNPL) setCheckBNPL(user?.useBNPL);
  }, [setCheckBNPL, user?.useBNPL]);

  function handleBNPLCheckedChange(checked: CheckedState): void {
    setCheckBNPL(checked as boolean);
  }

  const bnplCheckBox = user?.useBNPL && (
    <CheckBoxL
      className="mr-2 text-black"
      labelClassName="text-md"
      label="후불결제"
      checked={checkBNPL}
      onCheckedChange={handleBNPLCheckedChange}
    />
  );

  return (
    <div
      className={cn(
        "flex-center mb-4 w-full flex-col gap-2 rounded border border-solid border-blue-500 bg-white p-4 text-blue-600 shadow-xl",
        // "sm:flex-row sm:justify-between",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between text-left">
        <div>{bnplCheckBox}</div>
        <div className="text-right text-base">
          <span>총 주문 금액</span>
          <div className="text-2xl font-bold">
            {cartItemsUtil?.totalPrice.toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full">
        <PaymentBuyButton />
      </div>
    </div>
  );
}
