"use client";
import { Card } from "@/components/ui/card";
import { bankData } from "@/lib/datas/bank-data";
import { PaymentProps } from "@/lib/props/payment.props";
import { getSendType } from "@/lib/utils/payment.util";
import dayjs from "dayjs";
import React from "react";
import CancelButton from "./buttons/cancel-button";
import ReorderButton from "./buttons/reorder-button";
import { usePathname } from "next/navigation";
import { paths } from "@/paths";
import LabelText from "@/components/(admin)/header/sales-receipt/components/label-text";
import RequestMessage from "./request-message";

export default function OrderFooter({ payment }: PaymentProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith(paths.admin());
  const requestedAtString = dayjs(payment.requestedAt).format(
    "YYYY-MM-DD HH:mm",
  );

  const sendType = getSendType(payment);
  const canCancel =
    !payment.cancel && ["결제대기", "주문확인"].includes(sendType);

  return (
    <Card className="px-5 py-2.5 shadow">
      {isAdmin && (
        <>
          <LabelText
            bothClassName="text-green-700 font-bold"
            label="담당자"
            text={payment.cs?.em?.name}
          />
          <LabelText label="요양기호" text={payment.ykiho} />
          <LabelText label="거래처명칭" text={payment.cs?.myung} />
        </>
      )}
      <LabelText label="주문방법" text={payment.method} />
      <LabelText label="주문일시" text={requestedAtString} />
      <LabelText
        bothClassName="text-blue-500 font-bold"
        label="총 비용"
        text={payment.amount.toLocaleString()}
      />
      <RequestMessage payment={payment} />
      {payment.virtual &&
        payment.sendType === "결제대기" &&
        !payment.cancel && (
          <Card className="mt-2 flex flex-col bg-rose-100 p-4">
            <div className="text-center font-bold text-blue-900">가상계좌</div>
            <LabelText label="은행" text={bankData[payment.virtual.bankCode]} />
            <LabelText label="계좌번호" text={payment.virtual?.accountNumber} />
            <LabelText
              label="만료일시"
              text={dayjs(payment.virtual.dueDate).format(
                "YYYY-MM-DD HH:mm:ss",
              )}
            />
          </Card>
        )}

      <div className="flex gap-1">
        {((!isAdmin && canCancel) || (isAdmin && !payment.cancel)) && (
          <CancelButton payment={payment} />
        )}

        {!isAdmin && <ReorderButton paymentItems={payment.paymentItems!} />}
      </div>
    </Card>
  );
}
