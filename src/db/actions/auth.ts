"use server";

import { signIn, signOut } from "@/app/api/auth/utils/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "아이디 혹은 비밀번호가 잘못되었습니다.";
        case "CallbackRouteError":
          return error.cause?.err?.message;
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function logoutAction() {
  await signOut();
}
