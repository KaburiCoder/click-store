"use client";
import { fetchGetAdminPaymentsWithItems } from "@/db/client-queries/fetch-admin-payments-with-items";
import { QKey } from "@/db/keys";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useAdminSearchBarStore } from "@/store/admin-search-bar.store";
import useOrdersStore from "@/store/orders.store";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import OrderBox from "../../(main-pages)/orders/order-box/order-box";
import { cn } from "@/lib/utils/shadcn.util";

export default function AdminWebOrderList() {
  const { payments, observerComponent, error } = useWebOrdersInfiniteQuery();

  const orderComponents = payments.map((p) => {
    return (
      <li key={p.id}>
        <OrderBox payment={p} />
      </li>
    );
  });

  return (
    <ul
      className={cn(
        `grid grid-cols-1 grid-rows-none gap-4 overflow-auto p-2`,
        "sm:grid-cols-2",
        "md:grid-cols-1",
        "md2:grid-cols-2",
        "xl2:grid-cols-3",
        "3xl:grid-cols-4",
      )}
    >
      {orderComponents}
      {observerComponent}
    </ul>
  );
}

const useWebOrdersInfiniteQuery = () => {
  const queryClient = useQueryClient();
  const { payments, setPayments } = useOrdersStore();
  const { searchData, searchToggle } = useAdminSearchBarStore();
  const { data, error, hasNextPage, isFetching, fetchNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: [QKey.ordersInfiniteQuery, searchData, searchToggle],
      queryFn: ({ pageParam }) =>
        fetchGetAdminPaymentsWithItems({
          page: pageParam,
          adminSearch: searchData!,
        }),
      getNextPageParam: (nextPage) => {
        if (!!nextPage?.isLast) return null;

        return nextPage.page + 1;
      },
      select: (data) => {
        return data.pages?.flatMap((pg) => pg.payments);
      },
      gcTime: 1000,
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
    setPayments(data ?? []);
  }, [data, setPayments]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [QKey.ordersInfiniteQuery] });
    };
  }, [queryClient]);
  return {
    payments,
    observerComponent,
    error,
  };
};
