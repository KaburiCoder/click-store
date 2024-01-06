"use client";
import React, { useEffect, useRef, useState } from "react";
import DdButton from "@/components/(main-pages)/root/header/dd-button";
import { BsCart2 } from "react-icons/bs";
import useCartStore from "@/store/cart.store";
import { getItemsCount } from "@/db/services/cart.service";
import ItemCountWrapper from "../../item-count-wrapper/item-count-wrapper";
import DdCart from "./dd-cart";
import { SetOpenType } from "@/lib/types/set-open.type";

export default function DdCartButton() {
  const [itemsCount, setItemsCount] = useState<number>();
  const itemCountChanged = useCartStore((state) => state.itemCountChanged);
  const ref = useRef<SetOpenType>();

  useEffect(() => {
    (async () => {
      const itemsCount = await getItemsCount();
      setItemsCount(itemsCount);
    })();
  }, [itemCountChanged]);

  return (
    <DdButton
      ref={ref}
      text="장바구니"
      icon={BsCart2}
      modalComponent={
        <DdCart onLinkClick={() => ref.current?.setOpen(false)} />
      }
    >
      <ItemCountWrapper count={itemsCount} />
    </DdButton>
  );
}
