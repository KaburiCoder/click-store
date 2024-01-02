import React from "react";
import LabelText from "./label-text";
import { cardData } from "@/lib/datas/card-data";
import { TossApiResultProps } from "@/lib/props/toss-api-result.props";

export default function ReceiptCard({
  tossResult: { card },
}: TossApiResultProps) {
  if (!card) return <></>;

  return (
    <>
      <LabelText label="카드종류" text={cardData[card?.issuerCode ?? ""]} />
      <LabelText label="카드번호" text={card?.number} />
      <LabelText
        label="할부"
        text={
          card?.installmentPlanMonths
            ? `${card.installmentPlanMonths}개월`
            : "일시불"
        }
      />
      <LabelText label="승인번호" text={card?.approveNo} />
    </>
  );
}
