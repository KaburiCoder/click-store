import { PaymentProps } from "@/lib/props/payment.props";
import { getSendType } from "@/lib/utils/payment.util";
import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

export default function OrderHeader({ payment }: PaymentProps) {
  const sendType = getSendType(payment);

  function sendTypeStyles() {
    const commonStyles = "border-solid border text-white";
    switch (sendType) {
      case "주문취소":
        return `${commonStyles} bg-rose-500`;
      case "배송중":
        return `${commonStyles} bg-blue-400`;
      case "배송완료":
        return `${commonStyles} bg-green-600`;
    }
    return undefined;
  }

  return (
    <div className={"flex items-center justify-between bg-amber-500 p-2"}>
      <div className="font-bold text-amber-900">
        주문번호 : {payment.orderId}
      </div>
      <div className={cn("rounded bg-white p-1 text-xs", sendTypeStyles())}>
        {sendType}
      </div>
    </div>
  );
}
