"use server";
import dayjs from "dayjs";
import db from "../db";
import { SaveProductsDto } from "../dto/product/save-products.dto";
import { getJisa } from "@/lib/utils/user.util";
import { saveProductLogs } from "./product-log.service";
import { Product } from "@prisma/client";
import { dbNow } from "@/lib/utils/date.util";

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
  where: Partial<Product>;
}): Promise<Product> {
  const product = (await db.product.findFirst({
    where,
  })) as Product;

  return product;
}

export async function deleteProducts(paymentItemIds: number[]) {
  return await db.product.deleteMany({
    where: {
      webPaymentItemId: {
        in: paymentItemIds,
      },
    },
  });
}
