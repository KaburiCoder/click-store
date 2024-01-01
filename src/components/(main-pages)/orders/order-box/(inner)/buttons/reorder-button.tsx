import { Button } from "@/components/ui/button";
import YnDialog from "@/components/ui/custom/yn-dialog";
import { reorderAction } from "@/db/client-actions/reorder.action";
import { PaymentItem } from "@/db/models/payment-item";
import { cn } from "@/lib/utils/shadcn.util";
import useCartStore from "@/store/cart.store";

import React from "react";

interface Props {
  className?: string;
  paymentItems: PaymentItem[];
}

export default function ReorderButton({ paymentItems, className }: Props) {
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
        <Button variant={"green"} className={cn("my-2 w-full", className)}>
          재주문
        </Button>
      }
      onYes={handleReorder}
    />
  );
}
