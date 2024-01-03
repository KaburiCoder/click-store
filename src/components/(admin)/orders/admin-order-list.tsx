"use client";
import { fetchGetAdminProducts } from "@/db/client-queries/fetch-get-admin-products";
import { QKey } from "@/db/keys";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useAdminSearchBarStore } from "@/store/admin-search-bar.store";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AdminOrderItem from "./admin-order-item";

export default function AdminOrderList() {
  const { products, observerComponent } = useAdminOrderInfiniteQuery();

  const components = products?.map((p) => {
    return <AdminOrderItem key={p.auto} product={p} />;
  });

  return (
    <div className=" overflow-auto bg-sky-50 p-2">
      <ul className="flex flex-col gap-2 overflow-hidden">
        {components}
        {observerComponent}
      </ul>
    </div>
  );
}

const useAdminOrderInfiniteQuery = () => {
  const queryClient = useQueryClient();
  const { searchData, searchToggle } = useAdminSearchBarStore();

  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QKey.fetchGetAdminProducts, searchData, searchToggle],
    queryFn: ({ pageParam }) =>
      fetchGetAdminProducts({
        page: pageParam,
        adminSearch: searchData!,
      }),
    getNextPageParam: (nextPage) => {
      if (nextPage?.isLast ?? true) {
        return null;
      }
      return nextPage.page + 1;
    },
    select: (data) => {
      return data.pages?.flatMap((pg) => pg.products);
    },
    enabled: !!searchData,
  });

  const { observerComponent } = useIntersectionObserver({
    hasNextPage: !!hasNextPage,
    isFetching: isFetching,
    onIntersecting: () => {
      fetchNextPage();
    },
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [QKey.fetchGetAdminProducts] });
    };
  }, [queryClient]);

  return {
    products: data,
    isFetching,
    observerComponent,
  };
};
