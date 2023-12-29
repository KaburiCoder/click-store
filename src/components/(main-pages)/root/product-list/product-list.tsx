"use client";
import React, { Suspense } from "react";
import styles from "./product-list.module.scss";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import ProductItem from "../product-item/product-item";

export default function ProductList({ bunryuObject }: BunryuObjectProps) {
  const { products, fit } = bunryuObject || {};

  const components = products?.map((p) => {
    return (
      <Suspense key={p.smCode} fallback={<div>loading...</div>}>
        <ProductItem product={p} canFit={fit ?? false} />
      </Suspense>
    );
  });

  return <ul className={styles.wrapper}>{components}</ul>;
}
