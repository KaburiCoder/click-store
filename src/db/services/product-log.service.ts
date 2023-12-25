import { Product, ProductLog } from "@prisma/client";
import db from "../db";
import { SaveProductLogDto } from "../dto/product-log/save-product-log.dto";
import { SaveProductLogsDto } from "../dto/product-log/save-product-logs.dto";
import { dbNow } from "@/lib/utils/date.util";

export async function saveProductLog({
  product,
  logType,
}: SaveProductLogDto): Promise<ProductLog> {
  return await db.productLog.create({
    data: {
      ...product,
      logDatetime: dbNow(),
      logGubun: logType,
      logUser: "[WEB]",
      logComputer: "[WEB]",
    },
  });
}

export async function saveProductLogs({
  products,
  logType,
}: SaveProductLogsDto) {
  for (const product of products) {
    await saveProductLog({ product, logType });
  }
}
