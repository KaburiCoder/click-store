import db from "@/db/db";
import { Account } from "@/db/models/account";
import { User } from "@/lib/interfaces/user";

export async function convertAccountToUser(account: Account) {
  const { email, userId, admin, saupkiho, ykiho } = account;

  const cs = await db.cs.findFirst({
    where: {
      OR: [{ code: ykiho || undefined }, { saupnum: saupkiho || undefined }],
    },
  });

  const user: User = {
    email,
    userId,
    admin: admin || undefined,
    saupkiho: cs?.saupnum ?? "",
    ykiho: cs?.code,
    jisa: cs?.jisa ?? "001",
    name: cs?.myung ?? "",
    ceoName: cs?.daepyo ?? "",
    fitCherbang: cs?.cherbang === "4",
    fitYoungsu: cs?.youngsu === "4",
    useBNPL: cs?.etc34 === "1",
  };

  return user;
}
