import type { Cart as CartType } from "@prisma/client";
import { CartItem } from "./cart-item";

export interface Cart extends CartType {
  cartItems?: CartItem[];
}
