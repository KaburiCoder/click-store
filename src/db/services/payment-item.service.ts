import db from "../db";

export async function deletePaymentItems(...ids: number[]) {
  return await db.paymentItem.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
}
