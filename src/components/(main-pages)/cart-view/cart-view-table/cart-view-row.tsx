"use client";
import React from "react";
import styles from "./cart-view-row.module.scss";
import { CartItem } from "@/db/models/cart-item";
import useCartViewStore from "@/store/cart-view.store";
import IntUpAndDown from "@/components/(shared)/int-up-and-down";
import { defaultProductQuantity } from "@/lib/utils/product.util";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { Badge } from "@/components/ui/badge";

interface Props {
  cartItem: CartItem;
  checked: boolean;
  // onCheckChange: (checked: boolean) => void;
  // onCountChange: (id: number, value: number) => void;
  // onCancel: (id: number) => void;
}

const CartViewRow: React.FC<Props> = (props) => {
  const ci = props.cartItem;
  const { loading, setCheck, updateQuantity, deleteCartItem } = useCartView({
    id: ci.id,
  });
  const totalPrice = ci.quantity * (ci.pls?.danga ?? 0);
  const step = ci.pl?.step ?? 1;

  function checkChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setCheck(ci.id!, event.target.checked);
  }

  function handleCancel(): void {
    deleteCartItem();
  }

  function handleQuantityChange(value: number): void {
    updateQuantity(value);
  }

  return (
    <tr key={ci.id}>
      <td className={styles.first_column}>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={checkChangeHandler}
        />
      </td>
      <td colSpan={2}>
        <div className={styles.cart_item}>
          <div className={styles.cart_item__head}>
            <div className={styles.detail__head__product}>
              <div className={styles.product_name}>{ci.pls?.smMyung}</div>
              <div className="flex gap-1 pt-1">
                {ci.fit && <Badge variant={"fit"}>맞춤주문</Badge>}
                {ci.pls?.danwi && (
                  <Badge variant={"default"}>{ci.pls?.danwi}</Badge>
                )}
              </div>
            </div>
          </div>
          <div className={styles.cart_item__body}>
            <div className={styles.cart_item__body__left}>
              <div className={styles.cart_item__body__price}>
                {ci.pls?.danga?.toLocaleString()}원
              </div>
              <IntUpAndDown
                value={ci.quantity}
                step={step}
                min={defaultProductQuantity({ isFit: ci.fit, step })}
                disabled={loading}
                onChange={handleQuantityChange}
              />
            </div>

            <button
              className={styles.cancel_button}
              disabled={loading}
              onClick={handleCancel}
            >
              취소
            </button>
          </div>
        </div>
      </td>
      <td className={styles.last_column}>
        <div>{totalPrice.toLocaleString()}원</div>
      </td>
    </tr>
  );
};

export default CartViewRow;
