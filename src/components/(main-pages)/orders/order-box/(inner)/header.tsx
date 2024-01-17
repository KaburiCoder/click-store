import ReceiptButton from "@/components/(admin)/header/sales-receipt/components/receipt-button";
import { PaymentProps } from "@/lib/props/payment.props";
import { getSendType } from "@/lib/utils/payment.util";
import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

export default function OrderHeader({ payment }: PaymentProps) {
  const sendType = getSendType(payment);
  const { test, orderId, method } = payment;
  const isReceiptButtonVisible = method !== "후불결제";
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

  const headerComponent = (
    <div className={"flex items-center justify-between bg-amber-500 p-2"}>
      <div className="mr-2 flex items-center justify-start font-bold text-amber-900">
        <span>주문번호 : {payment.orderId}</span>
        {isReceiptButtonVisible && (
          <ReceiptButton appEnv={test ? "dev" : "prod"} orderId={orderId} />
        )}
      </div>

      <div className={cn("rounded bg-white p-1 text-xs", sendTypeStyles())}>
        {sendType}
      </div>
    </div>
  );

  if (test) {
    return (
      <div className="flex flex-col">
        {headerComponent}
        <TestBox />
      </div>
    );
  }

  return headerComponent;
}

function TestBox() {
  return (
    <div>
      <div className="bg-rose-400 p-2 text-center font-semibold text-white">
        테스트 환경에서 주문되었습니다.
      </div>
    </div>
  );
}
