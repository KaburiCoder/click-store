import { Button } from "@/components/ui/button";
import YnDialog from "@/components/ui/custom/yn-dialog";
import { reorderAction } from "@/db/client-actions/reorder.action";
import { PaymentItem } from "@/db/models/payment-item";
import useCartStore from "@/store/cart.store";

import React from "react";

interface Props {
  paymentItems: PaymentItem[];
}

export default function ReorderButton({ paymentItems }: Props) {
  const { toggleItemsCountChanged } = useCartStore();
  function handleReorder(): void {
    reorderAction(paymentItems).then(() => {
      toggleItemsCountChanged();
    });
  }

  return (
    <YnDialog
      title="재주문"
      content="상품을 재주문 하시겠습니까?"
      triggerComponent={
        <Button variant={"green"} className="my-2 w-full">
          재주문
        </Button>
      }
      onYes={handleReorder}
    />
  );
}
