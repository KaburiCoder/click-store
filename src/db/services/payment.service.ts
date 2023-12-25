"use server";
import db from "@/db/db";
import { getUser } from "@/lib/utils/user.util";
import { Payment } from "@/db/models/payment";
import {
  deleteProducts,
  getFirstProduct,
  saveProducts,
} from "./product.service";
import { PaymentsWithPage } from "../interfaces/payments-with-page";
import { getCsByYkiho } from "./cs.service";

export async function savePayment(payment: Partial<Payment>) {
  const user = await getUser();

  if (!user?.ykiho) {
    throw new Error("계정정보가 없음");
  }

  const paymentItems = payment.paymentItems!.map((pi) => ({
    amount: pi.amount,
    code: pi.code,
    fit: pi.fit,
    name: pi.name,
    quantity: pi.quantity,
  }));

  const savedPayment = await db.payment.create({
    data: {
      ykiho: user?.ykiho,
      orderId: payment.orderId!,
      paymentKey: payment.paymentKey!,
      quantity: payment.quantity!,
      sendType: payment.sendType!,
      method: payment.method!,
      amount: payment.amount!,
      requestedAt: payment.requestedAt,
      approvedAt: payment.approvedAt,
      cancel: false,
      paymentItems: {
        createMany: {
          data: paymentItems,
        },
      },
      virtual: payment.virtual && {
        create: {
          accountNumber: payment.virtual.accountNumber,
          bankCode: payment.virtual.bankCode,
          customerName: payment.virtual.customerName,
          dueDate: payment.virtual.dueDate,
        },
      },
    },
  });

  const savedPaymentItems = await db.paymentItem.findMany({
    where: { paymentId: savedPayment.id },
  });

  await saveProducts({
    payment: savedPayment,
    paymentItems: savedPaymentItems,
    webBNPL: true,
  });
}

export async function getPaymentWithVirtual(orderId: string) {
  const data = await db.payment.findFirst({
    where: { orderId },
    include: {
      virtual: true,
    },
  });

  return data;
}

export async function getPaymentsWithItems({
  page,
}: {
  page: number;
}): Promise<PaymentsWithPage> {
  const dispItemCount = 6;
  const user = await getUser();
  const payments = await db.payment.findMany({
    where: {
      ykiho: user?.ykiho,
    },
    include: { paymentItems: true, virtual: true },
    orderBy: { id: "desc" },
    skip: dispItemCount * (page - 1),
    take: dispItemCount,
  });

  const newPayments: Payment[] = Object.assign(payments);

  for (const p of newPayments) {
    // cs 추가
    p.cs = await getCsByYkiho(p.ykiho);

    // product 추가
    if (!p.paymentItems) continue;
    for (const pi of p.paymentItems) {
      pi.pd = await getFirstProduct({ where: { webPaymentItemId: pi.id } });
    }
  }

  return {
    page: page,
    isLast: payments.length < dispItemCount,
    payments: newPayments,
  };
}

export async function getPaymentByPaymentKey(
  paymentKey: string,
): Promise<Payment> {
  const payment = await db.payment.findFirst({
    where: {
      paymentKey,
    },
  });

  return payment as Payment;
}

export async function cancelPayment(id: number) {
  const result = await db.payment.update({
    data: {
      cancel: true,
    },
    where: {
      id,
    },
    include: {
      paymentItems: true,
    },
  });
  if (result.paymentItems) {
    const piIds = result.paymentItems.map((pi) => pi.id);
    await deleteProducts(piIds);
  }
}
