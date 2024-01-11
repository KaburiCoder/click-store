"use client";
import React, { useEffect, useState } from "react";
import useCartViewStore from "@/store/cart-view.store";

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

  const thStyles =
    "solid m-0 border-y border-solid border-blue-400 bg-blue-200 px-0 py-2.5 text-black";

  return (
    <thead>
      <tr>
        <th className={thStyles}>
          <label>
            <input
              type="checkbox"
              checked={allCheck}
              onChange={handleCheckAll}
            />
            <span className="absolute">전체</span>
          </label>
        </th>
        <th className={thStyles}>상품정보</th>
        <th className={thStyles}></th>
        <th className={thStyles}>상품금액</th>
      </tr>
    </thead>
  );
}
