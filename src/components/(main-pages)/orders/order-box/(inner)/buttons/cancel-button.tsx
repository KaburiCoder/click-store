import ScreenLoading from "@/components/(shared)/screen-loading";
import { Button } from "@/components/ui/button";
import YnDialog from "@/components/ui/custom/yn-dialog";
import cancelOrderAction from "@/db/client-actions/cancel-order.action";
import { QKey } from "@/db/keys";
import { Payment } from "@/db/models/payment";
import { getSendType } from "@/lib/utils/payment.util";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import RefundDialog from "./refund-dialog";
import { cn } from "@/lib/utils/shadcn.util";
import CancelDialog from "@/components/ui/custom/cancel-dialog";

interface Props {
  className?: string;
  payment: Payment;
}

export default function CancelButton({ className, payment }: Props) {
  const sendType = getSendType(payment);
  const isRefund = payment.method === "가상계좌" && sendType !== "결제대기";

  const { isPending, cancelOrder } = useCancel(payment);

  return (
    <>
      {isPending && <ScreenLoading />}
      {isRefund ? (
        <RefundDialog
          payment={payment}
          title="취소(환불)"
          triggerComponent={
            <Button
              variant={"destructive"}
              className={cn("my-2 w-full", className)}
            >
              취소(환불)
            </Button>
          }
        />
      ) : (
        <CancelDialog
          title="주문 취소"
          content="주문을 취소하시겠습니까?"
          triggerComponent={
            <Button
              variant={"destructive"}
              className={cn("my-2 w-full", className)}
            >
              취소
            </Button>
          }
          onYes={cancelOrder}
        />
      )}
    </>
  );
}

const useCancel = (payment: Payment) => {
  const { error, isPending, isSuccess, data, mutate } = useMutation({
    mutationFn: cancelOrderAction,
  });
  const queryClient = useQueryClient();

  function cancelOrder() {
    mutate({
      cancelReason: ".",
      paymentId: payment.id!,
      paymentKey: payment.paymentKey,
    });
  }

  useEffect(() => {
    if (isSuccess)
      queryClient.refetchQueries({ queryKey: [QKey.ordersInfiniteQuery] });
  }, [isSuccess, queryClient]);

  useEffect(() => {
    let errorMessage = error?.message;
    if (!errorMessage) {
      errorMessage = data?.errors?.join(", ");
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [error, data?.errors]);

  return { isPending, cancelOrder };
};
