"use server";
import ZipUtil from "@/lib/utils/zip.util";
import db from "../db";

export async function getPgMessage() {
  const result = await db.pgMsg.findFirst();
  if (!result?.msg) return "";

  return await ZipUtil.decompressToString(result.msg);
}

export async function savePgMessage(message: string) {
  const buffer = Buffer.from(message, "utf-8");
  const compressedBuffer = await ZipUtil.compress(buffer);

  const pgMsg = await db.pgMsg.findFirst();

  await db.pgMsg.upsert({
    create: { msg: compressedBuffer },
    update: { id: pgMsg?.id, msg: compressedBuffer },
    where: { id: pgMsg?.id ?? 0 },
  });

  return { status: "success" };
}

export async function deletePgMessage() {
  await db.pgMsg.deleteMany();

  return { status: "success" };
}
