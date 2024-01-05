"use client";

import React, { Fragment, useEffect, useState } from "react";
import styles from "./dd-cart.module.scss";
import { getCartWithProduct } from "@/db/services/cart.service";
import { BsCartCheck } from "react-icons/bs";
import { Cart } from "@/db/models/cart";
import { CartItemsUtil } from "@/lib/utils/cart-items.util";
import Item from "./item/item";
import RIconButton from "@/components/ui/custom/ricon-button";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

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

  function TotalQuantity() {
    return (
      <div className={styles.totalQuantity}>
        총 주문 수량 : <span>{cartItemsUtil.totalQuantity}</span>
      </div>
    );
  }

  function TotalPrice() {
    return (
      <div
        className={styles.totalPrice}
      >{`₩${cartItemsUtil.totalPrice?.toLocaleString()}`}</div>
    );
  }

  function ItemList() {
    return cart?.cartItems?.map((cartItem) => (
      <ul key={cartItem.id} className={styles.list}>
        <Item cartItem={cartItem} />
        <hr key={cartItem.code} style={{ width: "100%" }} />
      </ul>
    ));
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <TotalQuantity />
          <TotalPrice />
        </div>
        <RIconButton
          icon={BsCartCheck}
          className="h-full p-4"
          variant={"white"}
          iconSide="top"
          textClassName="font-bold"
          onClick={() => push(paths.cartView())}
        >
          장바구니 보기
        </RIconButton>
      </div>
      <ItemList />
    </div>
  );
}
