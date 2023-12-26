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
import { getCsByYkiho, getYkihos } from "./cs.service";
import { AdminSearchBarData } from "@/store/admin-search-bar.store";
import dayjs from "dayjs";
import { numericStringRegex } from "@/lib/utils/regex";

const DISP_ITEM_COUNT = 6;

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

async function addOtherTableInfoToPayments(payments: Payment[]) {
  for (const p of payments) {
    // cs 추가
    p.cs = await getCsByYkiho(p.ykiho);

    // product 추가
    if (!p.paymentItems) continue;
    for (const pi of p.paymentItems) {
      pi.pd = await getFirstProduct({ where: { webPaymentItemId: pi.id } });
    }
  }
}

export async function getAdminPaymentsWithItems({
  page,
  adminSearch,
}: {
  page: number;
  adminSearch: AdminSearchBarData;
}): Promise<PaymentsWithPage> {
  const { dateFrom, dateTo, manager, searchString } = adminSearch;
  const sDate = dayjs(dayjs(dateFrom).format("YYYY-MM-DD 00:00:00")).toDate();
  const eDate = dayjs(dayjs(dateTo).format("YYYY-MM-DD 23:59:59")).toDate();
  const ykihos = manager
    ? await getYkihos({ where: { emCode: manager } })
    : await getYkihos();

  let orderId: string | undefined;
  let customerYkihos: string[] | undefined;
  if (searchString) {
    if (numericStringRegex.test(searchString)) {
      orderId = searchString;
    } else {
      customerYkihos = await getYkihos({
        where: {
          myung: {
            startsWith: searchString,
          },
        },
      });
    }
  }

  const payments = await db.payment.findMany({
    where: {
      AND: [
        {
          requestedAt: orderId
            ? undefined
            : {
                gte: sDate,
              },
        },
        {
          requestedAt: orderId
            ? undefined
            : {
                lte: eDate,
              },
        },
        {
          ykiho: {
            in: ykihos,
          },
        },
        {
          ykiho: customerYkihos && {
            in: customerYkihos,
          },
        },
      ],
      orderId: orderId,
    },
    include: { paymentItems: true, virtual: true },
    orderBy: { id: "desc" },
    skip: DISP_ITEM_COUNT * (page - 1),
    take: DISP_ITEM_COUNT,
  });

  const newPayments = payments as Payment[];
  await addOtherTableInfoToPayments(newPayments);

  return {
    page: page,
    isLast: payments.length < DISP_ITEM_COUNT,
    payments: newPayments,
  };
}

export async function getPaymentsWithItems({
  page,
  adminSearch,
}: {
  page: number;
  adminSearch?: AdminSearchBarData;
}): Promise<PaymentsWithPage> {
  const user = await getUser();
  const payments = await db.payment.findMany({
    where: {
      ykiho: user?.ykiho,
    },
    include: { paymentItems: true, virtual: true },
    orderBy: { id: "desc" },
    skip: DISP_ITEM_COUNT * (page - 1),
    take: DISP_ITEM_COUNT,
  });

  if (adminSearch) {
  }

  const newPayments = payments as Payment[];
  await addOtherTableInfoToPayments(newPayments);

  return {
    page: page,
    isLast: payments.length < DISP_ITEM_COUNT,
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

export async function updateOrdered({
  orderId,
  approvedAt,
}: {
  orderId: string;
  approvedAt: Date;
}) {
  await db.payment.update({
    data: {
      sendType: "주문확인",
      approvedAt,
    },
    where: { orderId },
  });
}
