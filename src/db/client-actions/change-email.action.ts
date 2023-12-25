"use server";
import { getUser, setUser } from "@/lib/utils/user.util";
import { z } from "zod";
import db from "../db";
import { resultWrapper } from "@/lib/utils/callback.util";
import { redirect } from "next/navigation";
import { paths } from "@/paths";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("이메일 형식에 맞지 않습니다."),
});

interface ChangeEmailResult {
  changedEmail?: string;
  errorMessage?: string;
}

export async function changeEmailAction(
  data: z.infer<typeof schema>,
): Promise<ChangeEmailResult> {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      errorMessage: result.error.flatten().fieldErrors.email?.join(", "),
    };
  }

  const { email } = result.data;
  const user = await getUser();

  if (!user) {
    return {
      errorMessage: "사용자 정보가 존재하지 않습니다.",
    };
  }
  if (user?.email.trim().toLowerCase() === email) {
    return {
      errorMessage: "기존 이메일과 동일합니다.",
    };
  }

  const accountResult = await resultWrapper(
    async () =>
      await db.account.update({
        data: { email },
        where: { userId: user.userId },
      }),
  );

  if (accountResult.errorMessage) {
    return {
      errorMessage: accountResult.errorMessage,
    };
  }

  setUser({ ...user, email });

  return { changedEmail: email };
}
