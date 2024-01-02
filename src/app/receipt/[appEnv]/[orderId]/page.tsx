import SalesReceipt from "@/components/(admin)/header/sales-receipt/sales-receipt";
import { ReceiptProps } from "@/lib/props/receipt.props";
import React from "react";

interface Props {
  params: ReceiptProps;
}
export default function ReceiptOrdersPage({
  params: { appEnv, orderId },
}: Props) {
  return <SalesReceipt appEnv={appEnv} orderId={orderId} />;
}
