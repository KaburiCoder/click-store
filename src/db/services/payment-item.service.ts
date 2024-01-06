import { Prisma } from "@/prisma/client";
import db from "../db";
import { PaymentItem } from "../models/payment-item";

export async function deletePaymentItems(...ids: number[]) {
  return await db.paymentItem.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
}

export interface GetPaymentWithItemArgs {
  id: number | null;
  paymentSelect?: Prisma.PaymentSelect;
}

export async function getPaymentItemWithPayment({
  id,
  paymentSelect,
}: GetPaymentWithItemArgs) {
  if (!id) return;

  return (await db.paymentItem.findFirst({
    include: {
      payment: { select: paymentSelect },
    },
    where: { id },
  })) as PaymentItem;
}
