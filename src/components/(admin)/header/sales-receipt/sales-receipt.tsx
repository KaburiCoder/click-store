"use client";
import { Separator } from "@/components/ui/separator";
import { fetchCustomerName } from "@/db/client-queries/fetch-customer-name";
import { fetchTossPaymentOrders } from "@/db/client-queries/fetch-toss-payment-orders";
import { QKey } from "@/db/keys";
import { cardData } from "@/lib/datas/card-data";
import { ReceiptProps } from "@/lib/props/receipt.props";
import { cn } from "@/lib/utils/shadcn.util";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { LuPrinter } from "react-icons/lu";
import LabelText from "./components/label-text";
import ReceiptCard from "./receipt-card";
import ReceiptProgress from "./components/receipt-progress";
import ErrorText from "@/components/(shared)/error-text";

export default function SalesReceipt(props: ReceiptProps) {
  const { tossResult, customerName } = useQueries(props);
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: () => setIsPrinting(false),
  });

  function handlePrintClick() {
    setIsPrinting(true);
    setTimeout(() => handlePrint(), 10);
  }

  if (!tossResult) return <></>;

  const {
    message,
    orderId,
    card,
    suppliedAmount,
    taxFreeAmount,
    vat,
    balanceAmount,
    totalAmount,
    approvedAt,
    cancels,
    receipt,
  } = tossResult;

  if (message) return <ErrorText errorMessage={message} />;

  return (
    <div
      className={cn("flex flex-col text-slate-700", isPrinting ? "w-80" : "")}
      ref={printRef}
    >
      {/* title */}
      <div className="flex justify-between pb-8 pt-2">
        <h3 className="text-xl">신용·체크카드 매출전표</h3>
        <button
          className={isPrinting ? "hidden" : ""}
          onClick={handlePrintClick}
        >
          <LuPrinter className="h-6 w-6 text-blue-500 hover:text-blue-800" />
        </button>
      </div>
      {/* body */}
      <LabelText label="주문번호" text={orderId} />
      <LabelText label="구매자" text={customerName} />
      <LabelText label="구매상품" text={tossResult.orderName} />
      <Separator className="my-2" />

      {tossResult.card && (
        <>
          <ReceiptCard tossResult={tossResult} />
          <Separator className="my-2" />
        </>
      )}

      <ReceiptProgress tossResult={tossResult} />

      <Separator className="my-2" />
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
        text={`${totalAmount.toLocaleString()}원`}
      />
      {!isPrinting && (
        <a
          className="mt-2 rounded bg-blue-500 p-2 text-center text-sm text-white"
          href={receipt.url}
          target="_blank"
        >
          영수증 세부 조회
        </a>
      )}
    </div>
  );
}

const useQueries = ({ appEnv, orderId }: ReceiptProps) => {
  const { data: tossResult } = useQuery({
    queryKey: [QKey.fetchPaymentsOrders, appEnv, orderId],
    queryFn: () => fetchTossPaymentOrders({ appEnv, orderId }),
    enabled: !!orderId,
  });
  const { data: customerName } = useQuery({
    queryKey: [QKey.fetchCustomerName, orderId],
    queryFn: () => fetchCustomerName({ orderId }),
    enabled: !!orderId,
  });

  return { tossResult, customerName };
};
