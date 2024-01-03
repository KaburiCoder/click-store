"use client";
import { fetchGetPaymentsWithItems } from "@/db/client-queries/fetch-payments-with-items";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import useOrdersStore from "@/store/orders.store";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import OrderBox from "./order-box/order-box";
import { cn } from "@/lib/utils/shadcn.util";
import { QKey } from "@/db/keys";

export default function OrderList() {
  const { payments, observerComponent, error } = useOrdersInfiniteQuery();

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
        `grid grid-cols-1 grid-rows-none gap-4 p-2`,
        "md:grid-cols-2",
        "lg:grid-cols-3",
        "2xl:grid-cols-4",
      )}
    >
      {orderComponents}
      {observerComponent}
    </ul>
  );
}

const useOrdersInfiniteQuery = () => {
  const { payments, setPayments } = useOrdersStore();
  const queryClient = useQueryClient();

  const { data, error, hasNextPage, isFetching, fetchNextPage, refetch } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: [QKey.ordersInfiniteQuery],
      queryFn: ({ pageParam }) =>
        fetchGetPaymentsWithItems({ page: pageParam }),
      getNextPageParam: (nextPage) => {
        if (!!nextPage?.isLast) return null;

        return nextPage.page + 1;
      },
      select: (data) => {
        return data.pages?.flatMap((pg) => pg.payments);
      },
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
