"use server";
import dayjs from "dayjs";
import db from "../db";
import { SaveProductsDto } from "../dto/product/save-products.dto";
import { getJisa } from "@/lib/utils/user.util";
import { saveProductLogs } from "./product-log.service";
import { dbNow, subtract9HoursByObject } from "@/lib/utils/date.util";
import { AdminSearchBarData } from "@/store/admin-search-bar.store";
import {
  getCsByYkiho,
  getYkihosByManager,
  getYkihosByMyung,
} from "./cs.service";
import { Product } from "../models/product";
import { Prisma } from "@/prisma/client";
import { getLatestPls } from "./product-list-sub.service";
import { getEm } from "./em.service";
import { getPaymentItemWithPayment } from "./payment-item.service";
import { AdminInfinitySearchDto } from "../dto/payment/admin-infinity-search.dto";

const DISP_ITEM_COUNT = 6;

export async function saveProducts({
  payment,
  paymentItems,
  webBNPL,
}: SaveProductsDto) {
  const jisa = await getJisa();

  const products = await db.$transaction(
    paymentItems.map((item) => {
      return db.product.create({
        data: {
          jisa,
          clCode: item.code!,
          csCode: payment.ykiho!,
          ctTel: "",
          count: item.quantity!,
          receive: "000",
          receiveYmd: dayjs(payment.requestedAt).format("YYYYMMDD"),
          sell: "0",
          check: "0",
          check2: "1",
          web: true,
          webPaymentItemId: item.id!,
          webBNPL,
          bigo: "",
          orderCheck: "",
          rgb: "",
          seller: "",
          sellYmd: "",
          createDt: dbNow(),
        },
      });
    }),
  );

  await saveProductLogs({ products, logType: "A" });
}

export async function getFirstProduct({
  where,
}: {
  where: Prisma.ProductWhereInput;
}): Promise<Product> {
  const product = (await db.product.findFirst({
    where,
  })) as Product;

  return product;
}

export async function deleteProducts(paymentItemIds: number[]) {
  const where: Prisma.ProductWhereInput = {
    webPaymentItemId: { in: paymentItemIds },
  };

  await db.$transaction(async (db) => {
    const products = await db.product.findMany({ where });
    await db.product.deleteMany({ where });
    await saveProductLogs({ products, logType: "D" });
  });
}

export async function getAdminProducts({
  page,
  adminSearch: { dateFrom, dateTo, manager, searchString, showAdmin },
}: AdminInfinitySearchDto) {
  const ykihos = await getYkihosByManager(manager, showAdmin);
  const customerYkihos = searchString
    ? await getYkihosByMyung(searchString)
    : undefined;

  const result = (await db.product.findMany({
    where: {
      csCode: { in: ykihos },
      AND: [
        {
          csCode: customerYkihos ? { in: customerYkihos } : undefined,
        },
        {
          receiveYmd: { gte: dayjs(dateFrom).format("YYYYMMDD") },
        },
        {
          receiveYmd: { lte: dayjs(dateTo).format("YYYYMMDD") },
        },
      ],
    },
    orderBy: { createDt: "desc" },
    skip: DISP_ITEM_COUNT * (page - 1),
    take: DISP_ITEM_COUNT,
  })) as Product[];

  for (const product of result) {
    product.pls = (await getLatestPls({ smCode: product.clCode })) ?? undefined;
    product.cs = await getCsByYkiho(product.csCode);
    product.paymentItem = await getPaymentItemWithPayment({
      id: product.webPaymentItemId,
      paymentSelect: { orderId: true },
    });
    product.em = await getEm(product.cs.emCode!);
  }

  subtract9HoursByObject(result);

  return {
    page,
    isLast: result.length < DISP_ITEM_COUNT,
    products: result,
  };
}

export async function updateOrderCheck({
  productAuto,
  orderCheck,
}: {
  productAuto: number;
  orderCheck: string;
}) {
  return await db.product.update({
    data: {
      orderCheck,
    },
    where: {
      auto: productAuto,
    },
  });
}

export async function updateSeller({
  productAuto,
  seller,
}: {
  productAuto: number;
  seller: string;
}) {
  return await db.product.update({
    data: { seller },
    where: { auto: productAuto },
  });
}
