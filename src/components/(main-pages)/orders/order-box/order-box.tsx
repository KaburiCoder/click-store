import { Card } from "@/components/ui/card";
import React from "react";
import OrderHeader from "./(inner)/header";
import OrderBody from "./(inner)/body";
import OrderFooter from "./(inner)/footer";
import { PaymentProps } from "@/lib/props/payment.props";

export default function OrderBox({ payment }: PaymentProps) {
  return (
    <Card className="flex h-full flex-col justify-between overflow-hidden shadow">
      <OrderHeader payment={payment} />
      <OrderBody payment={payment} />
      <OrderFooter payment={payment} />
    </Card>
  );
}
