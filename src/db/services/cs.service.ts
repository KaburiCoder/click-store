"use server";
import db from "@/db/db";
import { Cs } from "../models/cs";
import { Prisma } from "@/prisma/client";
import { getJisa, getUser } from "@/lib/utils/user.util";
import dayjs from "dayjs";
import { getAdminYKihos } from "./account.service";

export async function getCsByYkiho(ykiho: string): Promise<Cs> {
  const cs = await db.cs.findFirst({
    where: {
      code: ykiho,
    },
  });

  return cs as Cs;
}

export async function getCsByUserId(
  userId: string,
  select?: Prisma.CsSelect,
): Promise<Cs> {
  const cs = await db.cs.findFirst({
    select,
    where: {
      OR: [{ code: userId }, { saupnum: userId }],
    },
  });

  return cs as Cs;
}

export async function isCsExistsByUserId(userId: string) {
  const data = await getCsByUserId(userId, { code: true });
  return !!data;
}

export async function getYkihos({
  where,
}: { where?: Prisma.CsWhereInput } = {}): Promise<string[]> {
  const jisa = await getJisa();
  const result = await db.cs.findMany({
    select: {
      code: true,
    },
    where: {
      jisa,
      OR: [
        { lymd: "" },
        {
          lymd: {
            gt: dayjs().format("YYYYMMDD"),
          },
        },
      ],
      ...where,
    },
  });

  return result.map((d) => d.code);
}

export async function getYkihosByManager(
  manager: string | undefined,
  showAdmin?: boolean,
) {
  let ykihos = manager
    ? await getYkihos({ where: { emCode: manager } })
    : await getYkihos();

  if (!showAdmin) {
    const adminYKihos = await getAdminYKihos();
    ykihos = ykihos.filter((ykiho) => !adminYKihos.includes(ykiho));
  }
  return ykihos;
}

export async function getYkihosByMyung(myung?: string) {
  return await getYkihos({
    where: {
      myung: {
        contains: myung?.trim(),
      },
    },
  });
}

export async function excludePgMessage() {
  try {
    const user = await getUser();
    const { webExMsg } = await getCsByUserId(user!.userId, { webExMsg: true });

    return webExMsg;
  } catch {
    return false;
  }
}
