"use client";
import { Textarea } from "@/components/ui/textarea";
import { QKey } from "@/db/keys";
import { cn } from "@/lib/utils/shadcn.util";
import useCartViewStore from "@/store/cart-view.store";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import OrderRequestButton from "./order-request-button";
import { fetchOrderReqMsgs } from "@/db/client-queries/fetch-latest-order-req-msg";

interface Props {
  className?: string;
}
export default function OrderRequest({ className }: Props) {
  const { data: orderReqMessages, isPending } = useQuery({
    queryKey: [QKey.fetchLatestOrderReqMsg],
    queryFn: fetchOrderReqMsgs,
    gcTime: 0,
  });
  const { orderRequestMessage, setOrderRequestMessage } = useCartViewStore();

  useEffect(() => {
    if (!orderReqMessages || orderReqMessages.length === 0) return;
    setOrderRequestMessage(orderReqMessages[0]);
  }, [orderReqMessages, setOrderRequestMessage]);

  function handleRequestMessageSelect(message: string): void {
    setOrderRequestMessage(message);
  }

  return (
    <div
      className={cn(
        "mb-4 mt-2 flex w-full flex-col rounded p-2 shadow",
        isPending ? "items-center" : "items-start",
        className,
      )}
    >
      {isPending ? (
        <Loader2 className="m-2 h-6 w-6 animate-spin" />
      ) : (
        <>
          <div className="flex w-full items-center justify-between pb-1 text-base font-bold text-slate-500">
            <span>배송요청사항</span>
            {orderReqMessages && (
              <OrderRequestButton
                orderReqMessages={orderReqMessages}
                onSelect={handleRequestMessageSelect}
              />
            )}
          </div>
          <div className="w-full">
            <Textarea
              className="p ime-kor w-full"
              maxLength={255}
              rows={3}
              value={orderRequestMessage}
              onChange={(e) => setOrderRequestMessage(e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  );
}
