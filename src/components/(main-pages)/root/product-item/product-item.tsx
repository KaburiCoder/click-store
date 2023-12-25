"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./product-item.module.scss";
import { Products, getProductImage } from "@/db/queries/main-page.query";
import Image from "next/image";
import ProductModal from "../product-modal/product-modal";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";

interface Props extends BunryuObjectProps {
  product: Products;
  defaultFit: boolean;
}

export default function ProductItem({ product, defaultFit }: Props) {
  const { smCode, danga, danwi, smMyung, src } = product;
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <ProductModal
        open={open}
        setOpen={setOpen}
        product={product}
        defaultFit={defaultFit}
      />
      <li className={styles.item} onClick={handleClick}>
        <Image
          className={styles.image}
          src={src}
          alt="상품 이미지"
          width={300}
          height={500}
        />

        <div>
          <div className={styles.item__name}>{smMyung}</div>
          <div className={styles.item__unit}>{danwi}</div>
          <div className={styles.cost}>{danga.toLocaleString()}원</div>
        </div>
      </li>
    </>
  );
}
