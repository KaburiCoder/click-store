"use client";
import React, { useEffect, useState } from "react";
import styles from "./buy-area.module.scss";
import CheckBox from "@/components/(shared)/check-box/check-box";
import useSvrCookie from "@/lib/hooks/use-svr-cookie";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

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
    setCheckBNPL(true);
  }, [user?.useBNPL]);

  function handleBNPLChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setCheckBNPL(e.target.checked);
  }

  function handleBuy(): void {
    if (checkBNPL) {
      fetchPayment({
        method: "후불결제",
        sendType: "결제대기",
        paymentType: "BNPL",
      });
    } else {
      push(paths.payment());
    }
  }

  return (
    <div className={styles.buy_container}>
      <div className={styles.buy_wrapper}>
        <div className={styles.buy_amount_wrapper}>
          <div className={styles.buy_amount_title}>총 주문금액</div>
          <div className={styles.buy_amount}>
            {cartItemsUtil?.totalPrice.toLocaleString()}원
          </div>
        </div>
        <div className={styles.inner_right_wrapper}>
          {user?.useBNPL && (
            <CheckBox
              className={styles.check_bnpl}
              text="후불결제"
              checked={checkBNPL}
              onChange={handleBNPLChange}
            />
          )}

          <button
            className={styles.buy_amount_button}
            onClick={handleBuy}
            disabled={!selectedCartItems?.length || loading}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

const useBuyArea = () => {
  // const { loading, fetchCheckoutByArgs } = useCheckout();
  // const [checkBNPL, setCheckBNPL] = useState(false);
  // const { cart, checkedIds } = useCartViewStore();
  // const disabled = loading || checkedIds.length === 0;
  // const cartItemManager = useMemo(
  //   () =>
  //     new CartItemManager(
  //       cart?.cartItems.filter((item) => checkedIds.includes(item.id!))
  //     ),
  //   [cart?.cartItems, checkedIds]
  // );
  // function handleBuy() {
  //   if (checkBNPL) {
  //     const orderId = getOrderId();
  //     fetchCheckoutByArgs({
  //       paymentType: "BNPL",
  //       orderId: orderId,
  //       orderName: cartItemManager.orderName,
  //       paymentKey: orderId,
  //       amount: cartItemManager.totalPrice,
  //       quantity: cartItemManager.totalQuantity,
  //       items: cartItemManager.cartItems!,
  //     });
  //   } else {
  //     push(paths.payment());
  //     navigate("/payment", { state: cartItemManager.checkoutState });
  //   }
  // }
  // function handleBNPLChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setCheckBNPL(e.target.checked);
  // }
  // useEffect(() => {
  //   if (!user?.useBNPL) return;
  //   setCheckBNPL(user?.useBNPL);
  // }, [user?.useBNPL]);
  // return {
  //   useBNPL: user?.useBNPL,
  //   checkBNPL,
  //   disabled,
  //   currencyTotalPrice: cartItemManager.totalPrice.toLocaleString(),
  //   handleBuy,
  //   handleBNPLChange,
  // };
};
