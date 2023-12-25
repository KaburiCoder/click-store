"use server";
import db from "@/db/db";
import { Cs } from "../models/cs";
import { Prisma } from "@prisma/client";

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
