import { Prisma } from "@prisma/client";
import { Cart } from "./cart";
import { ProductListSub } from "./product-list-sub";
import { ProductList } from "./product-list";

export interface CartItem extends Prisma.CartItemCreateManyInput {
  cart: Cart;
  pl: ProductList | null;
  pls: ProductListSub | null;
}
