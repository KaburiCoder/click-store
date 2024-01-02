import React from "react";
import SubTextWrapper from "./sub-text-wrapper";
import LabelText from "./label-text";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import dayjs from "dayjs";

interface Props {
  tossResult: TossApiResult;
}

export default function ReceiptProgress({
  tossResult: { totalAmount, approvedAt, cancels },
}: Props) {
  return (
    <>
      <SubTextWrapper text={dayjs(approvedAt).format("YYYY-MM-DD HH:mm:ss")}>
        <LabelText label="승인" text={`${totalAmount.toLocaleString()}원`} />
      </SubTextWrapper>
      {cancels?.map((cancel) => (
        <SubTextWrapper
          key={cancel.transactionKey}
          text={dayjs(cancel.canceledAt).format("YYYY-MM-DD HH:mm:ss")}
        >
          <LabelText
            labelClassName="text-red-500"
            label="취소"
            text={`${cancel.cancelAmount.toLocaleString()}원`}
          />
        </SubTextWrapper>
      ))}
    </>
  );
}
