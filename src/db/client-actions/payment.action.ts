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

interface PaymentActionArgs {
  data: PaymentActionType;
  orderRequestMessage?: string;
}

export async function paymentAction({
  data,
  orderRequestMessage,
}: PaymentActionArgs) {
  const { amount, quantity, orderId, paymentKey, paymentItems } = data;
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().formErrors,
    };
  }

  const confirmData = await confirmTossPayment({
    amount,
    orderId,
    paymentKey,
  });

  if (confirmData.message) {
    return {
      errors: [confirmData.message],
    };
  }

  const sendType =
    confirmData.status === "WAITING_FOR_DEPOSIT" ? "결제대기" : "주문확인";

  try {
    await savePayment({
      payment: {
        method: confirmData.method!,
        amount,
        orderId,
        paymentKey,
        cancel: false,
        quantity,
        sendType,
        paymentItems,
        requestedAt: confirmData.requestedAt,
        approvedAt: confirmData.approvedAt,
        virtual: confirmData.virtualAccount ?? undefined,
      },
      orderRequestMessage,
    });
  } catch (err: any) {
    return {
      errors: [err.message],
    };
  }
}
