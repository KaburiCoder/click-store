"use client";
import { Separator } from "@/components/ui/separator";
import { fetchCustomerName } from "@/db/client-queries/fetch-customer-name";
import { fetchTossPaymentOrders } from "@/db/client-queries/fetch-toss-payment-orders";
import { QKey } from "@/db/keys";
import { ReceiptProps } from "@/lib/props/receipt.props";
import { cn } from "@/lib/utils/shadcn.util";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import ReceiptCard from "./components/receipt-card";
import ReceiptProgress from "./components/receipt-progress";
import ErrorText from "@/components/(shared)/error-text";
import ReceiptEasyPay from "./components/receipt-easy-pay";
import ReceiptAmount from "./components/receipt-amount";
import ReceiptBuyInfo from "./components/receipt-buy-info";
import ReceiptHeader from "./components/receipt-header";
import ReceiptLink from "./components/receipt-link";
import ReceiptSkeleton from "./components/receipt-skeleton";
import ReceiptError from "./components/receipt-error";

interface Props extends ReceiptProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SalesReceipt(props: Props) {
  const { tossResult, customerName, isPending } = useQueries(props);
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

  if (isPending) return <ReceiptSkeleton />;
  if (!tossResult) return <></>;

  const { message, receipt, status, cashReceipt } = tossResult;

  const isWaiting = status === "WAITING_FOR_DEPOSIT";

  if (message)
    return <ReceiptError errorMessage={message} setOpen={props.setOpen} />;

  const components: React.JSX.Element[] = [];

  // body
  components.push(
    <>
      <ReceiptHeader
        appEnv={props.appEnv}
        isPrinting={isPrinting}
        tossResult={tossResult}
        onPrintClick={handlePrintClick}
        setOpen={props.setOpen}
      />
      <ReceiptBuyInfo tossResult={tossResult} customerName={customerName} />
    </>,
  );
  if (tossResult.easyPay) {
    components.push(<ReceiptEasyPay tossResult={tossResult} />);
  }
  if (tossResult.card) {
    components.push(<ReceiptCard tossResult={tossResult} />);
  }
  if (isWaiting) {
    components.push(<ErrorText errorMessage="결제 대기 상태입니다." />);
  } else {
    components.push(<ReceiptProgress tossResult={tossResult} />);
  }
  components.push(
    <>
      <ReceiptAmount tossResult={tossResult} />
      {!isPrinting && !isWaiting && (
        <>
          <ReceiptLink
            className="bg-blue-500 hover:opacity-90"
            url={receipt.url}
          >
            영수증 세부 조회
          </ReceiptLink>
          {cashReceipt && (
            <ReceiptLink
              className="bg-green-600 hover:opacity-90"
              url={cashReceipt.receiptUrl}
            >
              현금영수증 조회
            </ReceiptLink>
          )}
        </>
      )}
    </>,
  );

  return (
    <div
      className={cn("flex flex-col text-slate-700", isPrinting ? "w-80" : "")}
      ref={printRef}
    >
      {components.map((component, i) => (
        <Fragment key={i}>
          {i !== 0 && <Separator className="my-2" />}
          {component}
        </Fragment>
      ))}
    </div>
  );
}

const useQueries = ({ appEnv, orderId }: ReceiptProps) => {
  const { data: tossResult, isPending } = useQuery({
    queryKey: [QKey.fetchPaymentsOrders, appEnv, orderId],
    queryFn: () => fetchTossPaymentOrders({ appEnv, orderId }),
    enabled: !!orderId,
    gcTime: 0,
  });
  const { data: customerName } = useQuery({
    queryKey: [QKey.fetchCustomerName, orderId],
    queryFn: () => fetchCustomerName({ orderId }),
    enabled: !!orderId,
    gcTime: 0,
  });

  return { tossResult, customerName, isPending };
};
