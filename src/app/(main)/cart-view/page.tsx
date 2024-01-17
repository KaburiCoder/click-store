"use client";
import BuyArea from "@/components/(main-pages)/cart-view/buy-area";
import CartViewEmpty from "@/components/(main-pages)/cart-view/cart-view-empty";
import CartViewMain from "@/components/(main-pages)/cart-view/cart-view-main";
import CartViewBody from "@/components/(main-pages)/cart-view/cart-view-table/cart-view-body";
import CartViewTable from "@/components/(main-pages)/cart-view/cart-view-table/cart-view-table";
import CartViewThead from "@/components/(main-pages)/cart-view/cart-view-table/cart-view-thead";
import OrderRequest from "@/components/(main-pages)/cart-view/order-request";
import ScreenLoading from "@/components/(shared)/screen-loading";
import { useCartView } from "@/lib/hooks/use-cart-view";
import React, { useEffect } from "react";

export default function CartViewPage() {
  const { cart, loading, clear } = useCartView({ onFetch: true });
  const cartItemsExists = cart?.cartItems && cart.cartItems?.length > 0;
  const maxWidth = "max-w-[60rem]";

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return (
    <>
      {loading && <ScreenLoading />}
      {!cartItemsExists && !loading && <CartViewEmpty />}
      {cartItemsExists && (
        <CartViewMain>
          <CartViewTable className={maxWidth}>
            <CartViewThead />
            <CartViewBody />
          </CartViewTable>
          <OrderRequest className={maxWidth} />
          <BuyArea innerClassName={maxWidth} />
        </CartViewMain>
      )}
    </>
  );
}
