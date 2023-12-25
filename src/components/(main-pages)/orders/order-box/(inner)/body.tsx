import { PaymentProps } from "@/lib/props/payment.props";
import React from "react";
import OrderBodyItem from "./body-item";

export default function OrderBody({ payment }: PaymentProps) {
  const itemComponents = payment.paymentItems?.map((item, i) => {
    return (
      <ul key={item.id}>
        <OrderBodyItem
          item={item}
          setSeparator={i > 0}
          cancel={payment.cancel}
        />
      </ul>
    );
  });

  return (
    <div className="flex flex-1 flex-col overflow-auto p-4">
      {itemComponents}
    </div>
  );
}
