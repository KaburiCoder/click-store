import db from "@/db/db";
import { ProductListSub } from "../models/product-list-sub";
import { getJisa } from "@/lib/utils/user.util";

export async function getLatestPlsList() {
  const jisa = await getJisa();

  const pls = await db.$queryRaw<ProductListSub[]>`
  WITH p AS (
    SELECT * FROM productlistsub  
    WHERE pls_jisa = ${jisa}
  ),
  p2 AS (
    SELECT pls_smcode smcode, max(pls_smymd) maxymd
    FROM productlistsub
    WHERE pls_jisa = ${jisa}
    GROUP BY pls_smcode, pls_smymd
  )
  SELECT 
    pls_smcode smCode, pls_smmyung smMyung, pls_smymd smYmd, pls_danga danga, pls_danwi danwi 
  FROM p
  INNER JOIN p2
  ON p.pls_smcode = p2.smcode
  AND p.pls_smymd = p2.maxymd
  `;

  return pls;
}

export async function getLatestPls({
  smCode,
}: {
  smCode: string;
}): Promise<ProductListSub | undefined> {
  const jisa = await getJisa();
  const data = await db.productListSub.findFirst({
    where: {
      jisa,
      smCode,
    },
    orderBy: {
      smYmd: "desc",
    },
  });

  return data ?? undefined;
}
