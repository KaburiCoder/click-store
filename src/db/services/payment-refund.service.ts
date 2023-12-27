import db from "../db";

interface SavePaymentRefundArgs {
  paymentId: number;
  bank: string;
  accountNumber: string;
  holderName: string;
  amount: number;
  reason: string;
}

export async function savePaymentRefund({
  paymentId,
  bank,
  accountNumber,
  holderName,
  amount,
  reason,
}: SavePaymentRefundArgs) {
  await db.$queryRaw`
  INSERT INTO paymentrefund(
    paymentId, bank, accountNumber, holderName, amount, reason
  ) VALUES (
    ${paymentId}, ${bank}, HEX(AES_ENCRYPT(${accountNumber}, ${process.env.CLICK_ENC_KEY})), ${holderName}, ${amount}, ${reason}
  )
  `;
}
