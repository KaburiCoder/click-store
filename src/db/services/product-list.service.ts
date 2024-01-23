import db from "@/db/db";
import { ProductList } from "../models/product-list";
import { getJisa } from "@/lib/utils/user.util";
import { Prisma } from "@/prisma/client";

export async function getWebProductList() {
  const jisa = await getJisa();

  return await db.productList.findMany({
    select: { smCode: true, bunryu: true, step: true, fit: true, card: true },
    where: { jisa, web: true },
    orderBy: { smCode: "asc" },
  });
}

export async function getFirstPl({
  smCode,
  select,
}: {
  smCode: string;
  select?: Prisma.ProductListSelect;
}): Promise<ProductList> {
  const jisa = await getJisa();

  const data = await db.productList.findFirst({
    select: select,
    where: { jisa, smCode, web: true },
    orderBy: { smCode: "asc" },
  });

  return Object.assign({ ...data });
}
