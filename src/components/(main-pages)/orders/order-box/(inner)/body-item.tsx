"use client";
import { Badge } from "@/components/ui/badge";
import { PaymentItem } from "@/db/models/payment-item";
import { cn } from "@/lib/utils/shadcn.util";
import React, { useState } from "react";
import DeliveryBadge from "./delivery-badge";
import { bigoToTrackings } from "@/lib/utils/tracking.util";

interface Props {
  item: PaymentItem;
  setSeparator: boolean;
  cancel: boolean;
}

export default function OrderBodyItem({ item, cancel, setSeparator }: Props) {
  const deliveries = bigoToTrackings(item.pd?.bigo);
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
        <div className="flex flex-wrap gap-0.5">
          {item.fit && <Badge variant={"fit"}>맞춤</Badge>}
          {deliveryComponents}
        </div>
      </div>
      <div className={"styles.amount"}>{totalAmount.toLocaleString()}원</div>
    </li>
  );
}
