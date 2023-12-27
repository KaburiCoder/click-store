import type { Em, Product as ProductType } from "@prisma/client";
import { Cs } from "./cs";
import { ProductListSub } from "./product-list-sub";

export interface Product extends ProductType {
  cs?: Cs;
  em?: Em;
  pls?: ProductListSub;
}
