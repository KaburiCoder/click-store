import { z } from "zod";
import { cancelTossPayment } from "../services/toss-payments/cancel-toss-payment";
import {
  cancelPayment,
  getPaymentByPaymentKey,
} from "../services/payment.service";

const schema = z.object({
  paymentId: z.number(),
  paymentKey: z.string(),
  cancelReason: z.string(),
});

type cancelOrderType = z.infer<typeof schema>;

interface ErrorsResult {
  errors?: string[];
}

export default async function cancelOrderAction(
  args: cancelOrderType,
): Promise<ErrorsResult> {
  const result = schema.safeParse(args);
  const { paymentId, paymentKey, cancelReason } = args;

  if (!result.success) {
    return {
      errors: result.error.flatten().formErrors,
    };
  }

  try {
    const payment = await getPaymentByPaymentKey(paymentKey);
    const isBNPL = payment.method === "후불결제";

    const data = isBNPL
      ? undefined
      : await cancelTossPayment(paymentKey, cancelReason);

    if (isBNPL || data?.status === "CANCELED") {
      await cancelPayment(paymentId);
    } else {
      return {
        errors: [data?.message],
      };
    }
  } catch (error: any) {
    return {
      errors: [error.message],
    };
  }

  return {};
}
