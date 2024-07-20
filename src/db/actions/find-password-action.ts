"use server";
import {
  getAccountByUserId,
  updateAccountToken,
} from "../services/account.service";
import { z } from "zod";
import { resultWrapper2 } from "@/lib/utils/callback.util";
import { NodeMailerUtil } from "@/lib/utils/nodemailer/nodemailer.util";
import { getEnv } from "@/configs/env-config";

interface FindPasswordResult {
  sendedEmail?: string;
  errorMessage?: string;
}
export async function findPasswordAction(
  state: FindPasswordResult,
  formData: FormData,
): Promise<FindPasswordResult> {
  const result = z
    .object({
      userId: z.string().min(1, { message: "아이디를 입력하세요." }),
    })
    .safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { errorMessage: result.error.flatten().formErrors.join(", ") };
  }

  const { userId } = result.data;
  const account = await getAccountByUserId(userId);

  if (!account) {
    return { errorMessage: "계정정보가 존재하지 않습니다." };
  } else if (!account.email) {
    return { errorMessage: "이메일 정보가 존재하지 않습니다." };
  }

  const tokenResult = await resultWrapper2(updateAccountToken(userId));
  const { result: token, errorMessage } = tokenResult;
  if (errorMessage) {
    return { errorMessage };
  }

  const env = await getEnv();
  const nodemailer = new NodeMailerUtil(env);
  const nodemailerResult = await resultWrapper2(
    nodemailer.sendChangePasswordEmail({
      email: account.email,
      token: token!.toString(),
      userId,
    }),
  );

  if (nodemailerResult.errorMessage) {
    return { errorMessage: nodemailerResult.errorMessage };
  }

  return { sendedEmail: account.email };
}
