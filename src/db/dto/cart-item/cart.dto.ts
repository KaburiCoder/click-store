import { CartItem } from "@/db/models/cart-item";

export interface SaveCartItemDto {
  cartId: number;
  cartItems: CartItem[];
}
