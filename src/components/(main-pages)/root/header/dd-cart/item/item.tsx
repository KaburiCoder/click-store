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
      <div className="flex items-center justify-between pb-2">
        <div className="text-lg">{pls?.smMyung}</div>
        <div className="flex flex-col flex-wrap gap-1 text-right">
          {cartItem?.fit && (
            <Badge className="h-6" variant={"fit"}>
              맞춤주문
            </Badge>
          )}
          {pls?.danwi && <Badge className="h-6">{pls?.danwi}</Badge>}
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detail__left}>
          <div>수량 : {cartItem.quantity}</div>
        </div>
        <div className={styles.detail__right}>
          ₩{formatedPrice.toLocaleString()}
        </div>
      </div>
    </li>
  );
}
