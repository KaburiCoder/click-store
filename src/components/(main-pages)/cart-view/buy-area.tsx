"use client";
import React, { useEffect, useState } from "react";
import useSvrCookie from "@/lib/hooks/use-svr-cookie";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import ButtonL from "@/components/ui/custom/button-l";
import CheckBoxL from "@/components/ui/custom/check-box-l";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function BuyArea() {
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

  function handleBuy(): void {
    if (!cartItemsUtil) return;
    if ((cartItemsUtil.cartItemIds.length ?? 0) === 0) return;

    if (checkBNPL || !cartItemsUtil?.totalPrice) {
      fetchPayment({
        method: "후불결제",
        sendType: "결제대기",
        paymentType: "BNPL",
      });
    } else {
      push(paths.payment());
    }
  }

  function handleBNPLCheckedChange(checked: CheckedState): void {
    setCheckBNPL(checked as boolean);
  }

  return (
    <div className="flex-center fixed bottom-0 z-[1] h-cartView w-full flex-col bg-blue-600 p-4 text-white">
      <div className="flex w-full max-w-[60rem] items-center justify-between">
        <div className="text-left">
          <div className="text-base">총 주문금액</div>
          <div className="text-2xl font-bold">
            {cartItemsUtil?.totalPrice.toLocaleString()}원
          </div>
        </div>
        <div className="flex h-auto">
          {user?.useBNPL && (
            <CheckBoxL
              className="mr-2"
              labelClassName="text-md"
              label="후불결제"
              checked={checkBNPL}
              onCheckedChange={handleBNPLCheckedChange}
            />
          )}

          <ButtonL
            className="h-16 font-bold"
            onClick={handleBuy}
            variant={"white"}
            disabled={(selectedCartItems?.length ?? 0) === 0}
            isLoading={loading}
          >
            구매하기
          </ButtonL>
        </div>
      </div>
    </div>
  );
}
