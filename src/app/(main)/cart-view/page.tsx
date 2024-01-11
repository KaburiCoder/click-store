"use client";
import BuyArea from "@/components/(main-pages)/cart-view/buy-area/buy-area";
import CartViewEmpty from "@/components/(main-pages)/cart-view/cart-view-empty/cart-view-empty";
import CartViewBody from "@/components/(main-pages)/cart-view/cart-view-table/cart-view-body";
import CartViewTable from "@/components/(main-pages)/cart-view/cart-view-table/cart-view-table";
import CartViewThead from "@/components/(main-pages)/cart-view/cart-view-table/cart-view-thead";
import ScreenLoading from "@/components/(shared)/screen-loading";
import { useCartView } from "@/lib/hooks/use-cart-view";
import React from "react";

export default function CartViewPage() {
  const { cart, loading } = useCartView({ onFetch: true });
  const cartItemsExists = cart?.cartItems && cart.cartItems?.length > 0;

  return (
    <>
      {loading && <ScreenLoading />}
      {!cartItemsExists && !loading && <CartViewEmpty />}
      {cartItemsExists && (
        <>
          <CartViewTable>
            <CartViewThead />
            <CartViewBody />
          </CartViewTable>
          <BuyArea />
        </>
      )}
    </>
  );
}
