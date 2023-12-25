"use client";
import { Badge } from "@/components/ui/badge";
import { PaymentItem } from "@/db/models/payment-item";
import useDeliveryTracking from "@/lib/hooks/use-delivery-tracking";
import { cn } from "@/lib/utils/shadcn.util";
import React, { useState } from "react";
import DeliveryBadge from "./delivery-badge";

interface Props {
  item: PaymentItem;
  setSeparator: boolean;
  cancel: boolean;
}

export default function OrderBodyItem({ item, cancel, setSeparator }: Props) {
  const { convertBigoToTrackings } = useDeliveryTracking();
  const deliveries = convertBigoToTrackings(item.pd?.bigo);
  const totalAmount = item.amount * item.quantity;

  const deliveryComponents =
    !cancel &&
    deliveries?.map((d) => (
      <DeliveryBadge key={`${d.name}|${d.number}`} tracking={d} />
    ));

  return (
    <li
      className={cn(
        `flex items-center justify-between px-4 py-2`,
        setSeparator && `border-t border-solid border-gray-300`,
      )}
    >
      <div>
        <div className={`pb-2 text-base`}>
          {item.name}
          {item.quantity > 1 && (
            <span className="ml-2 font-bold text-rose-500">
              x {item.quantity}
            </span>
          )}
        </div>
        <div className="flex flex-wrap">
          {item.fit && (
            <Badge variant={"fit"} className="mr-1">
              맞춤
            </Badge>
          )}
          {deliveryComponents}
        </div>
      </div>
      <div className={"styles.amount"}>{totalAmount.toLocaleString()}원</div>
    </li>
  );
}
