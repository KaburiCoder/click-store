import React from "react";
import styles from "./item.module.scss";
import { CartItem } from "@/db/models/cart-item";
import { Badge } from "@/components/ui/badge";

interface Props {
  cartItem: CartItem;
}

export default function Item({ cartItem }: Props) {
  const { pls } = cartItem;
  const formatedPrice = (pls?.danga ?? 0) * cartItem.quantity;

  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <div>{pls?.smMyung}</div>
        {cartItem?.fit && <Badge variant={"fit"}>맞춤주문</Badge>}
      </div>
      <div className={styles.detail}>
        <div className={styles.detail__left}>
          <div>수량 : {cartItem.quantity}</div>
          {pls?.danwi && <div>단위 : {pls?.danwi}</div>}
        </div>
        <div className={styles.detail__right}>
          ₩{formatedPrice.toLocaleString()}
        </div>
      </div>
    </li>
  );
}
