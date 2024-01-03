"use server";
import {
  checkConfirmPassword,
  checkValidatePassword,
} from "@/lib/utils/password.util";
import { paths } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createAccount, isUserIdExists } from "../services/account.service";
import { resultWrapper2 } from "@/lib/utils/callback.util";
import { getCsByUserId } from "../services/cs.service";

interface SignupResult {
  errors?: {
    userId?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    _form?: string[];
  };
}

export async function signupAction(
  state: SignupResult,
  formData: FormData,
): Promise<SignupResult> {
  const result = z
    .object({
      userId: z.string().min(1, { message: "아이디를 입력하세요." }),
      email: z.string().email({ message: "이메일 형식이 맞지 않습니다." }),
      password: z.string().min(1, { message: "비밀번호를 입력하세요." }),
      confirmPassword: z
        .string()
        .min(1, { message: "비밀번호 재확인을 입력하세요." }),
    })
    .safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const { userId, email, password, confirmPassword } = result.data;

  const validResult = checkValidatePassword(password, confirmPassword);
  if (validResult?.errors) {
    return {
      errors: validResult.errors,
    };
  }

  const confirmResult = checkConfirmPassword(password, confirmPassword);
  if (confirmResult) {
    return confirmResult;
  }

  const userIdExists = await isUserIdExists(userId);
  if (userIdExists) {
    return {
      errors: {
        userId: ["이미 존재하는 아이디입니다."],
      },
    };
  }

  const cs = await getCsByUserId(userId);
  if (!cs) {
    return {
      errors: {
        userId: ["클릭소프트에 등록된 계정이 아닙니다. 관리자에게 문의하세요."],
      },
    };
  }

  const onlySaupNumber = cs.saupnum?.match(/\d+/g)?.join("");
  const createAccountResult = await resultWrapper2(
    createAccount({
      data: {
        userId,
        password,
        email,
        saupkiho: onlySaupNumber,
        ykiho: cs.code,
      },
    }),
  );

  if (createAccountResult.errorMessage) {
    return {
      errors: {
        _form: [createAccountResult.errorMessage],
      },
    };
  }

  revalidatePath(paths.root());
  redirect(paths.root());
}
