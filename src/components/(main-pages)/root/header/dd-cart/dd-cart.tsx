"use client";

import React, { Fragment, useEffect, useState } from "react";
import styles from "./dd-cart.module.scss";
import { getCartWithProduct } from "@/db/services/cart.service";
import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";
import { Cart } from "@/db/models/cart";
import { CartItemsUtil } from "@/lib/utils/cart-items.util";
import Item from "./item/item";

interface Props {
  onLinkClick: () => void;
}

export default function DdCart({ onLinkClick }: Props) {
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

  function ToCartViewLink() {
    return (
      <Link href="/cart-view" className={styles.to_cartview} onClick={onLinkClick}>
        <BsCartCheck className={styles.to_cartview_icon} />
        장바구니 보기
      </Link>
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
        <ToCartViewLink />
      </div>
      <ItemList />
    </div>
  );
}
