"use server";

import { getUser } from "@/lib/utils/user.util";
import db from "../db";
import { getAccountByUserId } from "./account.service";
import { dbNow } from "@/lib/utils/date.util";

interface SaveOrderReqMsgArgs {
  message: string;
}
async function _getAccount() {
  const user = await getUser();
  if (!user) return;

  const account = await getAccountByUserId(user.userId);
  return account;
}
export async function saveOrderReqMsg({ message }: SaveOrderReqMsgArgs) {
  const account = await _getAccount();
  if (!account) return;

  await db.orderReqMsg.upsert({
    create: {
      accountId: account.id,
      message,
      updatedAt: dbNow(),
    },
    update: {
      accountId: account.id,
      message,
      updatedAt: dbNow(),
    },
    where: {
      accountId_message: {
        message,
        accountId: account.id,
      },
    },
  });
}

export async function getOrderReqMsgs({
  orderBy,
}: {
  orderBy: "acs" | "desc";
}) {
  const account = await _getAccount();
  if (!account) return;

  const result = await db.orderReqMsg.findMany({
    where: {
      accountId: account.id,
    },
    orderBy: {
      updatedAt: orderBy === "desc" ? "desc" : "asc",
    },
    take: 5,
  });

  return result.map((r) => r.message);
}
