"use server";
import { getJisa } from "@/lib/utils/user.util";
import db from "../db";
import { Em } from "@/prisma/client";

interface GetManagersResult {
  code: string;
  name: string;
}

export async function getManagers(): Promise<GetManagersResult[]> {
  const jisa = await getJisa();
  const result = await db.$queryRaw<GetManagersResult[]>`

  SELECT em_code code, em_name name FROM em
  WHERE (em_endymd = '' OR em_endymd >= DATE_FORMAT(now(), '%Y%m%d'))
  AND em_jisa = ${jisa}
  AND em_bucode = '400'
  AND em_code <> '099'
  ORDER BY em_code
  `;

  // const data = [{ code: "전체", name: "전체" }, ...result];
  return result;
}

export async function getEm(code: string) {
  return ((await db.em.findUnique({ where: { code } })) as Em) ?? undefined;
}
