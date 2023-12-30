"use client";
import React, { Suspense } from "react";
import styles from "./product-list.module.scss";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import ProductItem from "./product-item";
import { cn } from "@/lib/utils/shadcn.util";

export default function ProductList({ bunryuObject }: BunryuObjectProps) {
  const { products, fit } = bunryuObject || {};

  const components = products?.map((p) => {
    return (
      <Suspense key={p.smCode} fallback={<div>loading...</div>}>
        <ProductItem product={p} canFit={fit ?? false} />
      </Suspense>
    );
  });

  return <ul className={cn("grid w-full grid-cols-1 grid-rows-none justify-center gap-[1px] px-5 py-2.5",
    "xxs:grid-cols-2",
    "md:grid-cols-3",
    "md2:grid-cols-4",
    "lg2:grid-cols-5",
    "2xl:grid-cols-6",
    "3xl:grid-cols-7")}>{components}</ul>;
}
