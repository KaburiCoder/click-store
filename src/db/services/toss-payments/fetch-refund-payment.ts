import { getCancelUrl, getTossPaymentsHeaders } from "@/lib/utils/toss-pg.util";
import { z } from "zod";

const schema = z.object({
  paymentKey: z.string(),
  cancelReason: z.string(),
  cancelAmount: z.number(),
  bank: z.string(),
  accountNumber: z.string(),
  holderName: z.string(),
});

type RefundArgs = z.infer<typeof schema>;

export async function fetchRefund({
  paymentKey,
  cancelReason,
  cancelAmount,
  bank,
  accountNumber,
  holderName,
}: RefundArgs) {
  const url = getCancelUrl(paymentKey);
  const refundBody = {
    cancelReason,
    cancelAmount,
    refundReceiveAccount: {
      bank,
      accountNumber,
      holderName,
    },
  };
  const headers = getTossPaymentsHeaders();

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(refundBody),
  });

  const data = await response.json();


  return {
    data,
    refundBody,
  };
}
