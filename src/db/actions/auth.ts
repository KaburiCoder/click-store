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

// export async function loginAction(
//   _currentState: any,
//   formData: FormData,
// ): Promise<{ errorMessage?: string } | undefined> {
//   const id = formData.get("id") as string;
//   const password = formData.get("password") as string;

//   try {
//     const account = await AccountService.findByUserId(id);

//     await loginValidate(id, password, account?.password);

//     if (account) {
//       const { email, userId, admin, saupkiho, ykiho } = account;

//       const cs = await db.cs.findFirst({
//         where: {
//           OR: [
//             { code: ykiho || undefined },
//             { saupnum: saupkiho || undefined },
//           ],
//         },
//       });

//       setUser({
//         email,
//         userId,
//         admin: admin || undefined,
//         saupkiho: cs?.saupnum,
//         ykiho: cs?.code,
//         jisa: cs?.jisa ?? "001",
//         name: cs?.myung ?? "",
//         ceoName: cs?.daepyo ?? "",
//         fitCherbang: cs?.cherbang === "4",
//         fitYoungsu: cs?.youngsu === "4",
//         useBNPL: cs?.etc34 === "1",
//       });
//     }
//   } catch (error: any) {
//     return {
//       errorMessage: error?.message,
//     };
//   }
//   redirect("/");
// }
