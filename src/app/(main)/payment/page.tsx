"use client";
import useTossWidget from "@/lib/hooks/use-toss-widget";
import React from "react";
import styles from "./page.module.scss";
import classNames from "classnames";
import { useCartView } from "@/lib/hooks/use-cart-view";
import usePaymentStore from "@/store/payment.store";
import WrongApproach from "@/components/(errors)/wrong-approach";
import { APP_ENV } from "@/configs/config";

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
    <main>
      <div className={classNames("cst-card", styles.payment)}>
        <div id="payment-widget" />
        <div id="agreement" />
      </div>
      <div className={classNames("cst-card", styles["checkout-container"])}>
        <div className={styles["checkout-amount-wrapper"]}>
          결제금액{" : "}
          <span className={styles["checkout-amount"]}>
            {cartItemsUtil?.totalPrice?.toLocaleString()}원
          </span>
        </div>

        <button className={styles["checkout-button"]} onClick={checkoutHandler}>
          결제하기
        </button>
        {APP_ENV !== "prod" && (
          <div className="bg-rose-400 text-white p-3 mt-2 rounded">테스트 환경입니다. 실제 결제가 되지 않습니다.</div>
        )}
      </div>
    </main>
  );
}
