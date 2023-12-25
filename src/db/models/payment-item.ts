import { Prisma, Product } from "@prisma/client";
import { ProductList } from "./product-list";

export interface PaymentItem extends Prisma.PaymentItemCreateManyInput {
  pd?: Product;
  pl?: ProductList;
}
