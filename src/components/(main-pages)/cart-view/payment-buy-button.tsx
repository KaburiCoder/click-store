import ButtonL from "@/components/ui/custom/button-l";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PaymentMessageModal from "./payment-message-modal";
import { usePgMessageQuery } from "@/lib/hooks/use-pg-message-query";
import { excludePgMessage } from "@/db/services/cs.service";

export default function PaymentBuyButton() {
  const { checkBNPL, selectedCartItems, loading, cartItemsUtil, fetchPayment } =
    useCartView({
      isPayment: true,
    });
  const [pending, setPending] = useState(false);
  const { push } = useRouter();
  const { pgMessage } = usePgMessageQuery();
  const [open, setOpen] = useState(false);
  const isBnpl = checkBNPL || !cartItemsUtil?.totalPrice;

  function handleBuy(): void {
    if (!cartItemsUtil) return;
    if ((cartItemsUtil.cartItemIds.length ?? 0) === 0) return;

    if (isBnpl) {
      fetchPayment({
        method: "후불결제",
        sendType: "결제대기",
        paymentType: "BNPL",
      });
    } else {
      push(paths.payment());
    }
  }

  async function handleClick() {
    setPending(true);
    const excludeMsg = await excludePgMessage();
    if (excludeMsg || isBnpl || !pgMessage) {
      handleBuy();
    } else {
      setOpen(true);
    }
    setPending(false);
  }

  return (
    <>
      <ButtonL
        className="h-16 w-full min-w-[10rem] font-bold"
        onClick={handleClick}
        disabled={(selectedCartItems?.length ?? 0) === 0}
        isLoading={loading || pending}
      >
        구매하기
      </ButtonL>
      <PaymentMessageModal
        open={open}
        setOpen={setOpen}
        pgMessageHtml={pgMessage}
        onContinue={handleBuy}
      />
    </>
  );
}
