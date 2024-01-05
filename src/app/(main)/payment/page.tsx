"use client";
import useTossWidget from "@/lib/hooks/use-toss-widget";
import React from "react";
import styles from "./page.module.scss";
import classNames from "classnames";
import { useCartView } from "@/lib/hooks/use-cart-view";
import usePaymentStore from "@/store/payment.store";
import WrongApproach from "@/components/(errors)/wrong-approach";
import { APP_ENV } from "@/configs/config";
import ButtonL from "@/components/ui/custom/button-l";

export default function PaymentPage(props: any) {
  const { hasNotPaymentData, cartItemsUtil, getPaymentItems } = useCartView({
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
        });
      },
      onFail: clear,
    });
  }

  return (
    <main className="mx-auto max-w-6xl">
      <div className='cst-card m-2'>
        <div id="payment-widget" />
        <div id="agreement" />
      </div>
      <div className="cst-card flex-center mx-2 flex-col px-2 py-4">
        <div className="mb-2 text-black">
          결제금액{" : "}
          <span className="text-xl font-bold text-blue-900">
            {cartItemsUtil?.totalPrice?.toLocaleString()}원
          </span>
        </div>

        <ButtonL className="w-full" onClick={checkoutHandler}>
          결제하기
        </ButtonL>
        {APP_ENV !== "prod" && (
          <div className="mt-2 w-full rounded bg-rose-200 p-3 text-center text-red-600">
            테스트 환경입니다. 실제 결제가 되지 않습니다.
          </div>
        )}
      </div>
    </main>
  );
}
