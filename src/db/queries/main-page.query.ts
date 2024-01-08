"use server";
import { findWebBunryuList } from "../services/product-list-web-bunryu.service";
import { getWebProductList } from "../services/product-list.service";
import { ProductListSub } from "../models/product-list-sub";
import { ProductList } from "../models/product-list";
import { cache } from "react";
import ZipUtil from "../../lib/utils/zip.util";
import { ProductListWebBunryu } from "../models/product-list-web-bunryu";
import db from "@/db/db";
import { getLatestPlsList } from "@/db/services/product-list-sub.service";
import { getProductListImage } from "@/db/services/product-list-image.service";
import { imgPaths } from "@/paths";
import { getUser } from "@/lib/utils/user.util";

// 테스트 계정이 아닌 경우 테스트 상품은 보이지 않게
function checkTestingVisible(ykiho: string, pdName: string) {
  const isTestName = pdName.indexOf("*테스트*") > -1;
  const isTestYKiho = ["10170068", "99999999"].includes(ykiho);

  return !isTestYKiho && isTestName;
}
export const getBunryuObjectList = async () => {
  const webBunryuList = await findWebBunryuList();
  const plList = await getWebProductList();
  const plsList = await getLatestPlsList();
  const user = await getUser();
  const bunryuObjects: BunryuObject[] = [...webBunryuList];

  for (const bunryuObj of bunryuObjects) {
    const { code: bunryu } = bunryuObj;
    const foundPlList = plList.filter((p) => p.bunryu === bunryu);

    const products = foundPlList.reduce((acc: Products[], cur) => {
      const pls = plsList.find((p) => p.smCode === cur.smCode);
      if (pls && checkTestingVisible(user!.ykiho!, pls.smMyung)) {
        return acc;
      }

      const obj = Object.assign({ ...cur, ...pls });
      return acc.concat([obj]);
    }, []);

    // 이미지 추가
    for (const p of products) {
      p.src = await getProductImage({ smCode: p.smCode });
    }

    bunryuObj.products = products;
  }

  return bunryuObjects;
};

export const getProductImage = cache(async ({ smCode }: { smCode: string }) => {
  const result = await getProductListImage({ smCode });
  if (!result?.image) {
    return imgPaths.noImage;
  }
  const decompressBytes = await ZipUtil.decompress(result?.image);
  const imgBase64 = decompressBytes.toString("base64");
  return `data:image/png;base64,${imgBase64}`;
});

export async function getProducts() {
  return await db.account.findMany();
}

export type Products = ProductList & ProductListSub & { src: string };
export interface BunryuObject extends ProductListWebBunryu {
  products?: Products[];
}
