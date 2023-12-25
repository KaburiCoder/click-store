import React from "react";
import ProductGroup from "../product-group/product-group";
import { getBunryuObjectList } from "@/db/queries/main-page.query";
import styles from "./product-group-list.module.scss";

export default async function ProductGroupList() {
  const bunryuObjectList = await getBunryuObjectList();

  const bunryuComponents = bunryuObjectList.map((bunryu) => (
    <ProductGroup key={bunryu.code} bunryuObject={bunryu} />
  ));

  return <ul>{bunryuComponents}</ul>;
}
