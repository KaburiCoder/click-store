import { PaymentProps } from "@/lib/props/payment.props";
import React from "react";

export default function RequestMessage({ payment }: PaymentProps) {
  const paymentItems = payment.paymentItems;
  const pd = paymentItems?.[0].pd;
  return (
    <>
      {pd?.bigo2 && (
        <div className="flex flex-col gap-2 rounded border border-solid border-slate-300 p-2">
          <div className="font-bold text-slate-500">배송요청사항</div>
          <span className="max-h-16 py-1 overflow-y-auto whitespace-pre-line">
            {pd.bigo2}
          </span>
        </div>
      )}
    </>
  );
}
