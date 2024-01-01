"use server";
import { getCancelUrl, getTossPaymentsHeaders } from "@/lib/utils/toss-pg.util";

export async function cancelTossPayment(
  paymentKey: string,
  cancelReason: string,
) {
  const url = getCancelUrl(paymentKey);
  const headers = getTossPaymentsHeaders();
  // headers["Idempotency-Key"] = "SAAABPQbcqjEXiDL2";

  const body = { cancelReason };
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}
