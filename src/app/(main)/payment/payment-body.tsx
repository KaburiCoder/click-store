"use client";
import WrongApproach from "@/components/(errors)/wrong-approach";
import { Card } from "@/components/ui/card";
import ButtonL from "@/components/ui/custom/button-l";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { useEnv } from "@/lib/hooks/use-env";
import useTossWidget from "@/lib/hooks/use-toss-widget";
import usePaymentStore from "@/store/payment.store";
import React, { useEffect } from "react";

const PaymentBody = () => {
  const env = useEnv();
  const {
    orderRequestMessage,
    hasNotPaymentData,
    cartItemsUtil,
    getPaymentItems,
  } = useCartView({
    isPayment: true,
  });
  const { setPaymentState, clear } = usePaymentStore();
  const { fetchCheckout } = useTossWidget({
    orderName: cartItemsUtil?.orderName!,
    totalPrice: cartItemsUtil?.totalPrice!,
  });

  if (hasNotPaymentData) {
    return <WrongApproach />;
  }

  function checkoutHandler() {
    fetchCheckout({
      onPreCall: () => {
        setPaymentState({
          orderName: cartItemsUtil!.orderName,
          quantity: cartItemsUtil!.totalQuantity,
          paymentItems: getPaymentItems(),
          cartItemIds: cartItemsUtil!.cartItemIds,
          orderRequestMessage,
        });
      },
      onFail: clear,
    });
  }

  return (
    <div className="max-w-6x mx-auto">
      <Card className="m-2">
        <div id="payment-widget" />
        <div id="agreement" />
      </Card>
      <Card className="flex-center mx-2 flex-col px-2 py-4">
        <div className="mb-2 text-black">
          결제금액{" : "}
          <span className="text-xl font-bold text-blue-900">
            {cartItemsUtil?.totalPrice?.toLocaleString()}원
          </span>
        </div>

        <ButtonL className="w-full text-base" onClick={checkoutHandler}>
          결제하기
        </ButtonL>
        {env?.APP_ENV !== "prod" && (
          <div className="mt-2 w-full rounded bg-rose-200 p-3 text-center text-red-600">
            테스트 환경입니다. 실제 결제가 되지 않습니다.
          </div>
        )}
      </Card>
    </div>
  );
};

export default PaymentBody;
