"use client";
import React from "react";
import MTitle from "@/components/(shared)/m-title/m-title";
import ProductList from "./product-list";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";

export default function ProductGroup({ bunryuObject }: BunryuObjectProps) {
  const { name = "", code } = bunryuObject || {};

  return (
    <li id={code} className="m-2.5 overflow-hidden rounded shadow">
      <MTitle title={name} />
      <ProductList bunryuObject={bunryuObject} />
    </li>
  );
}
