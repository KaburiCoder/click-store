"use server";
import db from "@/db/db";
import { ProductListWebBunryu } from "@/prisma/client";

export async function findWebBunryuList(): Promise<ProductListWebBunryu[]> {
  return await db.productListWebBunryu.findMany({
    select: {
      code: true,
      name: true,
      fit: true,
    },
    orderBy: {
      code: "asc",
    },
  });
}
