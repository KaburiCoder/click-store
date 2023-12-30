"use client";
import React, { useState } from "react";
import { Products } from "@/db/queries/main-page.query";
import Image from "next/image";
import ProductModal from "./product-modal/product-modal";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";

interface Props extends BunryuObjectProps {
  product: Products;
  canFit: boolean;
}

export default function ProductItem({ product, canFit }: Props) {
  const { danga, danwi, smMyung, src } = product;
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
        canFit={canFit}
      />
      <li
        className="mw-48 m-2 flex max-h-80 w-auto flex-col items-center justify-between rounded px-2 py-3 shadow transition-transform duration-100 hover:scale-105"
        onClick={handleClick}
      >
        <Image
          className="w-auto flex-1 overflow-hidden rounded object-scale-down object-left-top pb-1"
          src={src}
          alt="상품 이미지"
          width={300}
          height={500}
        />

        <div className="flex w-full flex-col items-start">
          <div className="text-base text-blue-900">{smMyung}</div>
          <div className="text-xs text-gray-500">{danwi}</div>
          <div className="text-base font-bold text-rose-500">
            {danga.toLocaleString()}원
          </div>
        </div>
      </li>
    </>
  );
}
