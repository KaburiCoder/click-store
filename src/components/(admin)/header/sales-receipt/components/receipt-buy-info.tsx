import { TossApiResultProps } from "@/lib/props/toss-api-result.props";
import React from "react";
import LabelText from "./label-text";

interface Props extends TossApiResultProps {
  customerName: string | undefined;
}

export default function ReceiptBuyInfo({
  customerName,
  tossResult: { orderId, orderName, method },
}: Props) {
  return (
    <>
      <LabelText label="주문번호" text={orderId} />
      <LabelText label="구매자" text={customerName} />
      <LabelText label="구매상품" text={orderName} />
      <LabelText label="결제방식" text={method} />
    </>
  );
}
