"use server";
import { z } from "zod";
import db from "../db";
import { getUser } from "@/lib/utils/user.util";
import { comparePassword, loginValidate } from "@/lib/validates/auth.validate";
import { resultWrapper } from "@/lib/utils/callback.util";
import { updatePassword } from "../services/account.service";
import {
  checkConfirmPassword,
  checkValidatePassword,
} from "@/lib/utils/password.util";

const schema = z.object({
  prevPassword: z.string().min(1, { message: "기존 비밀번호를 입력하세요." }),
  password: z.string().min(1, { message: "변경할 비밀번호를 입력하세요." }),
  confirmPassword: z
    .string()
    .min(1, { message: "비밀번호 재확인을 입력하세요." }),
});

type ChangePasswordType = z.infer<typeof schema>;

interface ChangePasswordResult {
  errors?: {
    prevPassword?: string[];
    password?: string[];
    confirmPassword?: string[];
    _form?: string[];
  };
}

export async function changePasswordAction(
  data: ChangePasswordType,
): Promise<ChangePasswordResult> {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { prevPassword, password, confirmPassword } = result.data;

  const validResult = checkValidatePassword(password, confirmPassword);
  if (validResult?.errors) {
    return {
      errors: validResult.errors,
    };
  }

  const user = await getUser();

  if (!user) return unauthenticateError();

  const { errors } = await isValidChangePassword({
    userId: user.userId,
    prevPassword,
    password,
    confirmPassword,
  });

  if (errors) {
    return { errors };
  }

  const { errorMessage } = await resultWrapper(
    async () => await updatePassword(user.userId, password),
  );

  if (errorMessage) {
    return {
      errors: {
        _form: [errorMessage],
      },
    };
  }

  return {};
}

async function isValidChangePassword({
  userId,
  prevPassword,
  password,
  confirmPassword,
}: ChangePasswordType & {
  userId: string;
}): Promise<ChangePasswordResult> {
  const confirmResult = checkConfirmPassword(password, confirmPassword);
  if (confirmResult) {
    return confirmResult;
  }

  const account = await db.account.findUnique({
    where: { userId },
  });

  if (!account) return unauthenticateError();

  if (!(await comparePassword(prevPassword, account.password))) {
    return {
      errors: {
        prevPassword: ["이전 비밀번호가 틀렸습니다."],
      },
    };
  }

  if (prevPassword === password) {
    return {
      errors: {
        password: ["이전 비밀번호와 변경할 비밀번호가 같습니다."],
      },
    };
  }

  return {};
}

function unauthenticateError() {
  return {
    errors: {
      _form: ["계정 정보가 없습니다."],
    },
  };
}
