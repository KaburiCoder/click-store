"use client";
import React from "react";
import styles from "./product-group.module.scss";
import MTitle from "@/components/(shared)/m-title/m-title";
import ProductList from "../product-list";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";

export default function ProductGroup({ bunryuObject }: BunryuObjectProps) {
  const { name = "", code } = bunryuObject || {};

  return (
    <li id={code} className={styles.container}>
      <MTitle title={name} />
      <ProductList bunryuObject={bunryuObject} />
    </li>
  );
}
