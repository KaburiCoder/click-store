"use server";
import {
  checkConfirmPassword,
  checkValidatePassword,
} from "@/lib/utils/password.util";
import { z } from "zod";
import { getAccountByToken, updatePassword } from "../services/account.service";
import { resultWrapper2 } from "@/lib/utils/callback.util";

const shcema = z.object({
  password: z.string().min(1, { message: "비밀번호를 입력하세요." }),
  confirmPassword: z
    .string()
    .min(1, { message: "비밀번호 확인을 입력하세요." }),
});

interface ChangeNewPasswordResult {
  success?: boolean;
  errors?: {
    password?: string[];
    confirmPassword?: string[];
    errorMessage?: string;
  };
}

export interface SearchParamsArgs {
  userId: string;
  token: string;
}

export async function changeNewPasswordAction(
  { userId, token }: SearchParamsArgs,
  state: ChangeNewPasswordResult,
  formData: FormData,
): Promise<ChangeNewPasswordResult> {
  const result = shcema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const { password, confirmPassword } = result.data;
  const confirmResult = checkConfirmPassword(password, confirmPassword);
  if (confirmResult) {
    return confirmResult;
  }

  const validResult = checkValidatePassword(password, confirmPassword);
  if (validResult?.errors) {
    return {
      errors: validResult.errors,
    };
  }

  const account = await getAccountByToken({ userId, token });
  if (!account) {
    return {
      errors: {
        errorMessage: "비밀번호 변경 권한이 만료되었습니다.",
      },
    };
  }

  const updatePasswordResult = await resultWrapper2(
    updatePassword(userId, password, true),
  );

  if (updatePasswordResult.errorMessage) {
    return {
      errors: {
        errorMessage: updatePasswordResult.errorMessage,
      },
    };
  }

  return {
    success: true,
  };
}
