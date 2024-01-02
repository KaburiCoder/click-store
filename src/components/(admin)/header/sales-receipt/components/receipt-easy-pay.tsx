import React from "react";
import LabelText from "./label-text";
import { TossApiResultProps } from "@/lib/props/toss-api-result.props";

export default function ReceiptEasyPay({
  tossResult: { easyPay },
}: TossApiResultProps) {
  const { amount, discountAmount, provider } = easyPay!;
  return (
    <>
      <LabelText label="간편결제" text={provider} />
    </>
  );
}
