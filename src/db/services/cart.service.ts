"use server";
import db from "@/db/db";
import { Cart } from "@/db/models/cart";
import { getLatestPls } from "./product-list-sub.service";
import { getFirstPl } from "./product-list.service";
import { getUser } from "@/lib/utils/user.util";
import { CartItem } from "@/db/models/cart-item";
import { AddToCartDto } from "../dto/cart/add-to-cart.dto";
import * as cartItemService from "./cart-item.service";

export async function getCartWithProduct(): Promise<Cart | undefined> {
  try {
    const cart = await getCart();

    if (cart?.cartItems) {
      for (const ci of cart.cartItems) {
        ci.pl = await getFirstPl({ smCode: ci.code, select: { step: true } });
        ci.pls = await getLatestPls({ smCode: ci.code });
      }
    }

    return cart;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getCart(): Promise<Cart | undefined> {
  const ykiho = (await getUser())?.ykiho;

  try {
    const data = await db.cart.findFirst({
      where: {
        ykiho,
      },
      include: { cartItems: true },
    });

    const cart: Cart = Object.assign({ ...data });

    return cart;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getItemsCount(): Promise<number | undefined> {
  const cart = await getCart();
  const itemsCount: number | undefined = cart?.cartItems?.reduce(
    (acc: number, ci: CartItem) => {
      return acc + ci.quantity;
    },
    0,
  );

  return itemsCount;
}

export async function createCart(): Promise<Cart> {
  const user = await getUser();
  if (!user?.ykiho) {
    throw new Error("계정정보 오류 - ykiho 부재");
  }
  let cart = await db.cart.findFirst({
    where: { ykiho: user?.ykiho },
    include: {
      cartItems: true,
    },
  });

  if (!cart) {
    cart = await db.cart.create({
      data: {
        ykiho: user?.ykiho,
      },
      include: {
        cartItems: true,
      },
    });
  }

  return Object.assign(cart);
}

export async function saveCart(args: AddToCartDto): Promise<boolean> {
  const cart: Cart = await createCart();

  const newCartItem: CartItem = {
    cart,
    cartId: cart.id!,
    code: args.code,
    fit: args.fit,
    quantity: args.quantity,
    pl: undefined,
    pls: undefined,
  };

  let newCartItems: CartItem[];

  if (cart.cartItems) {
    newCartItems = [...cart.cartItems];

    const cartItem = newCartItems.find(
      (cartItem) =>
        cartItem.code === newCartItem.code && cartItem.fit === newCartItem.fit,
    );
    if (cartItem) {
      cartItem.quantity += newCartItem.quantity;
    } else {
      newCartItems.push(newCartItem);
    }
  } else {
    newCartItems = [newCartItem];
  }

  const items = await cartItemService.saveAll({
    cartId: cart.id!,
    cartItems: newCartItems,
  });

  return items.length > 0;
}
