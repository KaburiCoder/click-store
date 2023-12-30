"use client";
import React from "react";
import ProductGroup from "./product-group/product-group";
import { useQuery } from "@tanstack/react-query";
import { QKey } from "@/db/keys";
import { fetchBunryuObjectList } from "@/db/client-queries/fetch-bunryu-object-list";
import MainLoading from "./main-loading";
export default function ProductGroupList() {
  const { data } = useQuery({
    queryKey: [QKey.fetchBunryuObjectList],
    queryFn: fetchBunryuObjectList,
    gcTime: 1,
  });

  const bunryuComponents = data?.map((bunryu) => (
    <ProductGroup key={bunryu.code} bunryuObject={bunryu} />
  ));

  if (!bunryuComponents) {
    return <MainLoading />;
  }

  return <ul>{bunryuComponents}</ul>;
}
