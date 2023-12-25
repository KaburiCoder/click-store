import db from "@/db/db";
import { getJisa } from "@/lib/utils/user.util";

export async function getProductListImage({ smCode }: { smCode: string }) {
  const jisa = await getJisa();

  return await db.productListImage.findUnique({
    select: { image: true },
    where: { jisa, smCode },
  });
}
