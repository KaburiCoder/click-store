import { TossApiResultProps } from "@/lib/props/toss-api-result.props";
import React from "react";
import LabelText from "./label-text";

export default function ReceiptAmount({ tossResult }: TossApiResultProps) {
  const { status, suppliedAmount, vat, taxFreeAmount, totalAmount } =
    tossResult;
  return (
    <>
      <LabelText
        label="공급가액"
        text={`${suppliedAmount.toLocaleString()}원`}
      />
      {/* <LabelText
  label="면세가액"
  text={`${taxFreeAmount.toLocaleString()}원`}
/> */}
      <LabelText label="부가세" text={`${vat.toLocaleString()}원`} />
      <LabelText
        label="과세제외액"
        text={`${taxFreeAmount.toLocaleString()}원`}
      />
      <LabelText
        bothClassName="text-blue-500 font-bold"
        label="합계"
        text={`${status === "CANCELED" ? "0" : totalAmount.toLocaleString()}원`}
      />
    </>
  );
}
