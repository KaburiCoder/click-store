"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./cart-view-thead.module.scss";
import useCartViewStore from "@/store/cart-view.store";
import { Cart } from "@/db/models/cart";
import { getCartWithProduct } from "@/db/services/cart.service";
import { deleteCartItems } from "@/db/services/cart-item.service";

interface Props {
  cart: Cart | undefined;
}
export default function CartViewThead() {
  const { cart, checkedIds, setCheckAll } = useCartViewStore();
  const [allCheck, setAllCheck] = useState<boolean>(true);

  useEffect(() => {
    const isAllChecked = checkedIds?.length === cart?.cartItems?.length;
    setAllCheck(isAllChecked);
  }, [checkedIds, cart]);

  function handleCheckAll(event: React.ChangeEvent<HTMLInputElement>): void {
    setCheckAll(event.target.checked);
  }

  return (
    <thead className={styles.head}>
      <tr>
        <th className={`${styles.first_column} ${styles.first_column_header}`}>
          <label>
            <input
              type="checkbox"
              checked={allCheck}
              onChange={handleCheckAll}
            />
            <span>전체</span>
          </label>
        </th>
        <th>상품정보</th>
        <th></th>
        <th>상품금액</th>
      </tr>
    </thead>
  );
}
