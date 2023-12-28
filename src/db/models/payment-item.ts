import { Prisma, Product } from "@prisma/client";
import { ProductList } from "./product-list";
import { Payment } from "./payment";

export interface PaymentItem extends Prisma.PaymentItemCreateManyInput {
  pd?: Product;
  pl?: ProductList;
  payment?: Payment;
}
