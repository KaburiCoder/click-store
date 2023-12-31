"use server";
import { z } from "zod";
import { PaymentItem } from "../models/payment-item";
import { savePayment } from "../services/payment.service";
import { confirmTossPayment } from "../services/toss-payments/confirm-toss-payment";

const schema = z.object({
  amount: z.number(),
  quantity: z.number(),
  orderId: z.string(),
  paymentKey: z.string(),
  paymentItems: z.array(z.custom<PaymentItem>()),
});

type PaymentActionType = z.infer<typeof schema>;

export async function paymentAction(args: PaymentActionType) {
  const { amount, quantity, orderId, paymentKey, paymentItems } = args;
  const result = schema.safeParse(args);

  if (!result.success) {
    return {
      errors: result.error.flatten().formErrors,
    };
  }

  const data = await confirmTossPayment({
    amount,
    orderId,
    paymentKey,
  });

  if (data.message) {
    return {
      errors: [data.message],
    };
  }

  const sendType =
    data.status === "WAITING_FOR_DEPOSIT" ? "결제대기" : "주문확인";

  try {
    await savePayment({
      method: data.method!,
      amount,
      orderId,
      paymentKey,
      cancel: false,
      quantity,
      sendType,
      paymentItems,
      requestedAt: data.requestedAt,
      approvedAt: data.approvedAt,
      virtual: data.virtualAccount ?? undefined,
    });
  } catch (err: any) {
    return {
      errors: [err.message],
    };
  }
}
