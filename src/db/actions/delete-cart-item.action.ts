"use server";
import { revalidatePath } from "next/cache";
import { deleteCartItems } from "../services/cart-item.service";
// import { redirect } from "next/navigation";

export const deleteCartItemAction = async (_: any, formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await deleteCartItems([+id]);
  } catch (err) {
    throw new Error("카트 아이템 삭제 실패!");
  }

  revalidatePath("/(main)/cart-view");
  // redirect("/cart-view");
};
