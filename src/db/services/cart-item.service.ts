"use server";
import db from "@/db/db";
import { SaveCartItemDto } from "../dto/cart-item/cart.dto";
import { CartItem } from "@prisma/client";
import { isAuthenticated } from "@/lib/utils/user.util";
import { dbNow } from "@/lib/utils/date.util";

export async function saveAll({
  cartId,
  cartItems,
}: SaveCartItemDto): Promise<CartItem[]> {
  if (!isAuthenticated()) return [];
  const now = dbNow();

  return await db.$transaction(
    cartItems.map((ci) => {
      return db.cartItem.upsert({
        create: {
          cartId,
          code: ci.code,
          fit: ci.fit,
          quantity: ci.quantity,
          createdDate: now,
          updatedDate: now,
        },
        update: {
          id: ci.id,
          cartId,
          code: ci.code,
          fit: ci.fit,
          quantity: ci.quantity,
          updatedDate: now,
        },
        where: {
          id: ci.id ?? 0,
        },
      });
    }),
  );
}

export async function deleteCartItems(ids: number[]) {
  if (!isAuthenticated()) return;

  return await db.cartItem.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
}

export async function updateCartItemQuantity(id: number, quantity: number) {
  if (!isAuthenticated()) return;

  return await db.cartItem.update({
    data: { quantity, updatedDate: dbNow() },
    where: { id },
  });
}
