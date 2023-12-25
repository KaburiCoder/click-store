"use server";
import db from "@/db/db";
import { dbNow } from "@/lib/utils/date.util";
import { Account, Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import { randomUUID } from "crypto";

export async function getAccountByToken({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) {
  "use server";

  const account = await db.account.findFirst({
    where: {
      userId,
      token,
    },
  });

  return account;
}

export async function getAccountByUserId(userId: string) {
  return await db.account.findFirst({ where: { userId } });
}

export async function isUserIdExists(userId: string) {
  const count = await db.account.count({
    where: { userId },
  });
  return count > 0;
}

export async function createAccount({
  data,
}: {
  data: Prisma.AccountCreateInput;
}) {
  const hashedPassword = await hash(data.password, 10);
  const now = dbNow();
  return await db.account.create({
    data: {
      ...data,
      createdAt: now,
      updatedAt: now,
      password: hashedPassword,
    },
  });
}
export async function updatePassword(
  userId: string,
  password: string,
): Promise<Account>;
export async function updatePassword(
  userId: string,
  password: string,
  clearToken: boolean,
): Promise<Account>;

export async function updatePassword(
  userId: string,
  password: string,
  clearToken?: boolean,
): Promise<Account> {
  const hashedPassword = await hash(password, 10);
  return await db.account.update({
    data: {
      updatedAt: dbNow(),
      password: hashedPassword,
      token: clearToken ? "" : undefined,
    },
    where: {
      userId,
    },
  });
}

export async function updateAccountToken(userId: string) {
  const uuid = randomUUID();

  await db.account.update({
    data: {
      updatedAt: dbNow(),
      token: uuid,
    },
    where: { userId },
  });

  return uuid;
}
