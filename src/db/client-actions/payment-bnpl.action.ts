"use server";
import { z } from "zod";
import { savePayment } from "../services/payment.service";
import { deleteCartItems } from "../services/cart-item.service";

const paymentSchema = z.object({
  paymentType: z.string(),
  orderId: z.string(),
  orderName: z.string(),
  paymentKey: z.string(),
  sendType: z.string(),
  method: z.string(),
  amount: z.number(),
  quantity: z.number(),
  requestedAt: z.date().nullable(),
  approvedAt: z.date().nullable(),
  paymentItems: z.array(z.custom<PaymentItemType>()).min(1),
  cartItemIds: z.array(z.number()),
});

const paymentItemSchema = z.object({
  code: z.string(),
  name: z.string(),
  fit: z.boolean(),
  quantity: z.number(),
  amount: z.number(),
});

type PaymentType = z.infer<typeof paymentSchema>;
type PaymentItemType = z.infer<typeof paymentItemSchema>;

export async function paymentBNPLAction(data: PaymentType) {
  const result = paymentSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().formErrors,
    };
  }

  await savePayment(Object.assign(data));
  await deleteCartItems(data.cartItemIds);
}
