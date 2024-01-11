"use client";

import React, { Fragment, useEffect, useState } from "react";
import { getCartWithProduct } from "@/db/services/cart.service";
import { Cart } from "@/db/models/cart";
import { CartItemsUtil } from "@/lib/utils/cart-items.util";
import Item from "./item";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import ButtonL from "@/components/ui/custom/button-l";
import { ShoppingBasket } from "lucide-react";
import { CartItem } from "@/db/models/cart-item";

interface Props {
  onLinkClick: () => void;
}

export default function DdCart({ onLinkClick }: Props) {
  const { push } = useRouter();
  const [cart, setCart] = useState<Cart>();
  const [cartItemsUtil] = useState<CartItemsUtil>(new CartItemsUtil());

  useEffect(() => {
    if (!cartItemsUtil) return;

    getCartWithProduct().then((cart) => {
      if (cart) {
        setCart(cart);
        cartItemsUtil.setCartItems(cart.cartItems);
      }
    });
  }, [cartItemsUtil]);

  function handleToCartView(): void {
    push(paths.cartView());
    onLinkClick();
  }

  return (
    <div>
      <div className="flex items-center justify-between bg-blue-600 px-4 py-2 text-slate-50">
        <div className="flex flex-col">
          <TotalQuantity totalQuantity={cartItemsUtil.totalQuantity} />
          <TotalPrice totalPrice={cartItemsUtil.totalPrice} />
        </div>
        <ButtonL
          icon={ShoppingBasket}
          className="h-full p-4 font-bold"
          variant={"white"}
          iconSide="top"
          onClick={handleToCartView}
        >
          장바구니 보기
        </ButtonL>
      </div>
      <ItemList cartItems={cart?.cartItems} />
    </div>
  );
}

function TotalQuantity({ totalQuantity }: { totalQuantity: number }) {
  return (
    <div className="text-base">
      총 주문 수량 : <span>{totalQuantity}</span>
    </div>
  );
}

function TotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <div className="text-2xl font-bold">{`${totalPrice.toLocaleString()} 원`}</div>
  );
}

function ItemList({ cartItems }: { cartItems?: CartItem[] }) {
  return cartItems?.map((cartItem) => (
    <ul
      key={cartItem.id}
      className="flex h-full flex-col items-center bg-white px-4 py-2"
    >
      <Item cartItem={cartItem} />
      <hr key={cartItem.code} style={{ width: "100%" }} />
    </ul>
  ));
}
