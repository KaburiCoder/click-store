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
import {
  getCsByYkiho,
  getYkihosByManager,
  getYkihosByMyung,
} from "./cs.service";
import dayjs from "dayjs";
import { numericStringRegex } from "@/lib/utils/regex";
import { add9Hours, subtract9HoursByObject } from "@/lib/utils/date.util";
import { APP_ENV } from "@/configs/config";
import { GetCustomerNameDto } from "../dto/payment/get-customer-name.dto";
import { getEm } from "./em.service";
import { AdminInfinitySearchDto } from "../dto/payment/admin-infinity-search.dto";
import { Prisma } from "@/prisma/client";

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
      requestedAt: add9Hours(payment.requestedAt),
      approvedAt: add9Hours(payment.approvedAt),
      customerName: user.name,
      cancel: false,
      test: APP_ENV === "dev" ? 1 : null,
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
          dueDate: add9Hours(payment.virtual.dueDate) as Date,
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

  return subtract9HoursByObject(data);
}

async function addOtherTableInfoToPayments(
  payments: Payment[],
  isAdmin?: boolean,
) {
  for (const p of payments) {
    // cs 추가
    p.cs = await getCsByYkiho(p.ykiho);

    if (isAdmin && p.cs) {
      // em 추가
      p.cs.em = await getEm(p.cs.emCode!);
    }
  }
  await addProductOfPayments(payments);
}

export async function addProductOfPayments(payments: Payment[]) {
  for (const p of payments) {
    if (!p.paymentItems) continue;
    for (const pi of p.paymentItems) {
      pi.pd = await getFirstProduct({ where: { webPaymentItemId: pi.id } });
    }
  }
}

export async function getAdminPaymentsWithItems({
  page,
  adminSearch,
}: AdminInfinitySearchDto): Promise<PaymentsWithPage> {
  const { dateFrom, dateTo, manager, searchString } = adminSearch;
  const sDate = add9Hours(dayjs(dateFrom).format("YYYY-MM-DD 00:00:00"));
  const eDate = add9Hours(dayjs(dateTo).format("YYYY-MM-DD 23:59:59"));
  const ykihos = await getYkihosByManager(manager, adminSearch.showAdmin);

  let orderId: string | undefined;
  let customerYkihos: string[] | undefined;
  if (searchString) {
    if (numericStringRegex.test(searchString)) {
      orderId = searchString;
    } else {
      customerYkihos = await getYkihosByMyung(searchString);
    }
  }

  const payments = await db.payment.findMany({
    where: {
      AND: [
        { requestedAt: orderId ? undefined : { gte: sDate } },
        { requestedAt: orderId ? undefined : { lte: eDate } },
        { ykiho: { in: ykihos } },
        { ykiho: customerYkihos && { in: customerYkihos } },
      ],
      orderId: orderId,
    },
    include: { paymentItems: true, virtual: true },
    orderBy: { id: "desc" },
    skip: DISP_ITEM_COUNT * (page - 1),
    take: DISP_ITEM_COUNT,
  });

  const newPayments = payments as Payment[];
  await addOtherTableInfoToPayments(newPayments, true);
  subtract9HoursByObject(newPayments);
  return {
    page: page,
    isLast: payments.length < DISP_ITEM_COUNT,
    payments: newPayments,
  };
}

export async function getPaymentsWithItems({
  page,
}: {
  page: number;
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

  const newPayments = payments as Payment[];
  await addOtherTableInfoToPayments(newPayments);
  subtract9HoursByObject(newPayments);
  return {
    page: page,
    isLast: payments.length < DISP_ITEM_COUNT,
    payments: newPayments,
  };
}

export async function getPaymentByPaymentKey(
  paymentKey: string,
  include?: { cs?: boolean; em?: boolean },
): Promise<Payment> {
  const payment = (await db.payment.findFirst({
    where: {
      paymentKey,
    },
  })) as Payment;

  if (include && (include.cs || include.em)) {
    payment.cs = await getCsByYkiho(payment.ykiho);
    if (payment.cs && include.em) {
      payment.cs.em = await getEm(payment.cs.emCode!);
    }
  }

  return payment as Payment;
}

export async function cancelPaymentByOrderId(orderId: string) {
  const result = await db.payment.findFirst({
    select: { id: true },
    where: { orderId },
  });
  if (result?.id) {
    await cancelPayment(result.id);
  }
}

export async function cancelPayment(id: number) {
  const result = await db.payment.update({
    data: { cancel: true },
    where: { id },
    include: { paymentItems: true },
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
      approvedAt: add9Hours(approvedAt),
    },
    where: { orderId },
  });
}

export async function getCustomerName({
  paymentKey,
  orderId,
}: GetCustomerNameDto) {
  const result = await db.payment.findFirst({
    select: { customerName: true },
    where: {
      OR: [{ paymentKey }, { orderId }],
    },
  });

  return result?.customerName;
}

export async function getImcompletedPayments() {
  const payments = await db.payment.findMany({
    where: {
      cancel: false,
      sendType: { not: "배송완료" },
    },
    include: { paymentItems: true, virtual: true },
  });

  return payments as Payment[];
}

export async function getJoinedPayments() {
  const payments = await db.payment.findMany({
    include: { paymentItems: true, virtual: true },
  });

  return payments as Payment[];
}

function _updateComplete(where: Prisma.PaymentWhereUniqueInput) {
  return db.payment.update({
    data: { sendType: "배송완료" },
    where,
  });
}

export async function updateComplete(where: Prisma.PaymentWhereUniqueInput) {
  return _updateComplete(where);
}

/**
 * 배송 일괄 완료 처리
 * @param payments
 * @returns Payment[]
 */
export async function updateCompleteByPayments(payments: Payment[]) {
  return await db.$transaction(
    payments.map((payment) => _updateComplete({ id: payment.id })),
  );
}

/**
 * 배송 일괄 취소 처리
 * @param payments
 * @returns Payment[]
 */
export async function cancelByPayments(payments: Payment[]) {
  for (const payment of payments) {
    await cancelPayment(payment.id!);
  }
}
